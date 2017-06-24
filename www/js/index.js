var green = '#12A01B';
var red = '#CC1C17';
var scrubPoker = new Vue({
  el: '#ScrubPoker',
  created: function () {
    this.setDeck(this.decks[0]);
    this.state = this.gameState.choose;
  },
  data: {
    colors: [],
    currentCard: 0,
    currentColor: green,
    currentDeck: {},
    decks: [{
      name: 'Standard',
      deck: [0, '&#189;', 1, 2, 3, 5, 8, 13, 20, 40, 100]
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
      name: 'Play Cards',
      deck: ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
    }],
    gameState: {
      choose: 0,
      hide: 1,
      card: 2,
    },
    miscDeck: ['?', '&#8734;', '&#9749;'],
    state: 0,
  },
  methods: {
    cardClick: function (event, card) {
      this.state = this.gameState.hide;
      this.currentCard = card;
      this.currentColor = event.currentTarget.style.backgroundColor;
      event.stopPropagation();
    },
    chosenCardClick: function (event) {
      this.state = this.gameState.choose;
      this.currentCard = 0;
      event.stopPropagation();
    },
    deckClick: function (event, deck) {
      this.setDeck(deck);
      event.stopPropagation();
    },
    setDeck: function (deck) {
      this.currentDeck = deck;
      this.colors = Gradient.generate(green, red, deck.deck.length);
    },
    tableClick: function () {
      if (this.state === this.gameState.hide) {
        this.state = this.gameState.card;
      }
    },
  },
});
