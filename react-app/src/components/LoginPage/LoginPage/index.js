import "./styles.css";
import SocialLogins from "../SocialLogins"
import PortfolioNavigator from '../PortfolioNavigator'
import React from "react";
import LoginForm from "../LoginForm"
import SignUpForm from "../SignUpForm"




const LoginPage = ({setAuthenticated}) =>  {

  return(
  <div className="login-wrap">
    <div className="login-html">
    <div className="title__login">Worldly</div>
      <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked/><label htmlFor="tab-1" className="tab__login ">Sign In</label>
      <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab__login  ">Sign Up</label>
      <div className="login-form">
        <div className="sign-in-htm">
            <LoginForm setAuthenticated={setAuthenticated} />
            <SocialLogins type="Signup" facebook=" with Facebook"/>
          <PortfolioNavigator />

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

export default LoginPage