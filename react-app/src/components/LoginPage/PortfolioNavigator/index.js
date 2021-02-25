import React from 'react'
import "./styles.css";
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
export default function(){
  return (
    <div>

        <div className="professional-header">Professional Resources</div>
      <div className="professional-row">
          <FaLinkedin className='professional-fa'/>
          <FaGithubSquare className='professional-fa'/>
          <SiGmail className='professional-fa' />

      </div>
    </div>
  )
}