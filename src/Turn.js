class Turn {
  constructor(guess,card) {
    this.guess = guess;
    this.card = card;
    this.correctAnswer = false;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    return this.guess === this.card.correctAnswer ? this.correctAnswer = true : this.correctAnswer;
  }

  giveFeedback() {
    return this.guess === this.card.correctAnswer ? 'Correct!' : 'Incorrect answer!'
  }
  

}

module.exports = Turn;