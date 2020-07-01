const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {

  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(() => {

    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');

    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

    deck = new Deck([card1, card2, card3]);
    
    round = new Round(deck);

  });

  it.only('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it.only('should be an instance of round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  it.only('should have a deck', () => {
    expect(round.deck).to.deep.equal(deck);
  });

  it.only('should have a turnCount', () => {
    expect(round.turnCount).to.equal(0);
  });

  it.only('should have incorrectGuesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it.only('should return the current card being played', () => {
    expect(round.returnCurrentCard()).to.deep.equal(deck.deck[0])
  })

  it.only('should be able to keep track of turns ', () => {
    round.takeTurn();
    expect(round.turnCount).to.equal(1);
  })

  it.only('should have an new current card', () => {
    round.takeTurn();
    expect(round.returnCurrentCard()).to.equal(deck.deck[1]);
  })

  it.only('should be able to keep track of incorrect guesses', () => {

    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');

    round.takeTurn('array')
    round.takeTurn('function')
    expect(round.incorrectGuesses).to.deep.equal([1, 2])
  });

  it.only('should give feedback if the guess is incorrect', () => {

    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    expect(round.takeTurn('function')).to.equal('Incorrect answer!')
  });

  it.only('should give feedback if the guess is correct', () => {

    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    expect(round.takeTurn('object')).to.equal('Correct!')
  });

  it.only('should calculate the percentage of correct answers', () => {
    round.takeTurn('object');
    round.takeTurn('array');
    expect(round.calculatePercentCorrect()).to.equal(100);
  });

  it.only('should calculate the percentage of correct answers', () => {
    round.takeTurn('object');
    round.takeTurn('function');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it.only('should be able to end a round and give feedback', () => {
    expect(round.endRound()).to.equal(`**Round over!** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`)
  });

});