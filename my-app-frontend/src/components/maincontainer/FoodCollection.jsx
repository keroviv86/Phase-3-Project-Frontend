import React, {useState} from 'react';
import FoodCard from './FoodCard';
import SwipeButton from './SwipeButton';

//components 
import Burger from './components/maincontainer/foodcategories/Burger';
import Pizza from './components/maincontainer/foodcategories/Pizza';
import Ramen from './components/maincontainer/foodcategories/Ramen';
import Taco from './components/maincontainer/foodcategories/Taco';
import Pastry from './components/maincontainer/foodcategories/Pastry';



function FoodCollection({foodItems,setFoods, burgerItems, setBurgerCount, ramenItems,setRamenCount, pizzaItems, setPizzaCount, tacoItems, setTacoCount, pastryItems,setPastryCount}) {
    console.log(foodItems)
    const foodItemFun = foodItems.map((food)=> (
        <FoodCard
            className="swipe"
            key={food.id}
            id={food.id}
            food={food}
            name={food.item_name}
            restaurant={food.restaurant_name}
            image={food.image}
            category={food.category}
            preventSwipe={['up', 'down']}
        />
    ))

    return(
        <div>
            <h1>Oishii Card</h1>
            <div className="food-container">
              {foodItemFun}
            <SwipeButton/>
            </div>
            
        </div>
    )
};

export default FoodCollection;