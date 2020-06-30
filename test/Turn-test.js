const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let card;
  let turn;
  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  
    turn = new Turn('object', card);

  });

  it.only('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it.only('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it.only('should have a guess', () => {
    expect(turn.guess).to.equal('object')
  });

  it.only('should have a card', () => {
    expect(turn.card).to.equal(card)
  });

  it.only('should not have a correct answer by default', () => {
    expect(turn.correctAnswer).to.equal(false)
  })

  it.only('should return a guess', () => {
    expect(turn.returnGuess()).to.equal('object')
  })












})