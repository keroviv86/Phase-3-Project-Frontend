import './index.css';
import {Routes, Route} from "react-router-dom";

//components
import FoodCollecton from './components/maincontainer/FoodCollection';
import Header from './components/header/Header';
import NavBar from './components/NavBar';
import Login from './components/header/Login';
import Favorites from './components/maincontainer/foodcategories/Favorites';

import React, {useState, useEffect} from 'react';


function App() {
  // this is an array of all of the food
  const [food, setFood] = useState([])
  const [category, setCategory] = useState('')
  const [userData, setUserData] = useState({})

   // SwipeButton Functionality
   const [position, setPosition]= useState(0)

  //fetching the data
  useEffect(()=> {
    fetch('http://localhost:9292/foods/' + category)
    .then(res=>res.json())
    .then(data=>setFood(data))
  }, [category])

  useEffect(()=> {
    fetch('http://localhost:9292/user/1')
    .then(res=>res.json())
    .then(data=> setUserData(data))
  }, [])

  const displayArr = [food[position]]

  function handleCategoryClick(clickedCategory) {
    setCategory(clickedCategory)
    setPosition(0)
  }

  function incrementPosition() {
    setPosition((prevPosition)=>(prevPosition+1) % food.length)
  }

  function handleLike() {
      incrementPosition()
      // setCart([...cart, food[position]])
      const currentFood = food[position]
      const allFoods = [...userData['foods'], currentFood]
      const addedToUsers= {...userData, foods: allFoods}
      setUserData(addedToUsers)
      
      fetch(`http://localhost:9292/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userData["id"],
          food_id: currentFood["id"]
        }),
      })
        // .then((r) => r.json())
  }

  function handleBack(e){
      setPosition((prevPosition)=> (prevPosition - 1) % food.length)
  }

  return (
    <div >
      <NavBar handleClick={handleCategoryClick}/>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/foods" element={
          <FoodCollecton
            displayArr = {displayArr}
            handleLike={handleLike}
            handleDislike={incrementPosition}
            handleBack={handleBack}
            

           
          />
        }/>

        <Route path="/pizza" element={
          <FoodCollecton
            displayArr = {displayArr}
            handleLike={handleLike}
            handleDislike={incrementPosition}
            handleBack={handleBack}
           
          />
        }/>
        
        <Route path="/burger" element={
          <FoodCollecton
            displayArr = {displayArr}
            handleLike={handleLike}
            handleDislike={incrementPosition}
            handleBack={handleBack}
            
          />
        }/>

        <Route path="/taco" element={
          <FoodCollecton
            displayArr = {displayArr}
            handleLike={handleLike}
            handleDislike={incrementPosition}
            handleBack={handleBack}
            
          />
        }/>

        <Route path="/pastry" element={
          <FoodCollecton
            displayArr = {displayArr}
            handleLike={handleLike}
            handleDislike={incrementPosition}
            handleBack={handleBack}
            
          />
        }/>

        <Route path="/ramen" element={
          <FoodCollecton
            displayArr = {displayArr}
            handleLike={handleLike}
            handleDislike={incrementPosition}
            handleBack={handleBack}
            userData={userData}
           
          />
        }/>

        {/* burger pizza ramen taco pastry */}
        
        <Route path='/favorites' element={
          <Favorites
            cartItems={userData['foods']}
          />
        }/>

      </Routes>
      
      
    
    </div>
  );
}

export default App;
