import React from 'react'
import FoodCard from '../FoodCard';
function Ramen({ramenItems}) {
  const ramenItemFun = ramenItems.map((food)=>(
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
      <p>Ramen nopm nom nom</p>
      {ramenItemFun}
    </div>
  )
}

export default Ramen;
