class Turn {
  constructor(guess,card) {
    this.guess = guess;
    this.card = card;
    this.correctAnswer = false;
  }

  returnGuess() {
    return this.guess;
  }

}

module.exports = Turn;