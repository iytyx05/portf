import React, { useRef } from 'react';
import { NavLink } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
  const menu = useRef();

  return (
    <header className="header">
      <div className="container">
        <nav className="header-nav">
          <div className="header-box">
            <div className="header-box-left">
              <h1 className="header-box-left-title">
                Portfolio
              </h1>
            </div>
            <div className="header-box-menu" ref={menu}>
              <NavLink to={'/'} className="header-box-menu-links-link">Главная</NavLink>
              <NavLink to={'/contacts'} className="header-box-menu-links-link">Контакты</NavLink>
              <NavLink to={'/gallery'} className="header-box-menu-links-link">Галерея</NavLink>
              <NavLink to={'/register'}>
                <button className="register-btn">
                  Регистрация
                </button>
              </NavLink>
              <Link to={'/login'}>
              <span className="header-box-menu-user">
                <BiUser size={20} />
              </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
