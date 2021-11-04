from random import seed
from random import randint


letters = "abcdefghijklmnopqrstuvwxyz"
numbers = "1234567890"

def random_alpha(characters: int):
    return "".join([randint(0,len(letters)) for _ in range(characters)])

def random_number(numbers: int):
    return "".join([randint(0,len(numbers)) for _ in range(numbers)])

