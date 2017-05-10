var scrubPoker = new Vue({
    el: '#ScrubPoker',
    data: {
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
        }, {
            name: 'Misc',
            deck: ['?', '&#8734;', '&#9749;']
        }],
        currentDeck: [],
    },
    methods: {
        cardClick: function (event) { },
        deckClick: function (event, deck) {
            this.setDeck(deck.deck);
        },
        setDeck: function (deck) {
            var deck2 = this.decks[this.decks.length - 1].deck.slice();
            this.currentDeck = deck.slice().concat(deck2);
        },
    },
    created: function () {
        this.setDeck(this.decks[0].deck);
    }
});
