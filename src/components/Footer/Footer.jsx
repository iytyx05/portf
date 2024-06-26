import React from 'react';
import iconka from '../../assets/icons/twitter.png';
import iconka1 from '../../assets/icons/instagram.png';
import iconka2 from '../../assets/icons/facebook.png';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-box">
          <div className="footer-box-side">
            <h3 className="footer-box-side-title">
              Категории
            </h3>
            <ul className="footer-box-side-lists">
              <li className="footer-box-side-list">
                Пресеты
              </li>
              <li className="footer-box-side-list">
                Принты
              </li>
            </ul>
          </div>
          <div className="footer-box-side">
            <h3 className="footer-box-side-title">
              Бизнес-направления
            </h3>
            <ul className="footer-box-side-lists">
              <li className="footer-box-side-list">Свадебная Фотография</li>
              <li className="footer-box-side-list">Спортивная Фотография</li>
              <li className="footer-box-side-list">Портретная Фотография</li>
              <li className="footer-box-side-list">Архитектурная Фотография</li>
              <li className="footer-box-side-list">Фотография Животных</li>
              <li className="footer-box-side-list">Фотография еды</li>
              <li className="footer-box-side-list">Фотография Природы</li>
            </ul>
          </div>
          <div className="footer-box-side">
            <h3 className="footer-box-side-title">Обо мне</h3>
            <div className="footer-box-side-webs">
              <span> <a href="https://twitter.com/?lang=ru" rel="noreferrer" target='_blank' ><img src={iconka} width="24" height="24" alt='twitter' /></a></span>
              <span><a href="https://www.instagram.com/sv_ms_photos/ " rel="noreferrer" target='_blank'><img src={iconka1} width="24" height="24" alt='instagram' />
              </a></span>
              <span> <a href="https://www.facebook.com/" rel="noreferrer" target='_blank'><img src={iconka2} width="24" height="24" alt='facebook' />
              </a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
