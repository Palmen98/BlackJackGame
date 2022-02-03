/**
 * The starting point of the application
 * @author Simon Palm
 * @version 1.0.0
 */
 import Game from './src/Game.js'
 
 // Choose how many players that will enter the game
 const playerAmount = 5
 
 const game = new Game()
 game.generatePlayer(playerAmount)
 game.gameStart()
 