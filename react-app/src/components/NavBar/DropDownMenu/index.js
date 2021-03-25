
import React, { useRef } from 'react';
import {useDetectOutsideClick} from "../../../services/detectOustsideClick"
import './styles.css';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import { logout } from "../../../services/auth";

const DropDownMenu = ({setAuthenticated}) => {

  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };


  const history = useHistory()
  const username = useSelector(state => state.session.user.username)


    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    const profileRedirect = () => {
      history.push(`profile/${username}`)
    }
  
    return (
      <>
        <div className="menu-container">
          <button onClick={onClick} className="menu-trigger">
            <span>User</span>
            <img
              src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
              alt="User avatar"
            />
          </button>
          <nav
            ref={dropdownRef}
            className={`menu abs ${isActive ? "active" : "inactive"}`}
          >
            <ul>
              <li>
                <div className='' onClick={profileRedirect} >Profile</div>
              </li>
              <li>
                
              </li>
              <li>
                <div className='' onClick={onLogout}>Signout</div>
              </li>
              <li>
                <div className=''>Signout</div>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
  
export default DropDownMenu