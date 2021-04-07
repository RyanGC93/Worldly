
import React, { useRef } from 'react';
import {useDetectOutsideClick} from "../../../services/detectOutsideClick"
import './styles.css';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'

const DropSearch = () => {
  const history = useHistory()
  const username = useSelector(state => state.session.user.username)


    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);


  
    return (
      <>
        <div className="search-menu-container">
          <button onClick={onClick} className="menu-trigger search-trigger">
            <span>filter</span>
     
          </button>
          <nav
            ref={dropdownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <div className='dropped-menu'>
                        
            </div>

          </nav>
        </div>
      </>
    );
  }
  
export default DropSearch