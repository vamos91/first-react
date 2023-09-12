import React, { useState } from 'react';
import Burger from './components/Burger';
import './App.css'

const App = () => {
  const [chosenBurger, setChosenBurger] = useState('')
  const burgers = ["Le new yorker", "Le chicken", "Le veggie" ]

  const handleClick = (burger) => {
    console.log('mon burger:', burger)
    setChosenBurger(burger)
  }

  return (
    <div className='burger-shop'>
      <h4>Vous avez choisi le burger : {chosenBurger}</h4>
      <h4>choisissez une sauce:</h4>
      <button>Mayo</button><button>delete</button>
      <button>Keytchup</button><button>delete</button>
        {
          burgers.map((burger, item) => (
            <Burger key={item} burgerName={burger} handleParentClick={handleClick} />
          ))
        }
    </div>
  );
};

export default App;
