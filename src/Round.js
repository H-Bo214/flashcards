const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turnCount = 0;
    this.incorrectGuesses = [];
  };

  returnCurrentCard() {
    return this.deck.deck[this.turnCount]
  };

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard())
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(turn.card.id)
    }
    this.turnCount++;
    return turn.giveFeedback()
  };

  calculatePercentCorrect() {
    if (this.incorrectGuesses.length === 0) {
      return 100;
    } else {
      let percentage = Math.floor(((this.turnCount - this.incorrectGuesses.length) / this.turnCount ) * 100)
      return percentage;
    }
  };

  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  };

};

module.exports = Round;