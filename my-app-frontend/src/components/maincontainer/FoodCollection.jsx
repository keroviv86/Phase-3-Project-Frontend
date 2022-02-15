import React, {useState} from 'react';
import FoodCard from './FoodCard'
import SwipeButton from './SwipeButton';

function FoodCollection({foodItems}) {
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