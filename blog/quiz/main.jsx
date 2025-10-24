const { useState, useEffect } = React;

// Componente principal del Quiz
const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      id: 1,
      question: '¿Qué es el modelo de caja en CSS?',
      options: [
        'A) Un contenedor para elementos HTML',
        'B) La forma en que CSS calcula el tamaño de los elementos (content, padding, border, margin)',
        'C) Un método de posicionamiento',
      ],
      correct: 1,
      explanation:
        'El modelo de caja define cómo se calculan las dimensiones de los elementos.',
    },
    {
      id: 2,
      question: '¿Cuál es la diferencia entre Flexbox y CSS Grid?',
      options: [
        'A) No hay diferencia, son lo mismo',
        'B) Flexbox es unidimensional, Grid es bidimensional',
        'C) Grid es más antiguo que Flexbox',
      ],
      correct: 1,
      explanation:
        'Flexbox maneja layouts en una dimensión, Grid en dos dimensiones.',
    },
    {
      id: 3,
      question: '¿Qué es JSX en React?',
      options: [
        'A) Un lenguaje de programación',
        'B) Una sintaxis que combina HTML y JavaScript',
        'C) Un framework de CSS',
      ],
      correct: 1,
      explanation:
        'JSX permite escribir HTML dentro de JavaScript de forma declarativa.',
    },
  ];

  const handleAnswer = (answerIndex) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);

    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  if (showResults) {
    return (
      <ResultsCard
        score={score}
        total={questions.length}
        onRestart={restartQuiz}
      />
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>Quiz: Fundamentos Frontend</h1>
        <div className="progress">
          Pregunta {currentQuestion + 1} de {questions.length}
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <QuestionCard
        question={questions[currentQuestion]}
        onAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
        correctAnswer={questions[currentQuestion].correct}
        onNext={handleNext}
        isLastQuestion={currentQuestion === questions.length - 1}
      />
    </div>
  );
};

// Componente de pregunta individual
const QuestionCard = ({
  question,
  onAnswer,
  selectedAnswer,
  correctAnswer,
  onNext,
  isLastQuestion,
}) => {
  return (
    <div className="question-card">
      <div className="question-text">
        <h2>{question.question}</h2>
      </div>

      <div className="options">
        {question.options.map((option, index) => {
          let className = 'option';

          if (selectedAnswer !== null) {
            if (index === correctAnswer) {
              className += ' correct';
            } else if (index === selectedAnswer && index !== correctAnswer) {
              className += ' incorrect';
            }
          }

          return (
            <button
              key={index}
              className={className}
              onClick={() => onAnswer(index)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selectedAnswer !== null && (
        <div className="explanation">
          <p>{question.explanation}</p>
          <button className="next-button" onClick={onNext}>
            {isLastQuestion ? 'Ver Resultados' : 'Siguiente Pregunta'}
          </button>
        </div>
      )}
    </div>
  );
};

// Componente de resultados
const ResultsCard = ({ score, total, onRestart }) => {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="results-card">
      <h2>¡Quiz Completado!</h2>
      <div className="score-display">
        <div className="score-circle">
          <span className="score-number">{score}</span>
          <span className="score-total">/{total}</span>
        </div>
        <div className="percentage">{percentage}%</div>
      </div>

      <div className="score-message">
        {percentage >= 80
          ? '¡Excelente trabajo! 🎉'
          : percentage >= 60
          ? '¡Buen trabajo! 👍'
          : '¡Sigue practicando! 💪'}
      </div>

      <div className="results-actions">
        <button onClick={onRestart} className="restart-btn">
          🔄 Intentar de nuevo
        </button>
        <a href="../blog.html" className="back-btn">
          ← Volver al Blog
        </a>
      </div>
    </div>
  );
};

// Renderizar la app
ReactDOM.createRoot(document.getElementById('quiz-root')).render(<QuizApp />);
