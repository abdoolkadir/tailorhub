import React from 'react';
import { menuData } from '../data/menuData';

function Header() {
  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('user');

    window.location.href = '/';
  };
  return (
    <header>
      <div className="logo">
        <img src="/assets/images/dashboard-logo.svg" alt="logo" />
      </div>

      <div className="search">
        <input
          placeholder="Search for products, categories ..."
          type="text"
          className="icon-search"
          style={{
            background:
              'url(/assets/images/input-search-icon.svg) no-repeat 260px center',
            backgroundColor: '#fff'
          }}
        />
      </div>

      <nav>
        <ul>
          {menuData.map(({ link, type, title, icon }, index) => (
            <li key={index}>
              {type ? (
                <a href={link} onClick={handleLogout}>
                  {title}{' '}
                </a>
              ) : (
                <a href={link}>
                  {title} {icon && <img src={icon} alt="drop down icon" />}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="cart">
        <img src="/assets/images/cart-icon.svg" alt="cart" />
        <small>My cart</small>
        <span>1</span>
      </div>

      <div className="nav-mobile-menu">
        <a href="/">
          <img src="/assets/images/menu.svg" alt="" />
        </a>
      </div>
    </header>
  );
}

export default Header;
