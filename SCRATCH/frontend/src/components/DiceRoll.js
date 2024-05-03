import React from 'react';
import dice0 from '../assets/dice0.png';
function DiceRoll() {
  const [diceNumber, setDiceNumber] = React.useState(0);
  
  async function rollDice() {
    const res = await fetch('http://127.0.0.1:5000/api/v1', {
      method: "GET",
      mode: "cors"
    });
    const data = await res.json();
    setDiceNumber(data.diceNumber);
  }

  function diceImage() {
    for (let i = 0; i < 6; i++) {
      if (diceNumber === i) {
        return <img src={require(`../assets/dice${i}.png`)} />;
      }
    }
  }
  
  return (
    <main>
      <h1>Get Your Dice roll</h1>
      <div>{diceImage()}</div>
      <button onClick={rollDice} ><img className='restart' src={require('../assets/restart.png')} /></button>
    </main>
  );
}

export default DiceRoll;