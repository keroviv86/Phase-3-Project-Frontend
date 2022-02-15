import React from 'react'

function FoodCard({ food, name, restaurant, image, category }){
    // console.log(food)
    // console.log(name)
    // console.log(restaurant)
    // console.log(image)
    // const foodList = foodItemFun.map((food) => {food.})
    return (
        <div className="swipe">
            <div 
            style= {{backgroundImage: `url(${image})`}}
            className="card">
                <h3 className="cardName">{name}</h3>
        
             </div>
        </div>
        
    )
}

export default FoodCard;