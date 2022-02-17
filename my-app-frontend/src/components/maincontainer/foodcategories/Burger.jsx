import React from 'react'
import FoodCard from '../FoodCard';
import SwipeButton from '../SwipeButton';

function Burger({handleSuperLike, cart, setCart, burgerItems, handleMoreFood, handleBack, burgerArr }) {
  const burgerItemFun = burgerArr.map((food)=> (
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
      {burgerItemFun}
      <SwipeButton
      handleSuperLike={handleSuperLike}
      handleMoreFood={handleMoreFood}
      handleBack={handleBack}
      cart ={cart}
      />
       
    </div>
  )
}

export default Burger;