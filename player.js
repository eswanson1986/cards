class Player {
    
    static hand = new Hand()
    static cash = 100
    static payout = 0
    static bet =1
    static discardList = []
    static isPlaying = false
    static stats = {
            'Hands' : 0,
            'Total Wins' : 0,
            'Win %' : 0,
            'Total Winnings' : 0,
            'Total Spending' : 0,
            'Total Return'   : 0,
            
            'High Card' : {winnings:0, count: 0},
            'Pair'  : {winnings:0, count: 0},
            'Two Pair' : {winnings:0, count: 0},
            'Three of a Kind' : {winnings:0, count: 0},
            'Full House' : {winnings:0, count: 0},
            'Four of a Kind' : {winnings:0, count: 0},
            'Flush' : {winnings:0, count: 0},
            'Straight' : {winnings:0, count: 0},
            'Straight Flush' : {winnings:0, count: 0},
            'Royal Flush' : {winnings:0, count: 0},

    }

    static clearHand() {
        Player.hand.cards.clear()
    }

    static cards() {
        return Player.hand.cards
    }

    static handEvaluation() {
        Player.hand.evaluate()
        return Player.hand.evaluation
    }

    static handArray() {
        //makes array of cards in hand
        let current = Player.cards();
        current = current.head
        let arr = []
        while(current != null) {
            arr.push(current.data.name)
            current = current.next
        }
        return arr
    }

    static discard(card) {
        // helper method to discard a card from the hand queue


    }

    static addStats(type, amount) {

        Player.stats['Hands'] += 1
        Player.stats[type].winnings += amount;
        Player.stats[type].count += 1;
        Player.stats['Total Winnings'] += amount;
        if (amount > 0) {
            Player.stats['Total Wins'] += 1
        }
        Player.stats["Total Spending"] += Player.bet
        Player.stats["Total Return"] = (Player.stats["Total Winnings"] / Player.stats["Total Spending"]).toFixed(2)
        Player.stats['Win %'] = (Player.stats["Total Wins"] / Player.stats['Hands'] * 100).toFixed(2)

    }


}






/*

const dealer = new Dealer('Default')
let player = new Player('Eric',100)



for (let i = 0; i < 1000; i++) {
    dealer.shuffle()
    dealer.dealCards(player)
    player.hand.evaluate()
    player.hand.payout()
    
    // console.log(player.showHand(), player.hand.evaluation)
    // console.log(player.showHand(), player.hand.evaluation)
    // console.log(player.showHand(), player.hand.evaluation)
    
    player.clearHand()
    if (i % 1000000 === 0) {
        console.log(i)
    }

    


}

let dataKeys = Object.keys(player.stats)
for (let i =0; i < dataKeys.length; i++) {
    console.log(dataKeys[i], player.stats[dataKeys[i]])
}



/*

let highCard = 0
let pair = 1
let twopair = 5
let threekind = 10
let straight = 25
let flush = 40 
let fullhouse = 50
let fourkind = 300
let straightflush = 2500
let royal = 25000


let expectedPayout = (highCard, pair, twopair, threekind,straight, flush, fullhouse,fourkind, straightflush, royal)  => {
    return ((highCard * .501177) + (pair * .422569) * (4/13) + (twopair * .047539) + (threekind * .021128) + (straight * .003925) + (flush * .001965) + (fullhouse * .001441) + (fourkind * .0002401) + (straightflush * .0000139) + (royal * .00000154))
}


console.log(expectedPayout(highCard, pair, twopair, threekind,straight, flush, fullhouse,fourkind, straightflush, royal))
*/