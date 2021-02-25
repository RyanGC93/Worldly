import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { signUp } from '../../../services/auth';
import { registerUser } from '../../../store/session';
const SignUpForm = (authenticated,setAuthenticated) => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const sessionUser = useSelector(state => state.session.user);
  
  if (sessionUser) return <Redirect to='/' />;
  


  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      // const user = await registerUser(username, email, password);
      const user = { username, email, password };
      const res = await dispatch(registerUser(user))
      console.log(res)
      if (res) {

        alert("ok")
        return <Redirect to='/' />
      } else {
        
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

  // if (authenticated) {
  //   return <Redirect to="/" />;
  // }

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
