// import PersonIcon from '@material-ui/icons/Person';
import Login from "./Login"
import {Link} from 'react-router-dom'
import React, {useState} from 'react'

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
                
                <button className="login-button"><Link to="/login" style={{ textDecoration: 'none'}}>Login</Link></button><br/><br/><br/><br/>
                <button className="dark-mode-btn" onClick={myFunction}>{isClicked ? "☾" : "☼"}</button><br/>
                <p className="title"><Link to="/foods"  style={{ textDecoration: 'none', color: 'white', font: '40px'}}>Oishii Me Up</Link></p>
        </header>

    </div>
  )
}

// export default Header;