import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import './styles.css';
import { useDispatch} from 'react-redux';
import { login } from '../../../store/session';
import {rememberMe, isRemembered} from '../../../services/rememberMe.js'

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckBox] = useState(true)
  const history = useHistory()



  const onLogin = async (e) => {
    // form validation_errors
    if (!password) return alert('Please enter a password');
    if (!email) return alert('please enter an email');
    e.preventDefault();
    
    if (checkbox) rememberMe(checkbox, email);
    const user = { email, password };
    const res = await dispatch(login(user));

    return (res.errors) ? setErrors(res.errors): <Redirect to='/' />
  }

  useEffect(() => {
    setEmail(isRemembered())
  },[])

  const checkboxHandler = () => (checkbox) ? setCheckBox(false) : setCheckBox(true)


  return (
    <form onSubmit={onLogin}>
      <div className='error-container'>
        {errors.map((error) => (
          <li className='error'>{error}</li>
        ))}
      </div>
      <div className="group">
        <label className="label" htmlFor="email">Username or Email</label>
        <input
          className="input"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
      </div>
      <div className='group'>
        <label className='label' htmlFor="password">Password</label>
        <input
          className="input"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />
          <div className="group">
          <input onChange={() =>checkboxHandler} id="check" type="checkbox" className="check" defaultChecked/>
            <label htmlFor="check"><span className="icon check-box"></span> Remember me</label>
          </div>
          <div className="group">
            <input type="submit" className="button sign-in-btn" value="Sign In"/>
          </div>
      </div>
    </form>
  );
};

export default LoginForm;
