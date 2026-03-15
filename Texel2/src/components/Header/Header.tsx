import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Верхняя синяя панель */}
      <div className="header__top-bar">
        <div className="header__container">
          <div className="header__search-wrapper">
            <Search className="header__search-icon" size={18} />
            <input type="text" placeholder="Поиск..." className="header__search-input" />
          </div>
          
          <nav className="header__nav">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Главная</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>О центре</NavLink>
            <NavLink to="/internship" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Стажировка</NavLink>
            <NavLink to="/incubator" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Инкубатор</NavLink>
            <NavLink to="/courses" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Курсы</NavLink>
            <NavLink to="/chatbot" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Чат-бот</NavLink>
          </nav>
        </div>
      </div>

      {/* Нижняя белая панель */}
      <div className="header__main-bar">
        <div className="header__container">
          <div className="header__socials">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Youtube size={20} /></a>
          </div>

          <Link to="/" className="header__logo">
            <img src="/assets/logo.png" alt="Texel Logo" style={{ height: '40px' }} /> 
          </Link>

          <div className="header__actions">
            <Link to="/registration" className="header__btn-reg">Регистрация</Link>
            <Link to="/apply" className="header__btn-apply">Подать заявку</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;