import React from 'react'
import FoodCard from '../FoodCard';
import SwipeButton from '../SwipeButton';

function Pastry({pastryItems, handleMoreFood, handleBack, pastryArr }) {
  const pastryItemFun = pastryArr.map((food)=> (
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
      {pastryItemFun}
      <SwipeButton
      handleMoreFood={handleMoreFood}
      handleBack={handleBack}/>
      
    </div>
  )
}

export default Pastry;

