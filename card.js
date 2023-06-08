class Card {

    constructor(name, suit, faceLink,value) {

        this.name = name;
        this.suit = suit;
        this.faceLink = faceLink;
        this.value = value;
        this.faceImage = null

        this.makeFaceImage()
    }

    static keys() {
        return Object.keys(Card.cards)
    }

    makeFaceImage() {

        let image = document.createElement('img');
        image.src = this.faceLink;
        image.alt = this.name;
        image.style.maxHeight = '250px'
        image.style.height = '20vw'
        image.style.margin = '2px'

        image.addEventListener('click', ()=>{

            console.log(Player.isPlaying, Dealer.deck.size)
            console.log(image.style.display)
            if (Player.isPlaying) {
                Player.hand.cards.remove(this.name, 'name')
                image.style.opacity = '0'
                
                return
            }

            


        })



        this.faceImage = image

    }

    static cards = {
        'Two of Clubs'   : new Card('Two of Clubs', 'Clubs', "./img/2_of_clubs.png",2),
        'Three of Clubs' : new Card('Three of Clubs', 'Clubs', "./img/3_of_clubs.png",3),
        'Four of Clubs'  : new Card('Four of Clubs', 'Clubs', "./img/4_of_clubs.png",4),
        'Five of Clubs'  : new Card('Five of Clubs','Clubs', "./img/5_of_clubs.png",5),
        'Six of Clubs'   : new Card('Six of Clubs','Clubs', "./img/6_of_clubs.png",6),
        'Seven of Clubs' : new Card('Seven of Clubs', 'Clubs', "./img/7_of_clubs.png",7),
        'Eight of Clubs' : new Card('Eight of Clubs', 'Clubs', "./img/8_of_clubs.png",8),
        'Nine of Clubs'  : new Card('Nine of Clubs', 'Clubs', "./img/9_of_clubs.png",9),
        'Ten of Clubs'   : new Card('Ten of Clubs', 'Clubs', "./img/10_of_clubs.png",10),
        'Jack of Clubs'  : new Card('Jack of Clubs', 'Clubs', "./img/jack_of_clubs.png",11),
        'Queen of Clubs' : new Card('Queen of Clubs', 'Clubs', "./img/queen_of_clubs.png",12),
        'King of Clubs'  : new Card('King of Clubs', 'Clubs', "./img/king_of_clubs.png",13),
        'Ace of Clubs'   : new Card('Ace of Clubs', 'Clubs', "./img/ace_of_clubs.png",14),
    
        'Two of Spades'   : new Card('Two of Spades', 'Spades', "./img/2_of_spades.png",2),
        'Three of Spades' : new Card('Three of Spades', 'Spades', "./img/3_of_spades.png",3),
        'Four of Spades'  : new Card('Four of Spades', 'Spades', "./img/4_of_spades.png",4),
        'Five of Spades'  : new Card('Five of Spades', 'Spades', "./img/5_of_spades.png",5),
        'Six of Spades'   : new Card('Six of Spades', 'Spades', "./img/6_of_spades.png",6),
        'Seven of Spades' : new Card('Seven of Spades', 'Spades', "./img/7_of_spades.png",7),
        'Eight of Spades' : new Card('Eight of Spades', 'Spades', "./img/8_of_spades.png",8),
        'Nine of Spades'  : new Card('Nine of Spades', 'Spades', "./img/9_of_spades.png",9),
        'Ten of Spades'   : new Card('Ten of Spades', 'Spades', "./img/10_of_spades.png",10),
        'Jack of Spades'  : new Card('Jack of Spades', 'Spades', "./img/jack_of_spades.png",11),
        'Queen of Spades' : new Card('Queen of Spades', 'Spades', "./img/queen_of_spades.png",12),
        'King of Spades'  : new Card('King of Spades', 'Spades', "./img/king_of_spades.png",13),
        'Ace of Spades'   : new Card('Ace of Spades', 'Spades', "./img/ace_of_spades.png",14),
    
        'Two of Hearts'   : new Card('Two of Hearts', 'Hearts', "./img/2_of_hearts.png",2),
        'Three of Hearts' : new Card('Three of Hearts', 'Hearts',"./img/3_of_hearts.png",3),
        'Four of Hearts'  : new Card('Four of Hearts', 'Hearts', "./img/4_of_hearts.png",4),
        'Five of Hearts'  : new Card('Five of Hearts', 'Hearts', "./img/5_of_hearts.png",5),
        'Six of Hearts'   : new Card('Six of Hearts', 'Hearts', "./img/6_of_hearts.png",6),
        'Seven of Hearts' : new Card('Seven of Hearts', 'Hearts', "./img/7_of_hearts.png",7),
        'Eight of Hearts' : new Card('Eight of Hearts', 'Hearts', "./img/8_of_hearts.png",8),
        'Nine of Hearts'  : new Card('Nine of Hearts', 'Hearts', "./img/9_of_hearts.png",9),
        'Ten of Hearts'   : new Card('Ten of Hearts', 'Hearts', "./img/10_of_hearts.png",10),
        'Jack of Hearts'  : new Card('Jack of Hearts', 'Hearts', "./img/jack_of_hearts.png",11),
        'Queen of Hearts' : new Card('Queen of Hearts', 'Hearts', "./img/queen_of_hearts.png",12),
        'King of Hearts'  : new Card('King of Hearts', 'Hearts', "./img/king_of_hearts.png",13),
        'Ace of Hearts'   : new Card('Ace of Hearts', 'Hearts', "./img/ace_of_hearts.png",14),
    
        'Two of Diamonds'   : new Card('Two of Diamonds', 'Diamonds', "./img/2_of_diamonds.png",2),
        'Three of Diamonds' : new Card('Three of Diamonds', 'Diamonds', "./img/3_of_diamonds.png",3),
        'Four of Diamonds'  : new Card('Four of Diamonds', 'Diamonds', "./img/4_of_diamonds.png",4),
        'Five of Diamonds'  : new Card('Five of Diamonds', 'Diamonds', "./img/5_of_diamonds.png",5),
        'Six of Diamonds'   : new Card('Six of Diamonds', 'Diamonds', "./img/6_of_diamonds.png",6),
        'Seven of Diamonds' : new Card('Seven of Diamonds', 'Diamonds', "./img/7_of_diamonds.png",7),
        'Eight of Diamonds' : new Card('Eight of Diamonds', 'Diamonds', "./img/8_of_diamonds.png",8),
        'Nine of Diamonds'  : new Card('Nine of Diamonds', 'Diamonds', "./img/9_of_diamonds.png",9),
        'Ten of Diamonds'   : new Card('Ten of Diamonds', 'Diamonds', "./img/10_of_diamonds.png",10),
        'Jack of Diamonds'  : new Card('Jack of Diamonds', 'Diamonds', "./img/jack_of_diamonds.png",11),
        'Queen of Diamonds' : new Card('Queen of Diamonds', 'Diamonds', "./img/queen_of_diamonds.png",12),
        'King of Diamonds'  : new Card('King of Diamonds', 'Diamonds', "./img/king_of_diamonds.png",13),
        'Ace of Diamonds'   : new Card('Ace of Diamonds', 'Diamonds', "./img/ace_of_diamonds.png",14),
    
    }



}