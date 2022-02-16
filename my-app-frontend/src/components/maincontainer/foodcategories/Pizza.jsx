import React from 'react'
import FoodCard from '../FoodCard';
import SwipeButton from '../SwipeButton';

function Pizza({pizzaItems, pizzaArr, handleMoreFood, handleBack}) {
  const pizzaItemFun = pizzaArr.map((food)=> (
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

  return (
    <div  className="food-container">
      Pizza is yummmmy 
    {pizzaItemFun}
    <SwipeButton
    handleMoreFood={handleMoreFood}
    handleBack={handleBack}/>
    
    </div>
  )
}

export default Pizza;