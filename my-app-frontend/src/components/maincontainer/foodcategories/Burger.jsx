import React from 'react'
import FoodCard from '../FoodCard';

function Burger({burgerItems}) {
  const burgerItemFun = burgerItems.map((food)=> (
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
    <div>
      <p>Burger nom nom nom </p>
      {burgerItemFun}
    </div>
  )
}

export default Burger;