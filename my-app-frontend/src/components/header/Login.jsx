import React from 'react';

function Login(){
    function handleSubmit() {
        alert(`just kidding, you can't do that yet lol`)
    }

    return(
        <div className="details">
          <h2 className="black">
            New to our site?
          </h2> 
          <h3> Sign up here </h3>
          <form onSubmit={handleSubmit}>
                <label htmlFor="new-email-name"></label>
                <input  
                    placeholder="New email..." name="new-email-name" 
                    type="text">
                </input>
                <button className="form-input" type="submit">Sign Up!</button> 
            </form>
        </div>
    )
}

export default Login;