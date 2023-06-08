class Hand {
    constructor() {

        this.cards = new Queue(5);
        this.evaluation = null;

        this.straightFlush = false;
        this.flush = false;
        this.straight = false;

        this.highCard = null;
        this.lowCard = null;
        this.pairValue = null;

    }

    showHandValues() {
        // makes array of hand values
        let current = this.cards.head;
        let arr = []
        while(current != null) {
            arr.push(current.data.value)
            current = current.next
        }
        return arr
    }

    // hiLow, valueMatch, isFlush, and isStraight are helper methods for the evaluate algorithm
    hiLow () {

        //cards are delt in order in queue so to set high low just go to first and last entry in queue
        let current = this.cards.head;
        this.lowCard =  current.data;

        while (current.next != null) {
            current = current.next;
        }

        this.highCard = current.data;
    }

    valueMatch() {
        
        let count = {}

        let currentCard = this.cards.head;
        while (currentCard != null) {
            
            if (count.hasOwnProperty(currentCard.data.value)) {
                count[currentCard.data.value] += 1;

            } else {
                count[currentCard.data.value] = 1;
            }
            currentCard = currentCard.next  
        }

      

        let groupedCards = Object.keys(count);
        let groupedCardsCount = []

        

        for (let i =0; i < groupedCards.length; i++) {
            let key = groupedCards[i]
            groupedCardsCount.push(count[key])
        }

        
        
        switch (groupedCards.length) {
            case 5:
                this.evaluation = 'High Card'
                return
                
            
            case 4:
                
                this.evaluation = 'Pair'
                let pairValueIndex = groupedCardsCount.indexOf(2)
                this.pairValue = Number(groupedCards[pairValueIndex])
                return
            
            case 3:
                if (groupedCardsCount.includes(3)) {
                    this.evaluation = 'Three of a Kind'
                    return
                }
                this.evaluation = 'Two Pair'
                return
                
            
            case 2:
                if (groupedCardsCount.includes(3)) {
                        this.evaluation = 'Full House'
                        return
                    }
                
                this.evaluation = 'Four of a Kind'
                return   
               
        }
    }

    isFlush() {

        
        if (this.evaluation != 'High Card') {
            return
        }

        let node = this.cards.head
        
        while (node.next != null) {
            if (node.data.suit != node.next.data.suit) {
                return
            }
            node = node.next
        }

        this.evaluation = 'Flush'
        this.flush = true
        return
    }

    isStraight() {
        
        
        if (this.evaluation == 'High Card' || this.evaluation == 'Flush') {
            
            let count = {}

            let currentCard = this.cards.head;
            while (currentCard != null) {
            
                if (count.hasOwnProperty(currentCard.data.value)) {
                    count[currentCard.data.value] += 1;
                
                } else {
                    count[currentCard.data.value] = 1;
                }
                currentCard = currentCard.next  
            }   


            let groupedCards = Object.keys(count);
            let groupedCardsCount = []
            for (let i =0; i < groupedCards.length; i++) {
                let key = groupedCards[i]
                groupedCardsCount.push(count[key])
            }

            if (groupedCards.length === 5 ) {
                if (groupedCards[0] == '2' && groupedCards[3] == '5' && groupedCards[4] == '14' ) {
                    let result = (this.flush === true ? 'Straight Flush' : 'Straight');
                    this.evaluation = result;
                    return
                }

                if (this.highCard.value - this.lowCard.value === 4) {
                    if (this.highCard.value == 14) {
                    
                        let result = (this.flush === true ? 'Royal Flush' : 'Straight' )
                        this.evaluation = result;
                        return
                    }

                    let result = (this.flush === true ? 'Straight Flush' : 'Straight');
                    this.evaluation = result;
                    return
                }
            }   
        }
    }

    evaluate() {
        this.hiLow();
        this.valueMatch();
        this.isFlush();
        this.isStraight();
    }

    payout() {

        
        let payoutAmount;
        switch(this.evaluation) {
            case 'High Card':
                payoutAmount = 0
                Player.addStats('High Card', payoutAmount)

                return payoutAmount

            case 'Pair':

                let result = (this.pairValue > 10 ? 1 : 0)
                payoutAmount = result * Player.bet
                Player.addStats('Pair', payoutAmount)

                return payoutAmount
            
            case 'Two Pair':

                payoutAmount = 3 * Player.bet
                Player.addStats('Two Pair', payoutAmount)

                return payoutAmount
            
            case 'Three of a Kind':

                payoutAmount = 7 * Player.bet
                Player.addStats('Three of a Kind', payoutAmount)

                return payoutAmount
            
            case 'Straight':

                payoutAmount = 20 * Player.bet
                Player.addStats('Straight', payoutAmount)

                return payoutAmount

            case 'Flush':

                payoutAmount = 25 * Player.bet
                Player.addStats('Flush', payoutAmount)

                return payoutAmount

            case 'Full House':

                payoutAmount = 40 * Player.bet
                Player.addStats('Full House', payoutAmount)

                return payoutAmount

            case 'Four of a Kind':

                payoutAmount = 50 * Player.bet
                Player.addStats('Four of a Kind', payoutAmount)

                return payoutAmount

            case 'Straight Flush':

                payoutAmount = 2500 * Player.bet
                Player.addStats('Straight Flush', payoutAmount)
                return payoutAmount

            case 'Royal Flush':

                payoutAmount = 25000 * Player.bet
                Player.addStats('Royal Flush', payoutAmount)
                return payoutAmount

        }
    }

}
