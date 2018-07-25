class ParsingError(Exception):
    pass

class AtomTypeError(ParsingError):
    pass

class ValidationError(ParsingError):
    pass