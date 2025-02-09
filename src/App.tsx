import { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { questions, QuestionData } from "./questions";

const Top = () => {
  const list: { [key: string]: string }[] = Object.entries(questions).map(
    ([key, value]) => ({
      key,
      name: value.name,
    })
  );

  return (
    <div className="content-block">
      <h2>コンテンツ一覧</h2>
      <ul>
        {list.map((e) => (
          <li>
            <Link to="/quiz" state={{ key: e.key }}>
              {e.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const key = location.state.key;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionType, setQuestionType] = useState<string | undefined>(
    undefined
  );
  const [userAnswer, setUserAnswer] = useState<
    number | number[] | string | undefined
  >(undefined);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const data: QuestionData[] = key in questions ? questions[key].data : [];
  const question: QuestionData = data[currentQuestionIndex];
  useEffect(() => {
    setQuestionType(question.type);
  }, [question]);

  const handleAnswer = () => {
    setShowExplanation(true);
    if (questionType === "single") {
      setIsCorrect(question.answer === userAnswer);
    } else if (questionType === "multiple") {
      setIsCorrect(
        (question.answer as number[]).every((e) =>
          ((userAnswer as number[]) ?? []).includes(e)
        ) &&
          (userAnswer as number[]).every((e) =>
            (question.answer as number[]).includes(e)
          )
      );
    } else if (questionType === "text") {
      setIsCorrect(
        (question.answer as string[]).includes(userAnswer as string)
      );
    }
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setIncorrectCount((prev) => prev + 1);
    }
  };

  return (
    <div className="content-block">
      <h2>{`問題 ${currentQuestionIndex + 1}`}</h2>
      {question.question}
      <h2>選択肢</h2>
      {questionType === "single" && (
        <div>
          {question.options?.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name="answer"
                value={index}
                onChange={() => setUserAnswer(index)}
                disabled={showExplanation}
              />
              {`${index + 1}. ${option}`}
              <br />
            </label>
          ))}
        </div>
      )}
      {questionType === "multiple" && (
        <div>
          {question.options?.map((option, index) => (
            <label key={index}>
              <input
                type="checkbox"
                value={index}
                onChange={() => {
                  const value = index;
                  setUserAnswer(
                    userAnswer ? [...(userAnswer as number[]), value] : [value]
                  );
                }}
                disabled={showExplanation}
              />
              {`${index + 1}. ${option}`}
            </label>
          ))}
        </div>
      )}
      {questionType === "text" && (
        <>
          <input
            type="text"
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={showExplanation}
          />
          <p className="spaced"></p>
        </>
      )}
      {!showExplanation && <button onClick={handleAnswer}>回答</button>}
      {showExplanation && (
        <div>
          <h2>{isCorrect ? "正解！" : "不正解"}</h2>
          <p>
            正答:{" "}
            {Array.isArray(question.answer)
              ? question.answer.length > 0 &&
                typeof question.answer[0] === "string"
                ? question.answer[0]
                : question.answer.map((e) => (e as number) + 1).join(", ")
              : question.answer + 1}
          </p>
          <h2>解説</h2>
          {question.explanation}
        </div>
      )}
      {showExplanation && (
        <button
          onClick={() => {
            setCurrentQuestionIndex((prev) => prev + 1);
            if (currentQuestionIndex + 1 >= data.length) {
              navigate("/result", { state: { correctCount, incorrectCount } });
            } else {
              setQuestionType(undefined);
              setShowExplanation(false);
              setUserAnswer(undefined);
            }
          }}
        >
          次へ
        </button>
      )}
    </div>
  );
};

const Result = () => {
  const location = useLocation();
  const { correctCount, incorrectCount } = location.state;

  return (
    <div className="content-block">
      <h2>結果</h2>
      <p>
        正解: {correctCount}
        <br />
        不正解: {incorrectCount} <br />
        正答率:{" "}
        {Math.round((100 * correctCount) / (correctCount + incorrectCount))}%
      </p>
      <Link to="/">Topに戻る</Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Top</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default App;
