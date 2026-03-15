import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          {/* Колонка 1: Логотип */}
          <div className="footer__col">
            <Link to="/" className="footer__logo">
              <img src="/assets/logo.png" alt="Texel Logo" style={{ height: '35px' }} />
            </Link>
          </div>

          {/* Колонка 2: Направления */}
          <div className="footer__col">
            <h4 className="footer__title">Направления</h4>
            <nav className="footer__nav">
              <Link to="/internship">Стажировка</Link>
              <Link to="/incubator">Инкубатор стартапов</Link>
              <Link to="/courses">Курсы</Link>
              <Link to="/career">Карьера</Link>
            </nav>
          </div>

          {/* Колонка 3: Контакты */}
          <div className="footer__col">
            <h4 className="footer__title">Контакты</h4>
            <div className="footer__contacts">
              <p>Email: <a href="mailto:i@texel.graphics">i@texel.graphics</a></p>
              <p>Телефон: <a href="tel:+74950183935">+7 (495) 018-39-35</a></p>
              <p>Адрес: 109316, Москва, Волгоградский проспект, 42к5, Технополис Москва</p>
            </div>
          </div>

          {/* Соцсети в углу */}
          <div className="footer__col footer__col--socials">
            <div className="footer__socials">
              <a href="#"><Facebook size={24} /></a>
              <a href="#"><Twitter size={24} /></a>
              <a href="#"><Instagram size={24} /></a>
              <a href="#"><Youtube size={24} /></a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>Texel(c) 2025. All rights reserved. <a href="/privacy">Privacy Policy</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;