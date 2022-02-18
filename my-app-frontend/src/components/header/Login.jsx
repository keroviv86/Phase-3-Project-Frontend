import React from 'react';

function Login(){
    function handleSubmit() {
        alert(`just kidding, you can't do that yet lol`)
    }

    return(
        <div className="details">
          <h2 className="head">
            New to our site?
          </h2> 
          <h3 className="sign" align="center"> Sign up here </h3>
          <form onSubmit={handleSubmit}>
                <label htmlFor="new-email-name"></label>
                <input  className="pass" 
                    placeholder="New email..." name="new-email-name" 
                    type="text">
                </input>
                <button className= "submit" align= "center">Sign Up!</button>
                <p className="loginbtn" align="center"><a href={'#top'}>Login</a></p> 
            </form>
        </div>
    )
}

export default Login;