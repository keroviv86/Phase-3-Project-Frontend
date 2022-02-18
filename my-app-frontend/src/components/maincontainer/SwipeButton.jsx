import React from "react"; 
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";



function SwipeButton({handleLike, handleDislike, handleBack}){
    
    
    return(
        <div className="swipe-buttons">
            <IconButton onClick={handleBack} className="repeat">
                <ReplayIcon/>
            </IconButton>

            <IconButton onClick = {handleDislike} className= "left">
                <CloseIcon/>
            </IconButton>

            <IconButton onClick = {handleLike} className="star">
                <StarRateIcon/>
            </IconButton>

            <IconButton 
                onClick={handleLike} 
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