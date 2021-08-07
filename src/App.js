  
import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import IngredientsList from './IngredientsList.js';
import Footer from './Footer.js';


function App() {

  return (

    <div className="App">

      <Header />
      <Main />
      <IngredientsList />
      <Footer />
    </div>

  );
}

export default App;
