import React, { useState } from 'react';
import { Plus, MessageSquare, Send, Paperclip, Image as ImageIcon, Search } from 'lucide-react';
import './Chatbot.css';

const Chatbot: React.FC = () => {
  const [message, setMessage] = useState('');

  const history = [
    { id: 1, title: 'Оптимизация кода Python', date: 'Сегодня', active: true },
    { id: 2, title: 'Генерация API документации', date: 'Сегодня', active: false },
    { id: 3, title: 'Анализ бизнес-метрик', date: 'Сегодня', active: false },
    { id: 4, title: 'Помощь с промптами', date: 'Вчера', active: false },
    { id: 5, title: 'Идея стартапа', date: 'Вчера', active: false },
  ];

  return (
    <div className="chatbot-page">
      {/* Боковая панель */}
      <aside className="chat-sidebar">
        <button className="new-chat-btn">
          <Plus size={20} /> Новый проект
        </button>

        <div className="chat-history">
          <h3>Мои проекты</h3>
          
          <div className="history-section">
            <span className="section-label">Сегодня</span>
            {history.filter(item => item.date === 'Сегодня').map(item => (
              <div key={item.id} className={`history-item ${item.active ? 'active' : ''}`}>
                <MessageSquare size={16} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>

          <div className="history-section">
            <span className="section-label">Вчера</span>
            {history.filter(item => item.date === 'Вчера').map(item => (
              <div key={item.id} className="history-item">
                <MessageSquare size={16} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Основное окно чата */}
      <main className="chat-main">
        <header className="chat-header">
          <h2>Оптимизация кода Python</h2>
        </header>

        <div className="chat-messages">
          {/* Сообщение пользователя */}
          <div className="message user-message">
            <div className="message-bubble">
              Напиши функцию на Python для обработки JSON данных
            </div>
          </div>

          {/* Ответ бота */}
          <div className="message ai-message">
            <div className="message-bubble code-bubble">
<pre><code>{`python
import json
from typing import Dict, Any

def process_json_data(file_path: str) -> Dict[Any, Any]:
    """
    Функция для обработки JSON данных из файла
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
            return data
    except FileNotFoundError:
        print(f"Файл {file_path} не найден")
        return {}
    except json.JSONDecodeError:
        print("Ошибка декодирования JSON")
        return {}

# Пример использования
if __name__ == "__main__":
    result = process_json_data("data.json")
    print(result)`}</code></pre>
            </div>
          </div>
        </div>

        {/* Поле ввода */}
        <div className="chat-input-container">
          <div className="input-wrapper">
            <input 
              type="text" 
              placeholder="Введите сообщение" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="input-actions">
              <button className="icon-btn"><ImageIcon size={20} /></button>
              <button className="icon-btn"><Paperclip size={20} /></button>
              <button className="send-btn"><Send size={20} /></button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chatbot;