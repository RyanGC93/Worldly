
import React, { useRef } from 'react';
import {useDetectOutsideClick} from "../../../services/detectOutsideClick"
import styles from './styles.module.css';
import { useHistory } from "react-router-dom";

const DropSearch = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

  return (
      <>
        <div className={styles.searchMenuContainer}>
          <button onClick={onClick} className="">
            <span>filter</span>
          </button>
          <nav
            ref={dropdownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <div className='dropped-menu'>
              <div>Filter by Regions</div>
              <div className='regions-options'>
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="checkbox"
                  placeholder="Email"
                />
              </div>
                        
            </div>

          </nav>
        </div>
      </>
    );
  }
  
export default DropSearch
