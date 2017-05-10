var scrubPoker = new Vue({
    el: '#ScrubPoker',
    created: function () {
        this.setDeck(this.decks[0].deck);
        this.state = this.gameState.choose;
    },
    data: {
        egg: 0,
        eggValue: '&#129370;&#129370;&#129370;',
        currentCard: 0,
        currentDeck: [],
        decks: [{
            name: 'Standard',
            deck: [0, '½', 1, 2, 3, 5, 8, 13, 20, 40, 100]
        }, {
            name: 'Fibonacci',
            deck: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
        }, {
            name: 'Natural',
            deck: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        }, {
            name: 'T-Shirt',
            deck: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']
        }],
        gameState: {
            choose: 0,
            hide: 1,
            card: 2,
        },
        magicValue: 12,
        miscDeck: ['?', '&#8734;', '&#9749;'],
        state: 0,
    },
    methods: {
        cardClick: function (event, card) {
            this.state = this.gameState.hide;
            this.currentCard = card;
            event.stopPropagation();
        },
        chosenCardClick: function (event) {
            this.state = this.gameState.choose;
            this.currentCard = 0;
        },
        deckClick: function (event, deck) {
            this.setDeck(deck.deck);
        },
        setDeck: function (deck) {
            this.currentDeck = deck;
        },
        tableClick: function () {
            if (this.state === this.gameState.hide) {
                this.state = this.gameState.card;
            } else this.egg++;
        }
    },
});
