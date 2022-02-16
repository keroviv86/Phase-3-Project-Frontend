import React from "react"; 
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";



function SwipeButton({id, food, cart, setCart, handleMoreFood, handleBack, handleSuperLike}){
    // const superLike = handleOnClick(e)

   


    function handleOnClick(){
        console.log(id)
    }


    return(
        <div className="swipe-buttons">
            <IconButton onClick={handleBack} className="repeat">
                <ReplayIcon/>
            </IconButton>
            <IconButton className= "left">
                <CloseIcon/>
            </IconButton>
            <IconButton onClick={handleOnClick} className="star">
                <StarRateIcon/>
            </IconButton>
            <IconButton 
            onClick={handleMoreFood} 
            // onClick={click}
            className="right">
                <FavoriteIcon/>
            </IconButton>
            <IconButton className="flash">
                <FlashOnIcon/>
            </IconButton>

        </div>
    )
}

export default SwipeButton;