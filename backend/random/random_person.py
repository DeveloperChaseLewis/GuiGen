from random_name import RandomName
from random_ssn import RandomSSN

class RandomPerson:
    def __init__(self) -> None:
        self._name = RandomName()
        self._ssn = RandomSSN()

    
    