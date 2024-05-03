const rollDice = async (req, res) => {
  const diceNumber = Math.floor(Math.random() * 6);
  res.set({'Access-Control-Allow-Origin': '*'});
  res.json({diceNumber});
};


module.exports = {
  rollDice
};