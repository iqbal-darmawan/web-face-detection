import React, { Component } from 'react';
import './App.css';

function animate(){
  document.querySelector('.img-btn').addEventListener('click',function()
    {
      document.querySelector('.container').classlist.toggle('s-signup')
    }
  );
}
class App extends Component {
 
  render() {
    return (
      <div>
        <div className="container">
          <div className="form sign-in">
            <h2>Sign In</h2>
            <label htmlFor="">
              <span>Email address</span>
              <input type="email" name="email"/>
            </label>
            <label htmlFor="">
              <span>Password</span>
              <input type="password" name="password"/>
            </label>
            <button className="submit" type="button">Sign In</button>
            <p className="forgot-pass">Forgot password</p>
          </div>

          <div className="sub-container">
            <div className="img">
              <div className="img-text m-up">
                <h2>New Here?</h2>
                <p>Sign up and discover great ammount of new  opportunities</p>
              </div>
              <div className="img-text m-in">
                <h2>One of us?</h2>
                <p>if you alredy has an account, just sign in. We've missed you!</p>
              </div>
              <div className="img-btn" onClick={animate()}>
                <span className="m-up">Sign Up</span>
                <span className="m-in">Sign In</span>
              </div>
            </div>
            <div className="form sign-up">
              <h2>Sign Up</h2>
              <label htmlFor="">
                <span>Name</span>
                <input type="text"/>
              </label>
              <label htmlFor="">
                <span>Email</span>
                <input type="email"/>
              </label>
              <label htmlFor="">
                <span>Passwoord</span>
                <input type="password"/>
              </label>
              <label htmlFor="">
                <span>Confirm Password</span>
                <input type="password"/>
              </label>
              <button type="button" className="submit">Sign Up Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;