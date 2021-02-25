import "./styles.css";
import React from "react"
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { SocialIcon } from "react-social-icons";

const responseFacebook = (response) => {
  console.log(response);
};
const responseGoogle = (response) => {
  console.log(response);
};

export default function SocialLogins(props) {

  return (
    <div className="App">
      <div className="social-login-row">
        <div>
          <FacebookLogin
            // https://github.com/keppelen/react-facebook-login
            appId="180915726830056"
            autoLoad={true}
            tag="div"
            textButton={props.type + ' with Facebook'} 
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="my-facebook-button-class"
            icon={<SocialIcon className="social-icon" width="50px" url="http://facebook.com" />}
          />

        </div>

        <div>
          <GoogleLogin
            className="google-login-button"
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                className="google-login-button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <SocialIcon className="social-icon" url="http://google.com" />
                <div className="login-button">{props.type} with Google</div>
              </button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            />

        </div>
      </div>
    </div>
  );
}
