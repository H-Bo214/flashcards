const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', () => {
  
  let card;

  beforeEach(() => {
  
     card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

  });

  it.only('should be a function', () => {
    expect(Card).to.be.a('function');
  });

  it.only('should be an instance of Card', () => {
    expect(card).to.be.an.instanceof(Card);
  }); 

  it.only('should have an id', () =>{
    expect(card.id).to.equal(1)
  });

  it.only('should store a question', () => {
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it.only('should store a list of possible answers', () => {
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it.only('should store the correct answer', () => {
    expect(card.correctAnswer).to.equal('object');
  });
  
});