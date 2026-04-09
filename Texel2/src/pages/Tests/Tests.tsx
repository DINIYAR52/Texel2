import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import './Tests.css';

const QUESTIONS = [
  {
    id: 1,
    text: "На каком этапе сейчас находится ваш проект?",
    options: [
      { text: "А) Только идея или концепция", points: 1 },
      { text: "Б) Есть прототип или MVP", points: 2 },
      { text: "В) Работающий продукт с первыми платными пользователями", points: 3 },
      { text: "Г) Готовый бизнес, ищущий масштабирования", points: 4 }
    ]
  },
  {
    id: 2,
    text: "Как вы планируете получать обратную связь от пользователей?",
    options: [
      { text: "А) Пока не думали об этом", points: 1 },
      { text: "Б) Провели пару интервью с друзьями", points: 2 },
      { text: "В) Настроили воронку продаж и собираем метрики", points: 3 },
      { text: "Г) У нас есть система NPS и регулярные опросы", points: 4 }
    ]
  },
  {
    id: 3,
    text: "Какой у вас опыт использования API ИИ-моделей (ChatGPT, DeepSeek и т.д.)?",
    options: [
      { text: "А) Слышали, но не использовали", points: 1 },
      { text: "Б) Тестировали, но не в продукте", points: 2 },
      { text: "В) Интегрировали API в MVP или прототип", points: 3 },
      { text: "Г) У нас есть своя тонкая настройка моделей и кэширование запросов", points: 4 }
    ]
  },
  {
    id: 4,
    text: "Насколько важна для вас экспертная поддержка (менторство) от разработчиков Texel?",
    options: [
      { text: "А) Пока не уверены", points: 1 },
      { text: "Б) Интересно, но не критично", points: 2 },
      { text: "В) Очень нужны консультации по архитектуре и продуктовым решениям", points: 3 },
      { text: "Г) Готовы работать с ментором ежедневно", points: 4 }
    ]
  },
  {
    id: 5,
    text: "Как обстоят дела с вашей командой?",
    options: [
      { text: "А) Я один (solopreneur)", points: 1 },
      { text: "Б) Есть 1-2 человека на энтузиазме", points: 2 },
      { text: "В) Собрана основная команда (технарь + продажник)", points: 3 },
      { text: "Г) Полноценная команда с распределением ролей (CEO, CTO и т.д.)", points: 4 }
    ]
  },
  {
    id: 6,
    text: "Как вы планируете защищать интеллектуальную собственность вашего ИИ-продукта?",
    options: [
      { text: "А) Никак, это open-source", points: 1 },
      { text: "Б) Зарегистрируем бренд", points: 2 },
      { text: "В) Планируем патентовать алгоритмы или оформить ноу-хау", points: 3 },
      { text: "Г) Уже работаем с юристом по технологиям", points: 4 }
    ]
  },
  {
    id: 7,
    text: "Что вы ожидаете от инкубационной программы?",
    options: [
      { text: "А) Только рабочие места и коворкинг", points: 1 },
      { text: "Б) Доступ к API и вычислительным мощностям", points: 2 },
      { text: "В) Гранты и помощь в поиске инвестиций", points: 3 },
      { text: "Г) Всё вместе: менторство, ресурсы, инфраструктуру и Demo Day", points: 4 }
    ]
  }
];

const Tests: React.FC = () => {
  const [step, setStep] = useState<'start' | 'quiz' | 'result'>('start');
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [totalPoints, setTotalPoints] = useState(0);

  const handleNext = () => {
    if (selected !== null) {
      const pointsToAdd = QUESTIONS[currentQ].options[selected].points;
      setTotalPoints(prev => prev + pointsToAdd);

      if (currentQ < QUESTIONS.length - 1) {
        setCurrentQ(currentQ + 1);
        setSelected(null);
      } else {
        setStep('result');
      }
    }
  };

  const getResultData = () => {
    if (totalPoints >= 28) {
      return {
        title: "Отлично!",
        text: "Ваш проект находится на высокой стартовой позиции. У вас уже есть прототип, команда и понимание рынка. Вы — именно тот тип основателей, который мы ищем для интенсивной фазы разработки и масштабирования. Вы готовы к Demo Day и привлечению раунда A."
      };
    } else if (totalPoints >= 20) {
      return {
        title: "Неплохо!",
        text: "У вас есть база, но некоторые моменты требуют доработки. Не переживайте, для этого и нужен инкубатор. Мы поможем вам настроить воронку, получить первые платные пользователей и разобраться с юридическими вопросами. У вас отличный потенциал!"
      };
    } else {
      return {
        title: "Это только начало.",
        text: "Многие великие идеи начинали с нуля. Сейчас ваша главная задача — сделать первый прототип и найти единомышленников. Texel предоставит вам ментора, API и рабочее пространство, чтобы вы могли сфокусироваться на главном. Мы поддержим вас на этом пути."
      };
    }
  };

  const result = getResultData();

  return (
    <div className="tests-page container">
      {step === 'start' && (
        <div className="test-intro">
          <h1 className="page-title">Проверьте готовность вашего стартапа к инкубации</h1>
          <p className="page-description">
            Ответьте на 7 вопросов и получите персональные рекомендации о том, с чего начать путь от идеи до масштабирования. 
            Проверьте понимание ценностей, этапов и условий инкубатора.
          </p>
          <div className="test-actions">
            <button className="btn-primary-large" onClick={() => setStep('quiz')}>
              Пройти тест
            </button>
          </div>
        </div>
      )}

      {step === 'quiz' && (
        <div className="test-quiz-box">
          <p className="quiz-steps">Вопрос {currentQ + 1} из {QUESTIONS.length}</p>
          <h2 className="quiz-question">{QUESTIONS[currentQ].text}</h2>
          <div className="quiz-options">
            {QUESTIONS[currentQ].options.map((opt, i) => (
              <div 
                key={i} 
                className={`quiz-option ${selected === i ? 'active' : ''}`}
                onClick={() => setSelected(i)}
              >
                <div className="quiz-circle">
                  {selected === i && <CheckCircle2 className="quiz-check-icon" size={20} />}
                </div>
                <span>{opt.text}</span>
              </div>
            ))}
          </div>
          <div className="test-actions">
            <button 
              className="btn-primary-large" 
              disabled={selected === null} 
              onClick={handleNext}
            >
              Отправить ответ
            </button>
          </div>
        </div>
      )}

      {step === 'result' && (
        <div className="test-result">
          <h1 className="page-title">Ваш результат:</h1>
          <h2 className="result-status-title">{result.title}</h2>
          <p className="result-text">{result.text}</p>
          
          <div className="result-next-steps">
            <h3>Что делать дальше:</h3>
            <ul>
              <li><strong>Шаг 1.</strong> Подайте заявку на воркшоп с экспертами Texel.</li>
              <li><strong>Шаг 2.</strong> Дождитесь ответа от куратора программы (обычно в течение 3 дней).</li>
              <li><strong>Шаг 3.</strong> Пройдите собеседование и 2-часовую презентацию проекта руководству.</li>
            </ul>
          </div>

          <div className="test-result__actions">
            <Link to="/apply" className="btn-primary-large">
              Подать заявку
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tests;