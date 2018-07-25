from exceptions import AtomTypeError, ValidationError

from bs4 import BeautifulSoup
from uuid import uuid4 as generate_id
from xml.sax.handler import ContentHandler
from xml.sax import make_parser
from xml.sax._exceptions import SAXParseException

xml_file = r'D:\Projects\xml_parser\ProbablyPosledniy\content.xml'

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

        try:
            self.date = self.root['date']
            self.version = self.root['version']
            self.id = self.root['id']
            self.restriction = self.root['restriction']
        except KeyError:
            self.restriction = []
            self.date = []
            self.version = []
            self.id = str(generate_id())

    def _is_well_formed(self, xml_file):
        parser = make_parser()
        parser.setContentHandler(ContentHandler())
        try:
            parser.parse(xml_file)
        except SAXParseException:
            raise ValidationError('XML is not well-formed')



    def to_dict(self):
        package_rounds = []

        for round in self.soup.find_all('round'):
            round_name = round['name']

            try:
                round_authors = [author.text for author in round.find('info').find_all('author')]
                round_comments = [comments.text for comments in round.find('info').find_all('comments')]
                round_sources = [sources.text for sources in round.find('info').find_all('sources')]
            except AttributeError:
                round_authors = []
                round_comments = []
                round_sources = []

            themes = []

            for theme in round.find_all('theme'):
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

                    atoms = list(self.get_atoms(question))
                    answers = [answer.text for answer in question.find('right').find_all('answer')]
                    params = {}

                    try:
                        type = question.find('type')['name']
                        for param in question.find('type', attrs={'name': type}).find_all('param'):
                            params[param['name']] = param.text
                    except TypeError:
                        type = 'simple'
                        params = []

                    questions.append({'info': {'price': q_price,
                                               'authors': q_authors,
                                               'comments': q_comments,
                                               'sources': q_sources,
                                               'type': {'name': type,
                                                        'params': params}},
                                      'atoms': atoms,
                                      'answers': answers})

                themes.append({theme_name: {'info': {'authors': theme_authors,
                                                     'comments': theme_comments,
                                                     'sources': theme_sources},
                                            'content': questions}})

            package_rounds.append({round_name: {'info': {'authors': round_authors,
                                                         'comments': round_comments,
                                                         'sources': round_sources},
                                                'content': themes}})

        return package_rounds

    def get_media_link(self, atom_type, atom_content):
        if atom_content.startswith('@'):
            return f'/media/{self.id}/{atom_type}/{atom_content[1:]}'
        else:
            return atom_content

    def get_atoms(self, question):
        atom_tags = question.find_all('atom')
        for atom_tag in atom_tags:
            try:
                atom_type = atom_tag['type']
            except KeyError:
                atom_type = 'simple'

            atom_content = atom_tag.text
            if str(atom_type) in ('simple', 'say', 'marker'):
                yield atom_type, atom_content
            elif str(atom_type) in ('image', 'video', 'voice'):
                yield atom_type, self.get_media_link(atom_type, atom_content)
            else:
                raise AtomTypeError('Unknown atom type')


p = Package(xml_file)

print(p.to_dict())
