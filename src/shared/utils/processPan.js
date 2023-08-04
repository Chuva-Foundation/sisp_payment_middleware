function processCard(pan, CARD_ERRORS) {
  const cardFounded = CARD_ERRORS.find((card) => card.pan === pan );

  if (cardFounded === undefined || cardFounded.code === '001') {
    return cardFounded;
  }
 
  throw {
    code: cardFounded.code,
    description: cardFounded.description
  }
}

module.exports = processCard;
