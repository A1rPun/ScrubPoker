var $ = function (q) { return document.querySelector(q); }; // jQuery one-liner (joke)
var app = {
    decks: {
        standard: [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100],
        fibonacci: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
        natural: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        tshirt: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
        misc: ['?', '&#8734;', '&#9749;']
    },
    menu: ['Standard', 'Fibonacci', 'Natural', 'T-Shirt'],    
    cardClick: function (event) {
        var el = event.currentTarget;
        el.style.position = 'absolute';
        el.style.left = 0;
        el.style.top = 0;
        el.style.right = 0;
        el.style.bottom = 0;
    },
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        this.currentDeck = this.decks.standard.slice().concat(this.decks.misc.slice());
    },
    onDeviceReady: function () { },
};

app.initialize();

var a1 = new Vue({
    el: '#navigation-container',
    data: {
        menu: app.menu
    }
});
var a2 = new Vue({
    el: '#cards-container',
    data: {
        cardClick: app.cardClick,
        currentDeck: app.currentDeck
    }
});
