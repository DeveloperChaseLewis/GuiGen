class RandomName:
    def __init__(self) -> None:
        self._first = ""
        self._middle = ""
        self._last = ""

    @property
    def first(self):
        return self._first

    @property
    def middle(self):
        return self._middle

    @property
    def middle_initial(self):
        return self._middle[0]

    @property
    def last(self):
        return self._last
    