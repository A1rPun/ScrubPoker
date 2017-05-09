var $ = function (q) { return document.querySelector(q); };
var decks = {
    standard: [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100],
    fibonacci: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
    natural: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    tshirt: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
    misc: ['Unknown?', 'Infinite', 'Coffee']
};
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        var cc = $('#cards-container');
        var ct = $('#cards-template').innerHTML;
        cc.innerHTML = '';
        this.createCards(cc, ct, decks.standard);
        this.createCards(cc, ct, decks.misc);
    },
    createCards: function (cc, template, cards) {        
        for (var i = 0, l = cards.length; i < l; i++) {
            var zz = document.createElement('div');
            zz.innerHTML = template;
            zz.querySelector('.mdl-card').innerHTML = cards[i];
            zz.addEventListener('click', this.cardClick);
            cc.appendChild(zz);
        }
    },
    cardClick: function () {
        this.style.position = 'absolute';
        this.style.left = 0;
        this.style.top = 0;
        this.style.right = 0;
        this.style.bottom = 0;
    },
    onDeviceReady: function () {

    },
};

app.initialize();
