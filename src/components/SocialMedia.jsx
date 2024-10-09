/* eslint-disable react/jsx-no-undef */

import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { SiGithub } from "react-icons/si";
// import insta from "../assets/instagram.png"

const SocialMedia = () => (
  <div className="app__social">
    <div>
      
      <a href='https://github.com/vivekkumar2909' target="_blank" rel="noreferrer"><SiGithub /></a>
    </div>
    <div>
    <a href='https://www.linkedin.com/in/vivek-kumar-571b32242/' target="_blank" rel="noreferrer"><FaLinkedin /></a>
    </div>
    <div>
    <a href='https://www.instagram.com/imvivekshahofficial/' target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  </div>
);

export default SocialMedia;