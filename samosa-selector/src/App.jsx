import './App.css';
import Samosa from './assets/samosa.png'
import {useState} from 'react';


const App = () => {

  // Create a count with an initial value of 0.
  const [count, setCount] = useState(0);

  // Create a multiplier with an initial value of 1.
  const [multiplier, setMultiplier] = useState(1);


  // updateCount() sets the count to its current val + multiplier.
  const updateCount = () => setCount(count + multiplier);


  // Event handler functions to handle upgrades.

  // Sets the value of multiplier to 2x its current value if # counts >= 10.
  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier*2);
      setCount(count-10);
    }
  }

  // Sets the value of multiplier to 5x its current value if # counts >= 100.
  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier*5);
      setCount(count-100);
    }
  }

  // Sets the value of multiplier to be 10x its current value if # counts >= 1000.
  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier*10);
      setCount(count-1000);
    }
  }



  return (
    <div className="App">

      <div className="header">

        <h1>
          Samosa Selector
        </h1>

        <h2>
          {/* Call the count state variable to display the # of clicks. */}
          Count: {count}
        </h2>

        {/* Set updateCount as onClick event handler for <img> element. */}
        <img className="samosa" src={Samosa} onClick={updateCount} />

      </div>

      {/* Add three upgrade options to the user interface within a container. */}
      <div className="container">

        <div className="upgrade">
          <h3>
            Double Stuffed 👯
          </h3>
          <p>
            2x per click
          </p>
          {/* Set buyDoubleStuffed() as the onClick event handler. */}
          <button onClick={buyDoubleStuffed}>
            10 samosas
          </button>
        </div>

        <div className="upgrade">
          <h3>
            Party Pack 🎉
          </h3>
          <p>
            5x per click
          </p>
          {/* Set buyPartyPack() as the onClick event handler. */}
          <button onClick={buyPartyPack}>
            100 samosas
          </button>
        </div>

        <div className="upgrade">
          <h3>
            Full Feast 👨‍🍳
          </h3>
          <p>
            10x per click
          </p>
          {/* Set buyFullFeast() as the onClick event handler. */}
          <button onClick={buyFullFeast}>
            1000 samosas
          </button>
        </div>

      </div>

    </div>
  )
}

export default App