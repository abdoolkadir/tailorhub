import React from 'react';
import { Button } from './Button';
import { footerData } from '../data/footerData';

function Footer() {
  return (
    <footer>
      <div className="footer-section-1">
        <div className="footer-col-1">
          <Button
            text="GET STARTED"
            color="#fff"
            textColor="#060F41"
            borderRadius="5.23px"
            fontWeight="bold"
          />
          <Button
            text="SIGN IN"
            color="#060F41"
            textColor="#fff"
            borderRadius="5.23px"
            fontWeight="bold"
          />
        </div>

        <div className="footer-links">
          {footerData.map(({ title, links }, index) => (
            <div>
              <p>{title}</p>
              <ul key={index}>
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="logo">
          <img src="/assets/images/footer-logo.svg" alt="" />
        </div>
      </div>

      <hr />

      <div className="footer-section-2">
        <div className="col-1">
          <p>&copy; Twine 2019. All rights reserved. </p>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <p>Privacy Terms</p>
      </div>
    </footer>
  );
}

export default Footer;
