from random_text import random_number

class RandomSSN:
    def __init__(self) -> None:
        self._first = random_number(3)
        self._middle = random_number(2)
        self._last = random_number(4)

    @property
    def ssn(self):
        return f"{self._first}{self._middle}{self._last}"

    @property
    def ssn_delimited(self):
        return f"{self._first}-{self._middle}-{self._last}"