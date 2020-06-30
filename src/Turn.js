class Turn {
  constructor(guess,card) {
    this.guess = guess;
    this.card = card;
    this.correctAnswer = false;
  }
}

module.exports = Turn;