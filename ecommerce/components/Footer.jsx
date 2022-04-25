import React from 'react';
import { AiFillFacebook, AiFillInstagram, } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Dappa Style & Trends. All rights reserved</p>
      <p className="icons">
        <AiFillFacebook />
        <AiFillInstagram />
      </p>
    </div>
  )
}

export default Footer