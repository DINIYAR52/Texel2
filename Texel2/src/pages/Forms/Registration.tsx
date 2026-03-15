import React from 'react';
import './Forms.css';

const Registration: React.FC = () => {
  return (
    <div className="form-page">
      <div className="form-container">
        <h2>Регистрация в системе Texel</h2>
        <form className="auth-form">
          <input type="text" placeholder="Имя и фамилия" required />
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Пароль" required />
          <input type="password" placeholder="Подтвердите пароль" required />
          <button type="submit" className="btn-primary-large">Создать аккаунт</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;