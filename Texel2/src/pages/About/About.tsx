import React from 'react';
import { Target, Lightbulb, Users, Briefcase, Rocket, Trophy } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1 className="page-title">О центре</h1>

        {/* Hero Section */}
        <section className="about-hero">
          <h2>Создаем экосистему ИИ-инноваций</h2>
          <p className="about-hero__text">
            Объединяем лучшие технологии, экспертов и амбициозные проекты для прорыва в искусственном интеллекте.
          </p>
          <div className="about-hero__image-wrapper">
            <img 
              src="/assets/Team.png" 
              alt="Команда Texel" 
              className="about-hero__img" 
            />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-vision">
          <div className="mission-card">
            <h3>Наша миссия</h3>
            <p>
              Создать точку сборки ИИ-талантов в России, где каждый желающий может получить практический опыт работы с передовыми технологиями и внести вклад в развитие искусственного интеллекта.
            </p>
          </div>
          <div className="vision-card">
            <h3>Наше видение</h3>
            <p>
              Стать ведущим центром ИИ-инноваций в регионе, где рождаются технологические стартапы мирового уровня и формируется новое поколение ИИ-специалистов.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="values">
          <h2 className="section-title">Наши ценности</h2>
          <div className="values__grid">
            <div className="value-item">
              <Target className="value-icon" size={32} />
              <h4>Практичность</h4>
              <p>Все обучение строится вокруг задач из практики Texel и партнеров.</p>
            </div>
            <div className="value-item">
              <Lightbulb className="value-icon" size={32} />
              <h4>Инновации</h4>
              <p>Мы используем только самые современные инструменты и подходы в области ИИ.</p>
            </div>
            <div className="value-item">
              <Users className="value-icon" size={32} />
              <h4>Сообщество</h4>
              <p>Создаем среду для обмена опытом и нетворкинга между профессионалами.</p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="achievements">
          <h2 className="section-title">Достижения</h2>
          <p className="section-subtitle">Наши результаты</p>
          <div className="achievements__grid">
            <div className="stat-card">
              <Users className="stat-icon blue" />
              <div>
                <span className="stat-number">150+</span>
                <p>Участников программ</p>
              </div>
            </div>
            <div className="stat-card">
              <Rocket className="stat-icon orange" />
              <div>
                <span className="stat-number">25+</span>
                <p>Запущенных стартапов</p>
              </div>
            </div>
            <div className="stat-card">
              <Briefcase className="stat-icon brown" />
              <div>
                <span className="stat-number">95%</span>
                <p>Трудоустройство выпускников</p>
              </div>
            </div>
            <div className="stat-card">
              <Trophy className="stat-icon gold" />
              <div>
                <span className="stat-number">15+</span>
                <p>Партнерских компаний</p>
              </div>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="clients">
          <h2 className="section-title">Клиенты</h2>
          <p className="section-subtitle">Список компаний, которые перешли грань цифровой реальности</p>
          <div className="clients__grid">
            {/* Замените на реальные логотипы из папки assets */}
            <div className="client-logo"><img src="/assets/Visa.png" alt="Visa" /></div>
            <div className="client-logo"><img src="/assets/Mersedes.png" alt="Mercedes" /></div>
            <div className="client-logo"><img src="/assets/Mastercard.png" alt="Mastercard" /></div>
            <div className="client-logo"><img src="/assets/Loreal.png" alt="Loreal" /></div>
            <div className="client-logo"><img src="/assets/FOX.png" alt="FOX" /></div>
            <div className="client-logo"><img src="/assets/Sibur.png" alt="Sibur" /></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;