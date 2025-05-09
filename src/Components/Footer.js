import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Devansh Sahni</h4>
      <h4>Copyright &copy; 2023 DS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/clara-hct02" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/clara-c-he/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:clarahct1102@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/clara-hct02/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer