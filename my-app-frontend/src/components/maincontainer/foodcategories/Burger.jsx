import React from 'react'
import FoodCard from '../FoodCard';
import SwipeButton from '../SwipeButton';

function Burger({burgerItems}) {
  const burgerItemFun = burgerItems.map((food)=> (
    <FoodCard
        className="card"
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
    <div className="food-container">
      <p>Burger nom nom nom </p>
      {burgerItemFun}
      <SwipeButton/>
    </div>
  )
}

export default Burger;