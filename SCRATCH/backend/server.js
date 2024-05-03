const express = require('express');
const app = express();
const diceRoute = require('./routes/dice.js');

app.use(express.json());
app.use('/api/v1', diceRoute);

const port = 5000;
app.listen(port, () => {
  console.log(`listening at port ${port}...`);
});