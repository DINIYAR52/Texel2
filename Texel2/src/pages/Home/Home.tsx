import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, GraduationCap, Cpu, ChevronRight } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">Создаем будущее с ИИ уже сегодня</h1>
          <p className="hero__description">
            Присоединяйтесь к разработке программ на базе инновационных технологий: 
            ChatGPT, DeepSeek и прорывных технологий интеллектуального машинного зрения.
          </p>
          <div className="hero__image-wrapper">
            {/* Замените src на ./assets/hero.jpg когда добавите фото */}
            <img 
              src="/assets/3D.png" 
              alt="3D Scanner and AI" 
              className="hero__img" 
            />
          </div>
          <div className="hero__btns">
            <button className="btn-primary-large">Выбрать программу</button>
            <Link to="/about" className="hero__link">Узнать больше <ChevronRight size={20} /></Link>
          </div>
        </div>
      </section>

      {/* 2. НАПРАВЛЕНИЯ */}
      <section className="directions">
        <div className="container">
          <h2 className="section-title">Наши направления</h2>
          
          <div className="directions__list">
            {/* Карточка 1 */}
            <div className="direction-item">
              <div className="direction-content dark-blue">
                <h3>Программа стажировки</h3>
                <p>Обучение на реальных проектах Texel</p>
                <Link to="/internship" className="direction-more">Подробнее →</Link>
              </div>
              <div className="direction-image">
                <img src="/assets/Direction1.png" alt="Стажировка" />
              </div>
            </div>

            {/* Карточка 2 (Реверсивная) */}
            <div className="direction-item reverse">
              <div className="direction-content light-blue">
                <h3>Инкубатор стартапов</h3>
                <p>Развитие ваших ИИ-идей до готового бизнеса</p>
                <Link to="/incubator" className="direction-more">Подробнее →</Link>
              </div>
              <div className="direction-image">
                <img src="/assets/Direction2.png" alt="Инкубатор" />
              </div>
            </div>

            {/* Карточка 3 */}
            <div className="direction-item">
              <div className="direction-content dark-blue">
                <h3>Суперспособности с ИИ</h3>
                <p>Глубокое погружение в ChatGPT и DeepSeek</p>
                <Link to="/courses" className="direction-more">Подробнее →</Link>
              </div>
              <div className="direction-image">
                <img src="/assets/Direction3.png" alt="ИИ" />
              </div>
            </div>

            {/* Карточка 4 (Реверсивная) */}
            <div className="direction-item reverse">
              <div className="direction-content light-blue">
                <h3>Трудоустройство</h3>
                <p>Лучшие выпускники попадают в команду Texel</p>
                <Link to="/about" className="direction-more">Подробнее →</Link>
              </div>
              <div className="direction-image">
                <img src="/assets/Direction4.png" alt="Карьера" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ПРЕИМУЩЕСТВА */}
      <section className="benefits">
        <div className="container">
          <h2 className="section-title">Преимущества центра</h2>
          <p className="section-subtitle">Почему выбирают наш центр</p>

          <div className="benefits__list">
            <div className="benefit-card">
              <Wrench className="benefit-icon" size={40} />
              <div className="benefit-info">
                <h4>Практика на реальных проектах</h4>
                <p>Работа над задачами Texel и учебными кейсами в реальном времени.</p>
              </div>
            </div>

            <div className="benefit-card">
              <GraduationCap className="benefit-icon" size={40} />
              <div className="benefit-info">
                <h4>Эксперты-наставники</h4>
                <p>Кураторство и фидбек от ведущих разработчиков и инженеров компании.</p>
              </div>
            </div>

            <div className="benefit-card">
              <Cpu className="benefit-icon" size={40} />
              <div className="benefit-info">
                <h4>Доступ к технологиям</h4>
                <p>Работа с передовыми моделями ChatGPT, DeepSeek и собственными API Texel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. НОВОСТИ */}
      <section className="news-section">
        <div className="container">
          <h2 className="section-title">Новости</h2>
          <div className="news-grid">
            <div className="news-item">
              <img src="/assets/News1.png" alt="News 1" />
              <div className="news-content">
                <h4>Запускаем 3D-сканирование с ИИ</h4>
                <span className="news-date">07.11.2024</span>
                <button className="news-btn">Читать больше</button>
              </div>
            </div>

            <div className="news-item">
              <img src="/assets/News2.png" alt="News 2" />
              <div className="news-content">
                <h4>Открыт набор на стажировку по ИИ</h4>
                <span className="news-date">01.11.2024</span>
                <button className="news-btn">Читать больше</button>
              </div>
            </div>

            <div className="news-item">
              <img src="/assets/News3.png" alt="News 3" />
              <div className="news-content">
                <h4>Виртуальные аватары: будущее уже здесь</h4>
                <span className="news-date">28.10.2024</span>
                <button className="news-btn">Читать больше</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;