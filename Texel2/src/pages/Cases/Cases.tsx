import React from 'react';
import './Cases.css';

const CASES_DATA = [
  {
    id: 1,
    title: "AI-аналитика для ритейла",
    category: "Machine Learning",
    description: "Система прогнозирования спроса на базе DeepSeek, сократившая издержки на 15%.",
    image: "/assets/case1.jpg"
  },
  {
    id: 2,
    title: "Автоматизация поддержки",
    category: "NLP / Chatbots",
    description: "Интеграция ChatGPT для обработки 80% входящих тикетов без участия оператора.",
    image: "/assets/case2.jpg"
  },
  {
    id: 3,
    title: "Texel Internship Portal",
    category: "Web Development",
    description: "Разработка внутреннего портала для стажировок с автоматическим тестированием кандидатов.",
    image: "/assets/case3.jpg"
  }
];

const Cases: React.FC = () => {
  return (
    <div className="cases-page container">
      <h1 className="page-title">Наши кейсы</h1>
      <p className="page-description">
        Реальные проекты, реализованные нашими студентами и командой Texel в области ИИ.
      </p>

      <div className="cases-grid">
        {CASES_DATA.map((item) => (
          <div key={item.id} className="case-card">
            <div className="case-image-wrapper">
              <div className="case-placeholder">Проект #{item.id}</div>
              {/* <img src={item.image} alt={item.title} /> */}
            </div>
            <div className="case-content">
              <span className="case-category">{item.category}</span>
              <h3 className="case-title">{item.title}</h3>
              <p className="case-text">{item.description}</p>
              <button className="case-more-btn">Подробнее →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cases;