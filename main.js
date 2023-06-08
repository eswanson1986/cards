const cardClassNames = 'col-12'
const evaluationClassNames = 'col-12'
const infoClassNames = 'col-12'
const betClassNames = 'row d-flex justify-content-center'

const creditScreen = new Display('infoScreen', infoClassNames)
const betScreen = new Display('infoScreen', infoClassNames)
const evaluationScreen = new Display('evaluationScreen', evaluationClassNames)
const cardScreen = new Display('cardScreen',cardClassNames)
const buttonScreen = new Display('betScreen', betClassNames)



buttonScreen.betButton(1)
buttonScreen.betButton(5)
buttonScreen.betButton(10)
buttonScreen.dealButton()
buttonScreen.infoButton()
buttonScreen.payoutButton()

creditScreen.credit()
betScreen.bet()
cardScreen.message('change bet (if desired) and push deal to begin')





let mainFunction = () => {

    if (Player.isPlaying === false) {
        Player.isPlaying = true
        Player.cash -= Player.bet
        Player.clearHand()
        Dealer.shuffle()
        Dealer.dealCards()
        evaluationScreen.clear()

        creditScreen.credit()
        betScreen.bet()
        
        cardScreen.cards()
        return

    }

    Player.isPlaying = false
    Dealer.dealCards()

    evaluationScreen.evaluation()
    creditScreen.credit()
    cardScreen.cards()



}








