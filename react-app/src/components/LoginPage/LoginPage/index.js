import "./styles.css";
import SocialLogins from "../SocialLogins"
import PortfolioNavigator from '../PortfolioNavigator'
import React, { useState } from "react";
import LoginForm from "../LoginForm"
import SignUpForm from "../SignUpForm"
export default function()  {
  const responseFacebook = (response) => {
    console.log(response);
  };
  const responseGoogle = (response) => {
    console.log(response);
  };  
  let randnum = () => Math.floor(Math.random() * 10); 

  // useEffect(() => {
  //   // This would be an env
  //   const client = createClient('563492ad6f917000010000015c04a4ffd6fa4c6fa80b1d1a2b0bb933');
  //   const query = 'Culture';
  //   let backgroundphotos= client.photos.search({ query, per_page: 10 }).then(res => console.log(res)))
  //   let initialPhoto = 
  //   let backgroundImg = document.body.style.style.background
  

  //     setInterval(() => {
  //       randnum
        
  //     }, 5000);    

  // })


  return(
  <div className="login-wrap">
    <div className="login-html">
    <div className="title">Worldly</div>
      <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab options">Sign In</label>
      <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab options optionTwo">Sign Up</label>
      <div className="login-form">
        <div className="sign-in-htm">
          <LoginForm />
          <PortfolioNavigator />
        </div>
        <div className="sign-up-htm">
          <SignUpForm />
            
            
            
            
            
            
            
            
            
            
            {/* <div className="group"> */}
            {/* <label for="user" className="label">Username</label>
            <input id="user" type="text" className="input"/>
          </div>
          <div className="group">
            <label for="pass" className="label">Password</label>
            <input id="pass" type="password" className="input" data-type="password"/>
          </div>
          <div className="group">
            <label for="pass" className="label">Repeat Password</label>
            <input id="pass" type="password" className="input" data-type="password"/>
          </div>
          <div className="group">
            <label for="pass" className="label">Email Address</label>
            <input id="pass" type="text" className="input"/>
          </div>
          <div className="group">
            <input type="submit" className="button sign-up-btn" value="Sign Up"/>
          </div> */}
          <SocialLogins type="Signup" facebook=" with Facebook"/>
          <div className="hr"></div>

        </div>
      </div>
    </div>
  </div>
  )
} 

