/**
 * Module for the game
 * @module src/Game
 * @author Simon Palm
 * @version 1.0.0
 */

 /**
  * Creates a game and players
   * @class Game
   */
 import Hand from './Hand.js'
 import Deck from './Deck.js'
 
 export default class Game {
   constructor () {
     this.deck = new Deck()
     this.players = []
   }
 
   /**
  * Method for creating a player/players
  * @param {Number} nr The amount of players that will participate and give players a name
  */
   generatePlayer (nr) {
     for (let i = 1; i <= nr; i++) {
       this.players.push(new Hand('player #' + i))
     }
   }
 
   /**
    * Method for creating a behavior for the players and the dealer
    * @param {*String[]} player contains player name and an array with one card
    */
   hitOrStay (player) {
     while (player.total < 15 && player.hand.length < 5) {
       player.hand.push(this.deck.deal())
       player.valueCards()
     }
 
     if (player.total === 21 || player.hand.length === 5) {
       console.log(`${player.toString()} \n Dealer: - \n PLAYER WINS!`)
       this.deck.throwDeck(player.hand)
     } else if (player.total > 21) {
       console.log(`${player.toString()} \n Dealer: - \n PLAYER BUSTED!`)
       this.deck.throwDeck(player.hand)
       // Creating a dealer if player has not won yet
     } else {
       this.dealer = new Hand()
       while (this.dealer.total < 18 && this.dealer.hand.length < 5) {
         this.dealer.hand.push(this.deck.deal())
         this.dealer.valueCards()
       }
       if (this.dealer.total === 21 || this.dealer.hand.length === 5) {
         console.log(`${player.toString()} \n ${this.dealer.toString()} \n DEALER WINS!`)
       } else if (this.dealer.total > 21) {
         console.log(`${player.toString()} \n ${this.dealer.toString()} \n PLAYER WINS!`)
       } else if (this.dealer.total < player.total) {
         console.log(`${player.toString()} \n ${this.dealer.toString()} \n PLAYER WINS!  `)
       } else {
         console.log(`${player.toString()} \n ${this.dealer.toString()} \n DEALER WINS! `)
       }
       this.deck.throwDeck(player.hand)
       this.deck.throwDeck(this.dealer.hand)
     }
     console.log('\n')
   }
 
   /**
   * Method for starting the game
   * by giving players/dealer cards
   * @param {string[]} player contains player name, an array with one card and the total value of the card sum
   */
   gameStart () {
     this.players.forEach(function (player) {
       this.hitOrStay(player)
     }, this)
 
     this.players.forEach(function (player) {
       player.hand.push(this.deck.deal())
       player.valueCards()
     }, this)
   }
 }
 