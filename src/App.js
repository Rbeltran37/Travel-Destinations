import React from 'react';
import './App.css';
import Cards from "./components/Cards";
import Background from './components/Background';
import data from "./data";
import Nav from "./components/Navbar";

function App() {  
  const cards = data.map(item => {
    return (
      <Cards
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <Nav />
      <Background />
      {cards}
    </div>
  );
}

export default App;
