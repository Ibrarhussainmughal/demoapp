import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
 <div className="App">
  {/* <Dinner></Dinner*/} 
  
  <Dinner dishName="chicken karahi" sweetdish= "kheer"/>

  <hr/>

  <Dinner dishName="chicken nihari" sweetdish= "halwa"/>

  <hr/>

  <Dinner dishName="chicken karahi" sweetdish= "kheer"/>

  <Dinner dishName="baryani" sweetdish="jalabi"/>
  
 </div>   
  );
}

export default App;
