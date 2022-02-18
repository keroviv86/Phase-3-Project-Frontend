import React from 'react'

function FoodCard({ id,food, name, restaurant, image, category }){
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