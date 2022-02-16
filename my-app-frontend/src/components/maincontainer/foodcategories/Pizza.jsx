import React from 'react'
import FoodCard from '../FoodCard';

function Pizza({pizzaItems}) {
  const pizzaItemFun = pizzaItems.map((food)=> (
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
      Pizza is yummmmy 
    {pizzaItemFun}
    </div>
  )
}

export default Pizza;