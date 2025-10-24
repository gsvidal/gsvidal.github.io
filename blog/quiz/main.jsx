const { useState, useEffect } = React;

// Componente principal del Quiz
const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const allQuestions = [
    {
      id: 1,
      question: '¿Qué es el modelo de caja en CSS?',
      options: [
        'La forma en que CSS calcula solo el contenido y padding',
        'La forma en que CSS calcula el tamaño de los elementos (content, padding, border, margin)',
        'La forma en que CSS calcula solo el contenido y margin',
        'La forma en que CSS calcula el contenido, padding y border (sin margin)',
        'La forma en que CSS calcula solo el padding y border',
      ],
      correct: 1,
      explanation:
        'El modelo de caja define cómo se calculan las dimensiones de los elementos.',
    },
    {
      id: 2,
      question: '¿Cuál es la diferencia entre Flexbox y CSS Grid?',
      options: [
        'Flexbox es bidimensional, Grid es unidimensional',
        'Flexbox es unidimensional, Grid es bidimensional',
        'Flexbox maneja layouts en dos dimensiones, Grid en una',
        'Flexbox es más moderno que Grid',
        'Grid es más simple que Flexbox',
      ],
      correct: 1,
      explanation:
        'Flexbox maneja layouts en una dimensión, Grid en dos dimensiones.',
    },
    {
      id: 3,
      question: '¿Qué es JSX en React?',
      options: [
        'Una sintaxis que combina HTML y CSS',
        'Una sintaxis que combina HTML y JavaScript',
        'Una sintaxis que combina JavaScript y CSS',
        'Una sintaxis que combina HTML, CSS y JavaScript',
        'Una sintaxis que combina solo JavaScript puro',
      ],
      correct: 1,
      explanation:
        'JSX permite escribir HTML dentro de JavaScript de forma declarativa.',
    },
    {
      id: 4,
      question: '¿Qué es el Event Loop en JavaScript?',
      options: [
        'Un mecanismo que maneja solo la ejecución síncrona',
        'El mecanismo que maneja la ejecución asíncrona y la cola de tareas',
        'Un mecanismo que maneja solo la ejecución asíncrona',
        'Un mecanismo que maneja la ejecución asíncrona y luego la síncrona',
        'Un mecanismo que maneja solo la cola de tareas',
      ],
      correct: 1,
      explanation:
        'El Event Loop es el corazón del asincronismo en JavaScript, manejando callbacks, promises y la cola de tareas.',
    },
    {
      id: 5,
      question: '¿Cuál es la diferencia entre `let` y `var` en JavaScript?',
      options: [
        '`let` tiene scope de función, `var` tiene scope de bloque',
        '`let` tiene scope de bloque, `var` tiene scope de función',
        '`let` y `var` tienen el mismo scope de función',
        '`let` y `var` tienen el mismo scope de bloque',
        '`let` tiene scope global, `var` tiene scope de función',
      ],
      correct: 1,
      explanation:
        '`let` respeta el scope de bloque, mientras que `var` se eleva (hoisting) y tiene scope de función.',
    },
    {
      id: 6,
      question: '¿Qué es la metodología BEM en CSS?',
      options: [
        'Una convención de nomenclatura: Block_Element-Modifier',
        'Una convención de nomenclatura: Block__Element--Modifier',
        'Una convención de nomenclatura: Block-Element_Modifier',
        'Una convención de nomenclatura: Block__Element-Modifier',
        'Una convención de nomenclatura: Block_Element--Modifier',
      ],
      correct: 1,
      explanation:
        'BEM (Block Element Modifier) es una metodología de nomenclatura que hace el CSS más mantenible y escalable.',
    },
    {
      id: 7,
      question: '¿Qué es el DOM en JavaScript?',
      options: [
        'La representación en memoria de solo la estructura CSS del documento',
        'La representación en memoria de la estructura HTML del documento',
        'La representación en memoria de solo la estructura JavaScript del documento',
        'La representación en memoria de la estructura HTML y CSS del documento',
        'La representación en memoria de solo los elementos HTML sin estructura',
      ],
      correct: 1,
      explanation:
        'El DOM (Document Object Model) es la representación en memoria de la estructura HTML que permite manipular elementos.',
    },
    {
      id: 8,
      question: '¿Cuál es la diferencia entre `==` y `===` en JavaScript?',
      options: [
        '`==` compara valor y tipo, `===` solo valor (con coerción)',
        '`===` compara valor y tipo, `==` solo valor (con coerción)',
        '`==` y `===` comparan valor y tipo de la misma forma',
        '`===` solo valor (con coerción), `==` valor y tipo',
        '`==` es más estricto que `===`',
      ],
      correct: 1,
      explanation:
        '`===` es comparación estricta (valor y tipo), mientras que `==` hace coerción de tipos antes de comparar.',
    },
    {
      id: 9,
      question: '¿Qué es un closure en JavaScript?',
      options: [
        'Una función que tiene acceso solo a variables de su scope interno',
        'Una función que tiene acceso a variables de su scope externo',
        'Una función que tiene acceso a variables globales únicamente',
        'Una función que no tiene acceso a variables externas',
        'Una función que solo puede acceder a variables locales',
      ],
      correct: 1,
      explanation:
        'Un closure es una función que "recuerda" el scope en el que fue creada, manteniendo acceso a variables externas.',
    },
    {
      id: 10,
      question: '¿Qué es la especificidad en CSS?',
      options: [
        'El sistema que determina qué regla CSS se aplica solo por orden de declaración',
        'El sistema que determina qué regla CSS se aplica cuando hay conflictos',
        'El sistema que determina qué regla CSS se aplica solo por cantidad de propiedades',
        'El sistema que determina qué regla CSS se aplica solo por velocidad de carga',
        'El sistema que determina qué regla CSS se aplica solo por complejidad de selectores',
      ],
      correct: 1,
      explanation:
        'La especificidad determina qué regla CSS tiene prioridad cuando múltiples reglas se aplican al mismo elemento.',
    },
  ];

  // Función para mezclar las opciones de una pregunta
  const shuffleOptions = (question) => {
    const options = [...question.options];
    const correctAnswer = options[question.correct];

    // Mezclar las opciones
    const shuffledOptions = options.sort(() => 0.5 - Math.random());

    // Encontrar la nueva posición de la respuesta correcta
    const newCorrectIndex = shuffledOptions.findIndex(
      (option) => option === correctAnswer
    );

    return {
      ...question,
      options: shuffledOptions,
      correct: newCorrectIndex,
    };
  };

  // Seleccionar 5 preguntas aleatorias y mezclar sus opciones
  const getRandomQuestions = () => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5).map(shuffleOptions);
  };

  const [questions, setQuestions] = useState(getRandomQuestions());

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
    setQuestions(getRandomQuestions());
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
              {String.fromCharCode(65 + index)}) {option}
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
