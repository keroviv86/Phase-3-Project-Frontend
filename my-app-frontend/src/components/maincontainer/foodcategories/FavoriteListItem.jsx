import React from 'react'


function FavoriteListItem({name,restaurant, image, id, phone, address, handleFavClick, togglePopup, showMap}){
    function onHandleFavClick(){
        handleFavClick(name,restaurant,phone,address)
        togglePopup()
    }
    

    return (
        <div>
            {/* <ul class="list">
                <li>{restaurant}: {name}</li>
            </ul> */}
            <article className="leaderboard"/>
                <main className="profiles"/>
                     <article className="profile" onClick= {onHandleFavClick}>
                         <img src={image} alt={name} className="picture"/>
                        <span class="restaurant">{restaurant}</span>
                        <span class="name">{name}</span>
                        {/* <button onClick={togglePopup()}>Learn More</button>  */}
             </article>
        </div>
        
    )
}

export default FavoriteListItem;