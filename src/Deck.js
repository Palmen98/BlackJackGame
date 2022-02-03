/**
 * Class for cards
 * @module src/deck
 * @author Simon Palm
 * @version 1.0.0
 */

 /**
  * @class
  * @returns  All 52 numbers in the deck
  */ 
 export default class Deck {
   constructor () {
     this.deck = []
     this.generateDeck()
     this.throwDeckOfCards = []
   }
 
   /**
  * @param {Array} number The card number
  * @param {Array} type  The card type ('♣','♠','♥','♦')
  * @returns A card deck with 52 cards
  */
 
   generateDeck () {
     const number = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
 
     const type = ['♣', '♠', '♥', '♦']
 
     for (let t = 0; t < type.length; t++) {
       for (let n = 0; n < number.length; n++) {
         const card = number[n] + type[t]
         this.deck.push(card)
       }
     }
     return this.deck
   }
 
   /**
    * Shuffles the deck with Fisher Yates algorithm
    * @returns the deck shuffled
    */
   shuffle () {
     const deck = this.deck
 
     let counter = deck.length
     while (counter) {
       const i = Math.floor(Math.random() * counter--)
 
       const tempCard = deck[counter]
       deck[counter] = deck[i]
       deck[i] = tempCard
     }
     return deck
   }
 
   /**
    * Deals out cards and if the deck has one card left.
    * Take cards from throwDeckOfCards and make a new shuffled deck.
    * @returns {string} a card string
    */
   deal () {
     if (this.deck.length > 1) {
       const card = this.deck.shift()
 
       return card
     } else {
       const lastCard = this.deck[0]
       this.deck = this.throwDeckOfCards
       this.deck.push(lastCard)
       this.throwDeckOfCards = []
       this.shuffle()
       return this.deck.shift()
     }
   }
 
   /**
    * After every round send player and dealer cards to throwDeckOfCards
    * @param {Array} hand Contains cards
    */
   throwDeck (hand) {
     while (hand.length > 0) {
       this.throwDeckOfCards.push(hand.pop())
     }
   }
 }
