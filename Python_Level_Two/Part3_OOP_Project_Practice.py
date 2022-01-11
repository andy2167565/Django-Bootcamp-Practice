from random import shuffle
SUITE = 'H D S C'.split()
RANKS = '2 3 4 5 6 7 8 9 10 J Q K A'.split()

class Deck:
    """
    This is the Deck Class. This object will create a deck of cards to initiate
    play. You can then use this Deck list of cards to split in half and give to
    the players. It will use SUITE and RANKS to create the deck. It should also
    have a method for splitting/cutting the deck in half and Shuffling the deck.
    """
    def __init__(self):
        print("Creating New Ordered Deck")
        self.deck = [(s, r) for r in RANKS for s in SUITE]

    def shuffle_deck(self):
        print("Shuffling Deck")
        shuffle(self.deck)

    def split_deck(self):
        half = len(self.deck)//2
        return self.deck[:half], self.deck[half:]

class Hand:
    '''
    This is the Hand class. Each player has a Hand, and can add or remove
    cards from that hand. There should be an add and remove card method here.
    '''
    def __init__(self, cards):
        self.cards = cards

    def add(self, card):
        self.cards.extend(card)

    def remove(self):
        return self.cards.pop(0)

class Player:
    """
    This is the Player class, which takes in a name and an instance of a Hand
    class object. The Player can then play cards and check if they still have cards.
    """
    def __init__(self, name, hand):
        self.name = name
        self.hand = hand

    def play(self):
        card = self.hand.remove()
        print("{} has placed: {}".format(self.name, card))
        print("\n")
        return card

    def remove_war_cards(self):
        if len(self.hand.cards) < 3:
            get_num = len(self.hand.cards)
        else:
            get_num = 3
        return [self.hand.remove() for x in range(get_num)]

    def still_has_cards(self):
        """
        Returns True if player still has cards
        """
        return len(self.hand.cards) != 0


# GAME PLAY
print("Welcome to War, let's begin...")

# Create new deck and split in half
new_deck = Deck()
new_deck.shuffle_deck()
player_hand, computer_hand = new_deck.split_deck()

# Create both players
computer = Player("Computer", Hand(computer_hand))
player = Player(input("What is your name player? "), Hand(player_hand))

# Game start
total_rounds = 0
war_count = 0
# Game end if someone lose all the cards
while computer.still_has_cards() and player.still_has_cards():
    total_rounds += 1
    print("It is time for a new round!")

    # Check status
    print("Here are the current standings:")
    print(player.name, "count:", len(player.hand.cards))
    print(computer.name, "count:", len(computer.hand.cards))
    print("Both players play a card!")
    print("\n")

    # Cards on Table represented by list
    table_cards = []

    # Start playing
    # Check for remaining cards during the war
    while computer.still_has_cards() and player.still_has_cards():
        player_card = player.play()
        computer_card = computer.play()
        table_cards.extend([player_card, computer_card])
        # Shuffle table_cards to prevent from endless war
        shuffle(table_cards)
        if RANKS.index(player_card[1]) > RANKS.index(computer_card[1]):
            print(player.name, "has the higher card, adding to hand.")
            player.hand.add(table_cards)
            break
        elif RANKS.index(player_card[1]) < RANKS.index(computer_card[1]):
            print(computer.name, "has the higher card, adding to hand.")
            computer.hand.add(table_cards)
            break
        # War occurs
        else:
            war_count += 1
            print("We have a match, time for war!")
            print("Each player removes 3 cards 'face down' and then one card face up.")
            table_cards.extend(player.remove_war_cards())
            table_cards.extend(computer.remove_war_cards())

print("=============== Result ===============")
if computer.still_has_cards():
    print("Sorry, you failed this game.")
elif player.still_has_cards():
    print("Congratulations! You are the winner!")
else:
    print("This game ended in a tie. Try again!")

print("Great Game, it lasted:", str(total_rounds))
print("A war occured", str(war_count), "times.")
print("======================================")
