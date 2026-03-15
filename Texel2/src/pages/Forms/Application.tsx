import React from 'react';
import './Forms.css';

const Application: React.FC = () => {
  return (
    <div className="form-page">
      <div className="form-container">
        <h2>Подать заявку на программу</h2>
        <p>Заполните форму, и наши менторы свяжутся с вами в течение 24 часов.</p>
        <form className="auth-form">
          <input type="text" placeholder="Ваше имя" required />
          <input type="tel" placeholder="Номер телефона" required />
          <select required>
            <option value="">Выберите направление</option>
            <option value="internship">Стажировка</option>
            <option value="incubator">Инкубатор стартапов</option>
            <option value="courses">Курсы ИИ</option>
          </select>
          <textarea placeholder="Расскажите немного о вашем опыте или проекте"></textarea>
          <button type="submit" className="btn-primary-large">Отправить заявку</button>
        </form>
      </div>
    </div>
  );
};

export default Application;