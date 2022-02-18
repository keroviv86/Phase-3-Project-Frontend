import React from 'react';
import FoodCard from './FoodCard';
import SwipeButton from './SwipeButton';


function FoodCollection({displayArr, handleLike, handleDislike, handleBack}) {
    
    const foodCardToDisplay = displayArr.map((food)=> (
        <FoodCard
            className="swipe"
            key={food.id}
            id={food.id}
            food={food}
            name={food.item_name}
            restaurant={food.restaurant_name}
            image={food.image}
            category={food.category}
            
        />
    ))

    return(
        <div>
            <h1>Oishii Card</h1>
            <div className="food-container">
            {foodCardToDisplay}
            <SwipeButton
                handleDislike={handleDislike}
                handleLike={handleLike}
                handleBack={handleBack}
               
            />
            </div>
        </div>
    )
};

export default FoodCollection;