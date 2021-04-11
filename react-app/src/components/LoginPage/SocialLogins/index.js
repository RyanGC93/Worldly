import React from "react"
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { SocialIcon } from "react-social-icons";
import styles from "./styles.module.css"

const responseFacebook = (response) => {
  console.log(response);
};
const responseGoogle = (response) => {
  console.log(response);
};

export default function SocialLogins(props) {

  return (
    <>
      <div className={styles.socialLoginRow}>
        <div>
          <FacebookLogin
            // https://github.com/keppelen/react-facebook-login
            appId={process.env.REACT_APP_FACEBOOK_LOGIN_KEY}
            autoLoad={true} 
            tag="div"
            textButton={props.type + ' with Facebook'} 
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass={styles.myFacebookButtonClass }
            icon={<SocialIcon className={styles.socialIcon} width="50px" url="http://facebook.com" />}
          />
        </div>
        <div>
          <GoogleLogin
            className={styles.googleLoginButton}
            clientId={process.env.REACT_APP_GOOGLE_LOGIN_KEY}
            render={(renderProps) => (
              <button
                className={styles.googleLoginBtn}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <SocialIcon className={styles.socialIcon} url="http://google.com" />
                <div className={styles.loginButton}>{props.type} with Google</div>
              </button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            />

        </div>
      </div>
    </>
  );
}
