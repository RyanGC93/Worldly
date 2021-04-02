import React from 'react'
import "./styles.css";
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
export default function () {
  


  return (
    <div>

      <div className="professional-header">Professional Resources</div>
        <div className="professional-row" >
          <FaLinkedin className='professional-fa' onClick={() => window.location.href = 'https://www.linkedin.com/in/ryan-conk-8084b4103/'}/>
        <FaGithubSquare className='professional-fa ' onClick={() => window.location.href = 'https://github.com/RyanGC93'} />
        {/* TODO redirect to email */}
          <SiGmail className='professional-fa' onClick={() => window.location.href = ''} />

      </div>
    </div>
  )
}
