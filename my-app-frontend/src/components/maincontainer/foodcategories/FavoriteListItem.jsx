import React from 'react'


function FavoriteListItem({name,restaurant, image, id, phone, address, handleFavClick}){

    return (
        <div>
            {/* <ul class="list">
                <li>{restaurant}: {name}</li>
            </ul> */}
            <article className="leaderboard"/>
                <main className="profiles"/>
                     <article className="profile" onClick= {()=>handleFavClick(name,restaurant,phone,address)}>
                         <img src={image} alt={name} className="picture"/>
                        <span class="restaurant">{restaurant}</span>
                        <span class="name">{name}</span>
             </article>
        </div>
        
    )
}

export default FavoriteListItem;