def checkMatch(guess, answer):
    return sum([guess[i] == answer[i] for i in range(3)])

def checkClose(guess, answer):
    return sum([guess[i] in answer for i in range(3)])

# Generate the answer
import random
digits = list(range(10))
random.shuffle(digits)
answer_list = digits[:3]

print("Welcome Code Breaker! Let's see if you can guess my 3 digit number!")
print("Code has been generated, please guess a 3 digit number.")

while True:
    guess = input("What is your guess?")
    guess_list = [int(digit) for digit in str(guess)]

    # Check for matching digits
    if checkMatch(guess_list, answer_list) == 3:
        print("C\nO\nD\nE\n\nC\nR\nA\nC\nK\nE\nD")
        break
    elif checkMatch(guess_list, answer_list) in [1, 2]:
        print("Match")
    else:
        # Check for close digits
        if checkClose(guess_list, answer_list) == 0:
            print("Nope")
        else:
            print("Close")
