/**
 * Module for player/s hand
 * @module src/Hand
 * @author Simon Palm
 * @version 1.0.0
 */

 /**
  * @class
  * @param {string} name is the name of the dealer
  */
 export default class Hand {
    constructor(name = '#Dealer') {
        this.name = name
        this.hand = []
        this.total = 0
    }
    /**
      * Checks value of each card
      */
    valueCards() {
        let tot = 0
        // Keep count on every 'Ace'
        let ace = 0

        for (let i = 0; i < this.hand.length; i++) {
            const card = this.hand[i]
            if (card.length === 2) {
                // Checks for 2 index
                const val = card.slice(0, 1)
                if (val === 'J') {
                    tot += 11
                } else if (val === 'Q') {
                    tot += 12
                } else if (val === 'K') {
                    tot += 13
                } else if (val === 'A') {
                    tot += 14
                    ace++
                } else {
                    tot += Number.parseInt(val)
                }
            } else {
                // Checks for an string like '10♣' with 3 index
                const val = card.slice(0, 2)
                tot += Number.parseInt(val)
            }
            while (tot > 21 && ace > 0) {
                tot -= 13
                ace--
            }
        }
        this.total = tot
    }
    /**
      * Making a toString for name,hand and total
      * @returns {string} A string of name,cards and value of cards sum
      */
    toString() {
        return `${this.name} ${this.hand} (${this.total})`
    }
}
 