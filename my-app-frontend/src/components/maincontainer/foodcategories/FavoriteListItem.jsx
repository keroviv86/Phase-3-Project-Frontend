import React from 'react'


function FavoriteListItem({id, name,restaurant, image, category}){
    return (
        <div>
            {/* <ul class="list">
                <li>{restaurant}: {name}</li>
            </ul> */}
            <article className="leaderboard"/>
                <main className="profiles"/>
                     <article className="profile">
                         <img src={image} alt={name} className="picture"/>
                        <span class="restaurant">{restaurant}</span>
                        <span class="name">{name}</span>
             </article>
        </div>
        
    )
}

export default FavoriteListItem;