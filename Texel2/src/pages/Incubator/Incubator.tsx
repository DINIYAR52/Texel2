import React from 'react';
import { Link } from 'react-router-dom'; // Добавили Link для навигации
import { Lightbulb, Rocket, Zap, Shield, ChevronRight } from 'lucide-react';
import './Incubator.css';

const Incubator: React.FC = () => {
  return (
    <div className="incubator-page">
      <div className="container">
        <h1 className="page-title">Инкубатор ИИ-стартапов</h1>

        {/* Hero Section */}
        <section className="incubator-hero">
          <div className="incubator-hero__content">
            {/* Текст теперь ВЫШЕ картинки */}
            <h2>Запустите свой ИИ-стартап с поддержкой Texel</h2>
            <p>От идеи до работающего бизнеса: ресурсы, экспертиза и инвестиции для вашего проекта</p>
            
            <div className="incubator-hero__image-wrapper">
              <img 
                src="/assets/Incubator.png" 
                alt="Инкубатор" 
                className="incubator-hero__img" 
              />
            </div>

            <div className="incubator-hero__actions">
              {/* Используем Link вместо button для переходов */}
              <Link to="/apply" className="btn-primary-large">Подать заявку</Link>
              <Link to="/cases" className="btn-secondary-large">Смотреть кейсы</Link>
              {/* Новая кнопка "Пройти тест" */}
              <Link to="/tests" className="btn-secondary-large">Пройти тест</Link>
            </div>
          </div>
        </section>

        {/* Workflow Summary */}
        <section className="workflow-summary">
          <div className="workflow-line">
            <span className="workflow-item"> Идея</span>
            <span className="workflow-arrow">→</span>
            <span className="workflow-item"> Прототип</span>
            <span className="workflow-arrow">→</span>
            <span className="workflow-item"> Продукт</span>
            <span className="workflow-arrow">→</span>
            <span className="workflow-item"> Бизнес</span>
          </div>
        </section>

        {/* Этапы инкубации (Овалы) */}
        <section className="incubation-stages">
          <h2 className="section-title">Этапы инкубации</h2>
          <p className="section-subtitle">Путь вашего стартапа в инкубаторе</p>
          <div className="stages-grid">
            <div className="stage-oval stage-oval--dark">
              <h4>ОТБОР И ЗАПУСК (2 недели)</h4>
              <ul>
                <li>Подача заявки и собеседование</li>
                <li>Формирование дорожной карты</li>
                <li>Назначение персонального ментора</li>
                <li>Доступ к ресурсам Texel</li>
              </ul>
            </div>
            <div className="stage-oval stage-oval--blue">
              <h4>ИНТЕНСИВНАЯ РАЗРАБОТКА (8 недель)</h4>
              <ul>
                <li>Еженедельные мастер-классы</li>
                <li>Доступ к ChatGPT API и DeepSeek</li>
                <li>Техническая поддержка команды</li>
                <li>Работа над MVP</li>
              </ul>
            </div>
            <div className="stage-oval stage-oval--light">
              <h4>ТЕСТИРОВАНИЕ И ПИЛОТ (4 недели)</h4>
              <ul>
                <li>Получение обратной связи от пользователей</li>
                <li>Настройка воронки продаж</li>
                <li>Подготовка к первым инвестициям</li>
                <li>Первые платные пользователи</li>
              </ul>
            </div>
            <div className="stage-oval stage-oval--deep">
              <h4>ЗАПУСК И МАСШТАБИРОВАНИЕ (по окончании программы)</h4>
              <ul>
                <li>Презентация на Demo Day Texel</li>
                <li>Помощь в привлечении раунда А</li>
                <li>Доступ к базе инвесторов</li>
                <li>Партнерские условия на использование ИИ</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Что мы предоставляем */}
        <section className="benefits-grid-section">
          <h2 className="section-title">Что мы предоставляем</h2>
          <div className="benefits-grid">
            <div className="benefit-box">
              <span className="benefit-number">1. Экспертное менторство</span>
              <p>Прямой доступ к ведущим разработчикам Texel, консультации по архитектуре и продуктовым решениям.</p>
            </div>
            <div className="benefit-box">
              <span className="benefit-number">2. Технологические ресурсы</span>
              <p>Бесплатный доступ к API ведущих ИИ-моделей, вычислительные мощности и облачная инфраструктура.</p>
            </div>
            <div className="benefit-box">
              <span className="benefit-number">3. Инфраструктура</span>
              <p>Рабочие места в коворкинге Texel, доступ к лаборатории 3D-сканирования и переговорным комнатам.</p>
            </div>
            <div className="benefit-box">
              <span className="benefit-number">4. Финансовая поддержка</span>
              <p>Гранты на развитие MVP, помощь в оформлении заявок на венчурное финансирование.</p>
            </div>
          </div>
        </section>

        {/* Эксперты */}
        <section className="experts-section">
          <h2 className="section-title">Наши эксперты</h2>
          <div className="experts-main-image">
            <img src="/assets/Expert.png" alt="Наши эксперты" />
          </div>
          <div className="experts-grid">
            <div className="expert-card">
              <div className="expert-name">Андрей Погонин</div>
              <div className="expert-role">CTO</div>
              <div className="expert-info">Эксперт в области машинного зрения и нейронных сетей с опытом 10+ лет.</div>
            </div>
            <div className="expert-card expert-card--blue">
              <div className="expert-name">Сергей Климентьев</div>
              <div className="expert-role">CEO</div>
              <div className="expert-info">Предприниматель, специалист по развитию бизнеса и стратегии масштабирования.</div>
            </div>
            <div className="expert-card">
              <div className="expert-name">Максим Федюков</div>
              <div className="expert-role">CLO</div>
              <div className="expert-info">Юрист в сфере технологий, специалист по защите интеллектуальной собственности.</div>
            </div>
          </div>
        </section>

        {/* Процесс отбора */}
        <section className="selection-steps">
          <h2 className="section-title">Процесс отбора</h2>
          <div className="steps-list">
            <div className="step">1. Подача заявки</div>
            <div className="step">2. 2-часовой воркшоп с нашими экспертами</div>
            <div className="step">3. Презентация проекта руководству Texel</div>
            <div className="step">4. Подписание документов и старт программы</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Incubator;