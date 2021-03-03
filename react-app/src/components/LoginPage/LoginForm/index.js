import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../store/session';

export const LoginForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const onLogin = async (e) => {
    // form validation_errors
    if (!password) return alert('Please enter a password')
    if (!email) return alert('please enter an email')
    
    const user = { email, password }
    e.preventDefault();

    const res = await dispatch(login(user))

    console.log('thiss', res)
    if (!res.errors) {
      // TODO  Render an error model on bad login on the db

      alert( 'TODO  Render an error model on bad login')
    } else {
      setErrors(res.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (

    <form onSubmit={onLogin}>
      {errors}
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div className="group">
        <label className="label" htmlFor="email">Username</label>
        <input
          className="input"
          name="email"
          type="text"
          // placeholder="Username"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className='group'>
        <label className='label' htmlFor="password">Password</label>
        <input
          className="input"
          name="password"
          type="password"
          // placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
          <div className="group">
            <input id="check" type="checkbox" className="check" checked/>
            <label for="check"><span className="icon check-box"></span> Remember me</label>
          </div>
          <div className="group">
            <input type="submit" className="button sign-in-btn" value="Sign In"/>
          </div>
      </div>
    </form>
  );
};

export default LoginForm;
