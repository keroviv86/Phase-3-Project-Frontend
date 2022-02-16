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
  const [burgerCount, setBurgerCount]= useState(1)
  const [ramenCount, setRamenCount]= useState(14)
  const [pizzaCount, setPizzaCount] = useState(5)
  const [tacoCount, setTacoCount]= useState(9)
  const [pastryCount, setPastryCount] = useState(18)
  
  //fetching the data
  useEffect(()=> {
    fetch('http://localhost:9292/foods')
    .then(res=>res.json())
    .then(data=> setFood(data))
  }, [])

  useEffect(()=> {
    fetch(`http://localhost:9292/foods/burgers/${burgerCount}`)
    .then(res=>res.json())
    .then(data=> setBurger(data))
  }, [burgerCount])

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

  // useEffect(()=> {
  //   fetch('http://localhost:9292/burgers/${burgerCount}')
  //   .then(res=>res.json())
  //   .then(data=> setBurgerCount(data))
  // }, [])

  

  return (
    <div >
      <Header/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/foods" element={
        // <NavBar/>
        <FoodCollecton

        //passing down the food category array
          foodItems={food}
          setFood={setFood}
          burgerItems={burger}
          setBurgerCount={setBurgerCount}
          ramenItems={ramenCount}
          setRamenCount={setRamenCount}
          pizzaItems={pizzaCount}
          setPizzaCount={setPizzaCount}
          tacoItems={tacoCount}
          setTacoCount={setTacoCount}
          pastryItems={pastryCount}
          setPastryCount={setPastryCount}
        />}/>

        {/* NavBar */}
        <Route path='/burger' element={
           <Burger
           burgerItems={burger}
           burgerCount={burgerCount}
          setBurgerCount={setBurgerCount}
            />}/>
      
        <Route path='/ramen' element={ 
          <Ramen
          ramenItems={ramen}
          />}/>

        <Route path='/pizza' element={ 
        <Pizza
        pizzaItems={pizza}
        />}/>

        <Route path='/taco' element={ <Taco
        tacoItems={taco}
        />}/>

        <Route path='/pastry' element={ 
          <Pastry
            pastryItems={pastry}
          />}/>

      </Routes>
      
      <NavBar/>
      
      {/* <Header/>
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
