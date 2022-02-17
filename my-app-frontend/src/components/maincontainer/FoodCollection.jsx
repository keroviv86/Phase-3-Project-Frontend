import React, {useState} from 'react';
import FoodCard from './FoodCard';
import SwipeButton from './SwipeButton';


function FoodCollection({user,cart,setCart, displayArr, handleMoreFood, handleBack, foodItems}) {

    const foodItemFun = displayArr.map((food)=> (
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
            <SwipeButton
            handleMoreFood={handleMoreFood}
            handleBack={handleBack}
            foodItems={foodItems}
            cart={cart}
            setCart={setCart}
            foodItems={foodItems}
            user={user}
        
            />
            </div>
            
        </div>
    )
};

export default FoodCollection;