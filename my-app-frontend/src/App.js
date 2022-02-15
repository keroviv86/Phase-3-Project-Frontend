import './index.css';
import Header from './components/header/Header';
import FoodCollecton from './components/maincontainer/FoodCollection';
import {Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Login from './components/header/Login';


import React, {useState, useEffect} from 'react';


function App() {
  const [food, setFood] = useState([])
  
  useEffect(()=> {
    fetch('http://localhost:3001/foods')
    .then(res=>res.json())
    .then(data=> setFood(data))
  }, [])

  

  return (
    <div >
      <Header/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/foods" element={<FoodCollecton
          foodItems={food}
        />}/>
      </Routes>
      {/* <Header/>
      <NavBar/>
      <body>
        <div className="main_container">
          <FoodCollecton foodItems={food}/>
          
        </div>
        
        <div className="food_cards"> 
          <div>
            Food Card 
            Restaurant name
            Restaurant price
            Restaurant likes
            Like / Dislike Feature
          </div>
        </div>

      </body> */}



    </div>
  );
}

export default App;
