//const mainDeck = makeDeck();

function innitializeDeck() {
    // const drawCard = []
    const deck = [];
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
    for (const value of values.split(',')) {
        for (const suitt of suits) {
            deck.push({ suitt, value });
        }
    }
    return deck;
}



function drawCard(deck, drawnCard) {
    const card = deck.pop()
    drawnCard.push(card);
    return card;
}

function drawMultiple(numCards, deck, drawnCard) {
    const card = [];
    for (let i = 0; i < numCards; i++) {
        card.push(this.drawCard(deck, drawnCard))

    }
    return card;

}


const firstDeck = innitializeDeck();
const drawnCard = [];
const hand1 = drawMultiple(5, firstDeck, drawnCard);
const poker = drawMultiple(5, firstDeck, drawnCard)
const sing = drawCard(firstDeck, drawnCard)


//const card1 = drawCard(myDeck)

const myDeck1 = {
    deck: [],
    drawnCards: [],
    suitss: ['hearts', 'diamonds', 'clubs', 'spades'],
    vals: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    innitializeDeck() {
        const { suitss, vals, deck } = this;
        for (const value of vals.split(',')) {
            for (const suitt of suitss) {
                deck.push({ suitt, value });
            }
        }
        //return deck;
    },
    drawCard() {
        const card1 = this.deck.pop();
        this.drawnCards.push(card1)
        return card1;

    },

    drawMultiple(numCards) {
        const cards = [];
        for (let i = 0; i < numCards; i++) {
            cards.push(this.drawCard())

        }
        return cards;
    },
    shuffle() {
        const { deck } = this;
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }

    }
}

const makDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        suitss: ['hearts', 'diamonds', 'clubs', 'spades'],
        vals: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
        innitializeDeck() {
            const { suitss, vals, deck } = this;
            for (const value of vals.split(',')) {
                for (const suitt of suitss) {
                    deck.push({ suitt, value });
                }
            }
            //return deck;
        },
        drawCard() {
            const card1 = this.deck.pop();
            this.drawnCards.push(card1)
            return card1;

        },
        drawMultiple(numCards) {
            const cards = [];
            for (let i = 0; i < numCards; i++) {
                cards.push(this.drawCard())

            }
            return cards;
        },
        shuffle() {
            const deck = this;
            for (let i = deck.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }

        }

    }
}
const myDek = makDeck()
myDeck1.innitializeDeck();
myDeck1.shuffle();
const h1 = myDeck1.drawMultiple(2);
const h2 = myDeck1.drawMultiple(3);
const deckTwo = makDeck()
deckTwo.innitializeDeck()