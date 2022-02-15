import './index.css';
import Header from './components/header/Header';
import FoodCollecton from './components/maincontainer/FoodCollection';
import {BrowserRouter as Routes, Route, Switch} from "react-router-dom";
import NavBar from './components/NavBar';
import React, {useState, useEffect} from 'react';


function App() {
  const [food, setFood] = useState([])
  //fetch data from json server
  // console.log(food)
  useEffect(()=> {
    fetch('http://localhost:3001/foods')
    .then(res=>res.json())
    .then(data=> setFood(data))
  }, [])

  return (
    <div >
      {/* header component */}
      <Header/>
      <NavBar/>
      {/* main container component */}
      <body>
        <div className="main_container">
          <FoodCollecton foodItems={food}/>
          
        </div>
        
        

        {/* collection of food cards */}
        <div className="food_cards"> 
        {/* food card  */}
          <div>
            Food Card 
            Restaurant name
            Restaurant price
            Restaurant likes
            Like / Dislike Feature
          </div>
        </div>

      </body>



    </div>
  );
}

export default App;
