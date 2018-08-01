from bs4 import BeautifulSoup
from uuid import uuid4
from xml.sax.handler import ContentHandler
from xml.sax import make_parser
from xml.sax._exceptions import SAXParseException


class ParsingError(Exception):
    pass


class AtomTypeError(ParsingError):
    pass


class ValidationError(ParsingError):
    pass


class Package:
    def __init__(self, xml_file):
        self._is_well_formed(xml_file)

        with open(xml_file, encoding="utf8") as content:
            xml_markup = content.read()
            content.close()

        self.soup = BeautifulSoup(xml_markup, 'lxml')
        self.root = self.soup.find('package')

        if not self.root:
            raise ValidationError('Root element is missing')

        self.authors = [author.text for author in self.root.find('info').find_all('author')]

        try:
            self.comments = self.root.find('comments').text
            self.sources = self.root.find('sources').text
        except AttributeError:
            self.comments = []
            self.sources = []

        self.name = self.root.get('name', '')
        self.date = self.root.get('date', '')
        self.version = self.root.get('version', '')
        self.id = self.root.get('id', str(uuid4()))
        self.restriction = self.root.get('restriction', '')

    @staticmethod
    def _is_well_formed(xml_file):
        parser = make_parser()
        parser.setContentHandler(ContentHandler())
        try:
            parser.parse(xml_file)
        except SAXParseException:
            raise ValidationError('XML is not well-formed')

    def to_dict(self):
        package_rounds = []
        package_dict = {'id': self.id,
                        'name': self.name,
                        'date': self.date,
                        'version': self.version,
                        'restriction': self.restriction,
                        'comments': self.comments,
                        'authors': self.authors,
                        'sources': self.sources,
                        'rounds': package_rounds,
                        }

        for round_element in self.soup.find_all('round'):
            round_name = round_element['name']

            try:
                round_authors = [author.text for author in round_element.find('info').find_all('author')]
                round_comments = [comments.text for comments in round_element.find('info').find_all('comments')]
                round_sources = [sources.text for sources in round_element.find('info').find_all('sources')]
            except AttributeError:
                round_authors = []
                round_comments = []
                round_sources = []

            themes = []

            for theme in round_element.find_all('theme'):
                theme_name = theme['name']
                try:
                    theme_authors = [author.text for author in theme.find('info').find_all('author')]
                    theme_comments = [comments.text for comments in theme.find('info').find_all('comments')]
                    theme_sources = [sources.text for sources in theme.find('info').find_all('sources')]
                except AttributeError:
                    theme_authors = []
                    theme_comments = []
                    theme_sources = []

                questions = []

                for question in theme.find_all('question'):
                    q_price = question['price']

                    try:
                        q_authors = [author.text for author in question.find('info').find_all('author')]
                        q_comments = [comments.text for comments in question.find('info').find_all('comments')]
                        q_sources = [sources.text for sources in question.find('info').find_all('sources')]
                    except AttributeError:
                        q_authors = []
                        q_comments = []
                        q_sources = []

                    atoms, atom_answers = self.get_atoms(question)
                    answers = [answer.text for answer in question.find('right').find_all('answer')]
                    params = {}

                    try:
                        q_type = question.find('type')['name']
                        for param in question.find('type', attrs={'name': q_type}).find_all('param'):
                            params[param['name']] = param.text
                    except TypeError:
                        q_type = 'simple'
                        params = []

                    questions.append({'info': {'price': q_price,
                                               'authors': q_authors,
                                               'comments': q_comments,
                                               'sources': q_sources,
                                               'type': {'name': q_type,
                                                        'params': params}},
                                      'atoms': atoms,
                                      'answers': answers,
                                      'atom_answers': atom_answers})

                themes.append({'name': theme_name,
                               'info': {'authors': theme_authors,
                                        'comments': theme_comments,
                                        'sources': theme_sources},
                               'questions': questions})

            package_rounds.append({'name': round_name,
                                   'info': {'authors': round_authors,
                                            'comments': round_comments,
                                            'sources': round_sources},
                                   'themes': themes})

        return package_dict

    def get_media_link(self, atom_type, atom_content):
        if atom_content.startswith('@'):
            return f'/media/{self.id}/{atom_type}/{atom_content[1:]}'
        else:
            return atom_content

    def get_atoms(self, question):
        atom_elements = question.find_all('atom')
        atoms = []
        atom_answers = []
        atom_after_marker = False
        for atom_element in atom_elements:
            try:
                atom_type = atom_element['type']
            except KeyError:
                atom_type = 'simple'

            atom_content = atom_element.text
            if atom_type == 'marker':
                atom_after_marker = True
                continue

            elif atom_type in ('simple', 'say'):
                if atom_after_marker:
                    atom_answers.append((atom_type, atom_content))
                else:
                    atoms.append((atom_type, atom_content))

            elif atom_type in ('image', 'video', 'voice'):
                if atom_after_marker:
                    atom_answers.append((atom_type, self.get_media_link(atom_type, atom_content)))
                else:
                    atoms.append((atom_type, self.get_media_link(atom_type, atom_content)))

            else:
                raise AtomTypeError('Unknown atom type')

        return atoms, atom_answers
