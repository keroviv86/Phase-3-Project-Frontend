import React, {useState} from 'react'
// import PersonIcon from '@material-ui/icons/Person';
import Login from "./Login"
import {Link} from 'react-router-dom'

export default function Header() {
  const [isClicked, setIsClicked] = useState(false)

  function myFunction() {
    let element = document.body;
   
    element.classList.toggle("dark");
  
    setIsClicked(isClicked => !isClicked);
  }

  return (
    <div>
        <header className="header">
                
                <button><Link to="/login" style={{ textDecoration: 'none', color: 'black'}}>Login</Link></button>
                <button className="dark-mode-btn" onClick={myFunction}>{isClicked ? "☾" : "☼"}</button>
                <p className="black"><Link to="/foods"  style={{ textDecoration: 'none', color: 'white'}}>Oishii Me Up</Link></p>
        </header>

    </div>
  )
}

// export default Header;