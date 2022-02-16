import './index.css';
import {Routes, Route} from "react-router-dom";

//components
import FoodCollecton from './components/maincontainer/FoodCollection';
import Header from './components/header/Header';
import NavBar from './components/NavBar';
import Login from './components/header/Login';
import Burger from './components/maincontainer/foodcategories/Burger';
import Pizza from './components/maincontainer/foodcategories/Pizza';
import Ramen from './components/maincontainer/foodcategories/Ramen';
import Taco from './components/maincontainer/foodcategories/Taco';
import Pastry from './components/maincontainer/foodcategories/Pastry';
import FoodCard from './components/maincontainer/FoodCard';
import Favorites from './components/maincontainer/foodcategories/Favorites';

import React, {useState, useEffect} from 'react';


function App() {
  // this is an array of all of the food
  const [food, setFood] = useState([])

  //an array of each food category/cuisine
  const [burger, setBurger] = useState([])
  const [ramen, setRamen] = useState([])
  const [pizza, setPizza] = useState([])
  const [pastry, setPastry] = useState([])
  const [taco, setTaco] = useState([])


  // these hold the position in the array of foods
  
  //fetching the data
  useEffect(()=> {
    fetch('http://localhost:9292/foods')
    .then(res=>res.json())
    .then(data=> setFood(data))
  }, [])

  useEffect(()=> {
    fetch(`http://localhost:9292/foods/burgers`)
    .then(res=>res.json())
    .then(data=> setBurger(data))
  }, [])

  useEffect(()=> {
    fetch('http://localhost:9292/foods/ramens')
    .then(res=>res.json())
    .then(data=> setRamen(data))
  }, [])

  useEffect(()=> {
    fetch('http://localhost:9292/foods/pizzas')
    .then(res=>res.json())
    .then(data=> setPizza(data))
  }, [])
  
  useEffect(()=> {
    fetch('http://localhost:9292/foods/tacos')
    .then(res=>res.json())
    .then(data=> setTaco(data))
  }, [])

  useEffect(()=> {
    fetch('http://localhost:9292/foods/pastries')
    .then(res=>res.json())
    .then(data=> setPastry(data))
  }, [])  

  // SwipeButton Functionality
  const [position, setPosition]= useState(1)
  const [cart, setCart]= useState([])

  const displayArr = food.slice(position,position+1)
  const burgerArr = burger.slice(position,position+1)
  const pizzaArr = pizza.slice(position,position+1)
  const tacoArr = taco.slice(position,position+1)
  const ramenArr = ramen.slice(position,position+1)
  const pastryArr = pastry.slice(position,position+1)

  function handleMoreFood(e){
      setPosition((prevPosition)=>(prevPosition+1) % food.length)
  }

  function handleBack(e){
      setPosition((prevPosition)=> (prevPosition-1) % food.length)
  }

  function handleSuperLike(e){
      e.addEventListener('click', )
  }
  
  console.log(food)
  const filteringFood = [...food]
  .map((items)=>{
    return
    <Favorites 
    key={items.id} 
    id={items.id}
    handleSuperLike={handleSuperLike}
    />
  })

  const [id, setId] = useState([1]) //string interpolation later for #1
  


  return (
    <div >
      <NavBar/>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/foods" element={
        // <NavBar/>
          <FoodCollecton
            displayArr = {displayArr}
            handleMoreFood={handleMoreFood}
            handleBack={handleBack}
            foodItems= {food}
            cart ={cart}
            setCart={setCart}
        />}/>

        {/* NavBar */}
        <Route path='/burger' element={
          <Burger 
            burgerItems={burger}
            position={position}
            setPosition={setPosition}
            burgerArr = {burgerArr}
            handleMoreFood={handleMoreFood}
            handleBack={handleBack}
            cart={cart}
            setCart={setCart}
            />}/>
      
        <Route path='/ramen' element={ 
          <Ramen
            ramenItems={ramen}
            position={position}
            setPosition={setPosition}
            ramenArr = {ramenArr}
            handleMoreFood={handleMoreFood}
            handleBack={handleBack}
          />}/>

        <Route path='/pizza' element={ 
        <Pizza
            pizzaItems={pizza}
            position={position}
            setPosition={setPosition}
            pizzaArr = {pizzaArr}
            handleMoreFood={handleMoreFood}
            handleBack={handleBack}
        />}/>

        <Route path='/taco' element={ <Taco
            tacoItems={taco}
            position={position}
            setPosition={setPosition}
            tacoArr = {tacoArr}
            handleMoreFood={handleMoreFood}
            handleBack={handleBack}
        />}/>

        <Route path='/pastry' element={ 
          <Pastry
            pastryItems={pastry}
            position={position}
            setPosition={setPosition}
            pastryArr = {pastryArr}
            handleMoreFood={handleMoreFood}
            handleBack={handleBack}
          />}/>
        
        <Route path='/favorites' element={
        <Favorites
        foodItems={food}
        // handleSuperLike={handleSuperLike}
        />}/>

      </Routes>
      
      
    
    </div>
  );
}

export default App;
