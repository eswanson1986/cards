class Display {

    constructor(HTML_ELEMENT_ID, className='') {


        this.root = document.getElementById(HTML_ELEMENT_ID)
        this.screen = document.createElement('div')
        this.screen.className = className
        this.id = `${Display.instanceCounter}`
        this.screen.id = this.id
        Display.instanceCounter++

        this.root.appendChild(this.screen)




    }

    static instanceCounter = 0

    static delay(time=0) {
        // a helper function to use in conjunction with 'await' syntax to produce cleaner asynchronous functions 

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            },time);
        });
    }


    clearAll() {
        // helper method to clear all displays on screen
        buttonScreen.clear()
        creditScreen.clear()
        betScreen.clear()
        evaluationScreen.clear()
        cardScreen.clear()
    }


    clear() {
        // helper method to clear the screen
        this.screen.innerHTML = ''
    }

    bet() {
        // renders the current bet amount to the screen
        this.clear()
        let bet = document.createElement('p')
        bet.innerText = `Bet: ${Player.bet}`
        this.screen.appendChild(bet)
    }



    cards() {
        // renders the 5 cards in the hand to the screen
        this.clear()
        let hand = Player.hand
        let currentCard = hand.cards.head
        while (currentCard != null) {

            let card = currentCard.data.faceImage
            card.style.opacity = '1'
    
            this.screen.appendChild(card)




            currentCard = currentCard.next
        }
        let message = document.createElement('p')
        

        if (Player.isPlaying) {

            message.innerText = 'click card to discard. press deal when ready'
            
        } else {
            message.innerText = 'change bet (if desired) and push deal to begin'
        }

        
        this.screen.appendChild(message)

        

    }

    evaluation() {
        // renders the evaluation to the screen
        this.clear()
        let evaluation = document.createElement('p')
        evaluation.innerText = Player.handEvaluation()
        this.screen.appendChild(evaluation)
        
        
        let payout = document.createElement('p')
        let payoutAmt = Player.hand.payout()
        
        Player.cash += payoutAmt
        
        payout.innerText = `payout: ${payoutAmt}`
        this.screen.appendChild(payout)
    }

    credit() {
        // renders player credit to the screen
        this.clear()
        let credit = document.createElement('p')
        credit.innerText = `Credit: ${Player.cash}`
        this.screen.appendChild(credit)
    }

    betButton(amount) {
        // renders a bet button for a specific amount


        let button = document.createElement('button')
        button.innerText = `Bet ${amount}`
        button.className = 'col-3 btn btn-success m-1'
        button.addEventListener('click', async () => {

            if (Player.isPlaying === false) {

                Player.bet = amount
                betScreen.bet()
                return
            }

            let errorMessage = document.createElement('p')
            errorMessage.innerText = `Bets cannot be changed while playing`
            betScreen.clear()
            betScreen.screen.appendChild(errorMessage)
            await Display.delay(1000)
            betScreen.bet()




        })

        this.screen.appendChild(button)
    }

    dealButton() {
        // renders the deal button that runs the main function
        
        let button = document.createElement('button')
        button.innerText = `Deal`
        button.className = 'col-12 btn btn-dark m-1'
        button.addEventListener('click', () => {

            mainFunction()


        })

        this.screen.appendChild(button)
    }

    message(text) {
        // async helper method to clear a screen and write a message to it in a paragraph
        this.clear()
        let message = document.createElement('p')
        message.innerText = text
        this.screen.appendChild(message)
    }

    info() {
        // builds screen with info on project. Function is intended to be run on the cardScreen display
        this.clearAll()
        
        let info = `
        <h3>Info</h3>
        <p>Welcome to my latest project!</p>
        <p>tonalityofe.com's Video Poker Alpha 1.0 accurately models a two step poker game consisting
        of a 5 card deal to the player. Who can optionally discard up to 5 cards and receive 5 more from a
        random deck. To accomplish this task the game consists of the following components (among others)</p>
        <ul class='text-left'>
            <li>A Javascript class which constructs a prototype of a playing card</li>
            <li>A set of evaluation algorithms that can examine a list containing 5 card instances and return the poker value of the hand (such as 'two pair')</li>
            <li>A shuffling procedure which arranges the 52 different card prototypes in random order. Randomness of the shuffling algorithm has been extensively tested and confirmed by evaluating over 500,000,000 simulated poker hands. (currently building out a 'technical info' section to go into more depth on my procedure) </li>
        </ul>
        <h3>Disclaimer</h3>
        <p>tonalityofe.com's Video Poker Alpha 1.0 is strictly for entertainment purposes and started as challenge project to efficiently build a mathematical model of a poker game using a linear data structure I built in Javascript.</p>
        <p>Although I am certain that this program accurately models a poker game I am also certain that it does not model a poker game that makes money. Building a profitable machine was not the original intent of this program. Designing a profitable machine presents it own interesting challenges which I may try to overcome in V 2.0.</p>
        <p>to err on the side of making my simulation enjoyable I have chosen a payout structure that 'over pays' the player. The current iteration of the program will allow the player to keep playing regardless of how many
        credits they have and will also reset the credits to 100 every time the browser refreshes</p>
        <h3>Coming soon...</h3>
        <p>Additions I am either currently working on or are on the development roadmap</p>
        <ul class='text-left'>
            <li>coding custom animations to accompany different hand outcomes</li>
            <li>developing a machine learning model to determine an optimal fold strategy (the first step in building a profitable machine)</li>
        </ul>



        `

        let backButton = document.createElement('button')
        backButton.innerText = 'Back'
        backButton.className = 'col-12 col-md-3 btn btn-dark m-1'
        backButton.addEventListener('click', () =>{

            buttonScreen.betButton(1)
            buttonScreen.betButton(5)
            buttonScreen.betButton(10)
            buttonScreen.dealButton()
            buttonScreen.infoButton()
            buttonScreen.payoutButton()

            creditScreen.credit()
            betScreen.bet()
            cardScreen.cards()

        })


        this.screen.innerHTML = info
        this.screen.appendChild(backButton)


    }

    infoButton() {
        // constructs info button to append to screen runs on CardScreen display object
        let infoButton = document.createElement('button')
        infoButton.innerText = 'General Info'
        infoButton.className = 'col-12 btn btn-dark m-1'
        infoButton.addEventListener('click', () => {
            cardScreen.info()
        })
        this.screen.appendChild(infoButton)

    }

    payout() {
        // constructs screen with payout info
        this.clearAll()
        let payout = `
        <h3>Payout info...</h3>
        <p>Disclaimer: This machine is for Entertainment purposes only! This chart describes the payout structure. Payouts are in fake credits</p>
        <ul>
            <li>Jacks or Better - 1 x Player Bet</li>
            <li>Two Pair - 3 x Player Bet</li>
            <li>Three of a Kind - 7 x Player Bet</li>
            <li>Straight - 20 x Player Bet</li>
            <li>Full House - 40 x Player Bet</li>
            <li>Four of a Kind - 50 x Player Bet</li>
            <li>Straight Flush - 2500 x Player Bet</li>
            <li>Royal Flush - 25000 x Player Bet</li>
            
        </ul>

        `

        let backButton = document.createElement('button')
        backButton.innerText = 'Back'
        backButton.className = 'col-12 col-md-3 btn btn-dark m-1'
        backButton.addEventListener('click', () =>{

            buttonScreen.betButton(1)
            buttonScreen.betButton(5)
            buttonScreen.betButton(10)
            buttonScreen.dealButton()
            buttonScreen.infoButton()
            buttonScreen.payoutButton()

            creditScreen.credit()
            betScreen.bet()
            cardScreen.cards()

        })

        this.screen.innerHTML= payout
        this.screen.appendChild(backButton)

    }

    payoutButton() {
        // constructs the payout button to append to button screen
        let payoutButton = document.createElement('button')
        payoutButton.innerText = 'Payout Info'
        payoutButton.className = 'col-12 btn btn-dark m-1'
        payoutButton.addEventListener('click', () => {
            cardScreen.payout()
        })
        this.screen.appendChild(payoutButton)

    }
}



