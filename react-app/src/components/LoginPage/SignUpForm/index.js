import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../services/auth';
const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div className="group">
        <label className="label">User Name</label>
        <input
            // placeholder="Username"
                  className="input"
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div className="group">
        <label className="label">Email</label>
        <input
          label=""
          className="input"  
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div className="group">
        <label className="label">Password</label>
              <input
          className="input"        
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div className="group">
        <label className="label">Repeat Password</label>
          <input
          className="input"        
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div className="group">
            <input type="submit" className="button sign-in-btn" value="Sign Up"/>
          </div>
    </form>
  );
};

export default SignUpForm;
