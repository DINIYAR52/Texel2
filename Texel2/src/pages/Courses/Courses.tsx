import React from 'react';
import { CheckCircle, ShieldCheck, Zap, Star, Trophy, Users } from 'lucide-react';
import './Courses.css';

const Courses: React.FC = () => {
  return (
    <div className="courses-page">
      <div className="container">
        <h1 className="page-title">Курсы</h1>

        {/* Hero Section */}
        <section className="courses-hero">
          <div className="courses-hero__content">
            <h2>Суперспособности с ChatGPT и DeepSeek</h2>
            <p>Станьте продвинутым пользователем ИИ, который решает задачи в 10 раз быстрее коллег и конкурентов.</p>
            <div className="courses-hero__image-wrapper">
              <img 
                src="/assets/Courses.png" 
                alt="ChatGPT vs DeepSeek" 
                className="courses-hero__img" 
              />
            </div>
            <button className="btn-primary-large">Записаться на курс</button>
          </div>
        </section>

        {/* Результат после курса */}
        <section className="course-results">
          <p className="results-line">
            ⚡️ автоматизация рутины | 🧠 решение сложных задач | 🚀 карьерный рост
          </p>
        </section>

        {/* Для кого этот курс (Овалы) */}
        <section className="for-whom-courses">
          <h3 className="section-subtitle-centered">Для кого этот курс</h3>
          <div className="target-ovals">
            <div className="target-oval dark-blue-oval">БИЗНЕС-СПЕЦИАЛИСТЫ</div>
            <div className="target-oval blue-oval">IT-СПЕЦИАЛИСТЫ</div>
            <div className="target-oval light-blue-oval">СТУДЕНТЫ И НОВИЧКИ</div>
          </div>
        </section>

        {/* Чему вы научитесь */}
        <section className="learning-outcomes">
          <h2 className="section-title">Чему вы научитесь</h2>
          <div className="outcomes-grid">
            {[
              "Продвинутый промптинг и цепочки размышлений",
              "Работа с API и создание AI-ассистентов",
              "Fine-tuning под специфические задачи",
              "Интеграция в бизнес-процессы",
              "Автоматизация контента и коммуникаций",
              "Глубокое понимание архитектуры моделей",
              "Оптимизация запросов для сложных задач",
              "Работа с кодом и техническими проектами",
              "Создание персонализированных решений",
              "Сравнительный анализ с другими моделями"
            ].map((text, index) => (
              <div key={index} className="outcome-item">
                <CheckCircle className="check-icon-green" size={20} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Программа курса (Модули) */}
        <section className="course-program">
          <h2 className="section-title">Программа курса</h2>
          <div className="modules-list">
            <div className="module-card">
              <h4>МОДУЛЬ 1: 🌐 ОСНОВЫ СОВРЕМЕННЫХ AI-МОДЕЛЕЙ (1 неделя)</h4>
              <p>• Архитектура GPT и трансформеров | • DeepSeek: особенности и преимущества | • Сравнение платных и бесплатных моделей | • Безопасность и этика использования</p>
            </div>
            <div className="module-card">
              <h4>МОДУЛЬ 2: 🔥 ПРОДВИНУТЫЙ ПРОМПТИНГ (2 недели)</h4>
              <p>• Chain-of-Thought prompting | • Few-shot и Zero-shot learning | • Структурирование сложных запросов | • Шаблоны для разных типов задач</p>
            </div>
            <div className="module-card">
              <h4>МОДУЛЬ 3: 🛠 API И ИНТЕГРАЦИИ (2 недели)</h4>
              <p>• Работа с OpenAI API и DeepSeek API | • Создание AI-ассистентов | • Интеграция через сторонние сервисы | • Обработка потоковых данных</p>
            </div>
            <div className="module-card">
              <h4>МОДУЛЬ 4: 💼 БИЗНЕС-ПРИМЕНЕНИЕ (2 недели)</h4>
              <p>• Автоматизация бизнес-процессов | • Анализ данных и генерация отчетов | • Создание маркетингового контента | • Оптимизация customer support</p>
            </div>
            <div className="module-card">
              <h4>МОДУЛЬ 5: 🚀 РЕАЛЬНЫЕ ПРОЕКТЫ (3 недели)</h4>
              <p>• Разработка собственного AI-ассистента | • Автоматизация workflow | • Создание MVP ИИ-продукта | • Презентация результатов</p>
            </div>
            <div className="module-card">
              <h4>МОДУЛЬ 6: 🏁 КАРЬЕРНЫЙ РОСТ (1 неделя)</h4>
              <p>• Создание AI-портфолио | • Подготовка к собеседованиям | • Стратегия развития в ИИ-сфере | • Сообщество выпускников</p>
            </div>
          </div>
        </section>

        {/* Стоимость и оплата (Круги) */}
        <section className="pricing">
          <h2 className="section-title">Стоимость и оплата</h2>
          <div className="pricing-grid">
            <div className="price-circle">
              <div className="price-content">
                <h5>БАЗОВЫЙ: 25 000 руб.</h5>
                <ul>
                  <li>• Все материалы курса</li>
                  <li>• Доступ в общий чат</li>
                  <li>• Тесты для самопроверки</li>
                  <li>• Сертификат об участии</li>
                </ul>
              </div>
            </div>
            <div className="price-circle featured">
              <div className="price-content">
                <h5>ПРОФИ: 45 000 руб.</h5>
                <ul>
                  <li>• Все из "Базового"</li>
                  <li>• Проверка ДЗ ментором</li>
                  <li>• Личные консультации</li>
                  <li>• Доступ к закрытым воркшопам</li>
                </ul>
              </div>
            </div>
            <div className="price-circle">
              <div className="price-content">
                <h5>ПРЕМИУМ: 75 000 руб.</h5>
                <ul>
                  <li>• Все из "Профи"</li>
                  <li>• Трудоустройство в Texel</li>
                  <li>• Участие в реальном проекте</li>
                  <li>• Помощь в запуске стартапа</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;