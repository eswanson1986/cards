class Dealer {

    static deck = new Queue(52) 

    static shuffle() {
        
        let keys = Card.keys()
        Dealer.deck.clear();


        for (let i = 0; i < keys.length; i++) {
            let order = Math.random()
            Dealer.deck.orderedInsert(Card.cards[keys[i]], order)
        }
    }

    static dealCards() {

        let hand = Player.hand.cards
        while (hand.hasSpace()) {

            let card = Dealer.deck.dequeue();
            hand.orderedInsert(card, (1 / card.value))

        }

    }
}