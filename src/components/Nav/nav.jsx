import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {FaUserGraduate} from 'react-icons/fa';
import {GiSkills} from 'react-icons/gi';
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import {IoIosContact} from 'react-icons/io';

const nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#education">
        <FaUserGraduate />
      </a>
      <a href="#skills">
        <GiSkills />
      </a>
      <a href="#projects">
        <AiOutlineFundProjectionScreen />
      </a>
      <a href="#contact">
        <IoIosContact />
      </a>
    </nav>
  );
}

export default nav