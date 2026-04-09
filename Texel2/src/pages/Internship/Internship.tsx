import React from 'react';
// ✅ Добавили Link для навигации
import { Link } from 'react-router-dom'; 
import { CheckCircle2, Calendar, Users, Briefcase, GraduationCap } from 'lucide-react';
import './Internship.css';

const Internship: React.FC = () => {
  return (
    <div className="internship-page">
      <div className="container">
        <h1 className="page-title">Программа стажировки</h1>

        {/* Hero Section */}
        <section className="internship-hero">
          <div className="internship-hero__content">
            <h2>Стажировка в Texel: Практика на переднем крае ИИ</h2>
            <p>Получите опыт работы с ChatGPT и DeepSeek в реальных проектах нашей компании.</p>
            <div className="internship-hero__image-wrapper">
              <img 
                src="/assets/Internship.png" 
                alt="Стажеры Texel" 
                className="internship-hero__img" 
              />
            </div>
            {/* ✅ ЗАМЕНИЛИ <button> НА <Link> И ДОБАВИЛИ АКТИВНЫЙ СТИЛЬ */}
            <Link to="/apply" className="btn-primary-large internship-btn">
              Подать заявку
            </Link>
          </div>
        </section>

        {/* --- ВЕСЬ ОСТАЛЬНОЙ КОД БЕЗ ИЗМЕНЕНИЙ --- */}
        {/* Для кого эта стажировка */}
        <section className="for-whom">
          <h2 className="section-title">Для кого эта стажировка</h2>
          <p className="section-subtitle">Эта программа для вас, если вы:</p>
          <ul className="requirements-list">
            <li><CheckCircle2 className="check-icon" size={20} /> Студент старших курсов технических специальностей</li>
            <li><CheckCircle2 className="check-icon" size={20} /> Начинающий разработчик с базой Python</li>
            <li><CheckCircle2 className="check-icon" size={20} /> Хотите специализироваться на ИИ и ML</li>
            <li><CheckCircle2 className="check-icon" size={20} /> Ищете практический опыт для резюме</li>
            <li><CheckCircle2 className="check-icon" size={20} /> Интересуетесь NLP и генеративными моделями</li>
            <li><CheckCircle2 className="check-icon" size={20} /> Хотите работать с современными AI-инструментами</li>
            <li><CheckCircle2 className="check-icon" size={20} /> Готовы уделять 20+ часов в неделю</li>
            <li><CheckCircle2 className="check-icon" size={20} /> Мечтаете о карьере в ведущей IT-компании</li>
          </ul>
        </section>

        {/* Структура программы */}
        <section className="program-structure">
          <h2 className="section-title">Структура программы</h2>
          <div className="structure-grid">
            <div className="structure-item">
              <h4> БАЗОВАЯ ПОДГОТОВКА (2 недели)</h4>
              <ul>
                <li>Основы ChatGPT: промптинг, API, best practices</li>
                <li>Знакомство с DeepSeek: архитектура, возможности</li>
                <li>Python для AI-разработки</li>
                <li>Инструментарий и инфраструктура Texel</li>
              </ul>
            </div>
            <div className="structure-item">
              <h4> РЕАЛЬНЫЕ ПРОЕКТЫ (8 недель)</h4>
              <ul>
                <li>Работа в команде над задачами Texel</li>
                <li>Интеграция ИИ-модулей в продукты</li>
                <li>Code review от senior-разработчиков</li>
                <li>Еженедельные демо-сессии</li>
              </ul>
            </div>
            <div className="structure-item">
              <h4> МЕНТОРСТВО (весь период)</h4>
              <ul>
                <li>Персональный ментор из команды Texel</li>
                <li>Регулярные 1:1 сессии</li>
                <li>Карьерные консультации</li>
                <li>Помощь в решении сложных задач</li>
              </ul>
            </div>
            <div className="structure-item">
              <h4> ФИНАЛЬНЫЙ ПРОЕКТ (2 недели)</h4>
              <ul>
                <li>Разработка собственного AI-проекта</li>
                <li>Презентация результата руководству</li>
                <li>Получение рекомендаций для резюме</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Расписание и длительность */}
        <section className="schedule">
          <h2 className="section-title">Расписание и длительность</h2>
          <div className="schedule-cards">
            <div className="info-card">
              <Calendar className="info-icon" />
              <h5>ФОРМАТ</h5>
              <p>• Длительность: 3 месяца</p>
              <p>• Формат: оффлайн + онлайн</p>
              <p>• Нагрузка: 20-30 часов в неделю</p>
              <p>• Начало: каждые 2 месяца</p>
            </div>
            <div className="info-card">
              <Users className="info-icon" />
              <h5>ГРУППА</h5>
              <p>• Размер группы: 10-15 человек</p>
              <p>• Командная работа: 2-3 человека в команде</p>
              <p>• Менторов на группу: 3-4 эксперта</p>
            </div>
            <div className="info-card">
              <Briefcase className="info-icon" />
              <h5>РЕЗУЛЬТАТ</h5>
              <p>• Сертификат о завершении</p>
              <p>• Рекомендательное письмо</p>
              <p>• Портфолио реальных проектов</p>
              <p>• Приоритет при трудоустройстве</p>
            </div>
          </div>
        </section>

        {/* Процесс отбора */}
        <section className="selection-process">
          <h2 className="selection-title">Процесс отбора</h2>
          <ol className="process-list">
            <li>1. Подача заявки</li>
            <li>2. Тестовое задание</li>
            <li>3. Техническое собеседование</li>
            <li>4. Введение в процессы, знакомство с командой</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Internship;