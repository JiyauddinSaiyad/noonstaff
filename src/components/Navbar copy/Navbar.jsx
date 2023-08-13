import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const linkData = [
  { route: 'home', display: 'Home' },
  { route: 'software-development', display: 'Software Development' },
  { route: 'consultancy-services', display: 'Consultancy Services' },
  { route: 'digital-marketing', display: 'Digital Marketing' },
  { route: 'product-creation', display: 'Product Creation' },
  { route: 'contact', display: 'Contact' },
];

const NavbarNext = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <a href="/">
        <div className="app__navbar-logo">
          <img src={images.mainlogo} alt="logo" />
        </div>
      </a>
      <ul className="app__navbar-links">
        {linkData.map((item) => (
          <li className="app__flex p-text" key={`link-${item.route}`}>
            <div />
            <a href={`/${item.route}`}>{item.display}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {linkData.map((item) => (
                <li key={item.route}>
                  <a href={`#${item.route}`} onClick={() => setToggle(false)}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavbarNext;
