import React from 'react'
import FoodCard from '../FoodCard';

function Taco({tacoItems}) {
  const tacoItemFun = tacoItems.map((food)=> (
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
      Tacos estan muy ricos jaja
      {tacoItemFun}
    </div>
  )
}

export default Taco;