import "./styles.css";
import SocialLogins from "../SocialLogins"
import PortfolioNavigator from '../PortfolioNavigator'
import React, { useState } from "react";
import LoginForm from "../LoginForm"
import SignUpForm from "../SignUpForm"




export default function()  {

  return(
  <div className="login-wrap">
    <div className="login-html">
    <div className="title">Worldly</div>
      <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked/><label htmlFor="tab-1" className="tab options">Sign In</label>
      <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab options optionTwo">Sign Up</label>
      <div className="login-form">
        <div className="sign-in-htm">
            <LoginForm />
            {/* <SocialLogins type="Signup" facebook=" with Facebook"/> */}
          <PortfolioNavigator />
            {/* <div className="group">
            <input type="submit" className="button sign-in-btn" value="Demo Login"/>
          </div> */}
        </div>
        <div className="sign-up-htm">
            <SignUpForm />
          <div className="hr"></div>
        </div>
      </div>
    </div>
  </div>
  )
} 

