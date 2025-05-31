import { useState, useEffect, useMemo } from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { questions, QuestionData } from "./questions";
import shuffle from "./shuffle";
import getQueryParam from "./getQueryParam";

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
            <Link to="/setting" state={{ key: e.key }}>
              {e.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Setting = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const key = location.state.key;

  const [maxCount, setMaxCount] = useState("10");

  return (
    <div className="content-block">
      <h2>出題設定</h2>
      <label>
        出題数:
        <select
          value={maxCount}
          onChange={(e) => setMaxCount(e.target.value)}
          style={{ width: "3rem" }}
        >
          <option value={"5"}>5</option>
          <option value={"10"}>10</option>
          <option value={"20"}>20</option>
          <option value={"30"}>30</option>
          <option value={"50"}>50</option>
          <option value={"99999999"}>全て</option>
        </select>
      </label>
      <p className="spaced"></p>
      <button
        onClick={() => {
          navigate("/quiz", { state: { key, maxCount: parseInt(maxCount) } });
        }}
      >
        開始
      </button>
    </div>
  );
};

const Quiz: React.FC<{
  debug?: boolean;
}> = ({ debug = false }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const key = debug ? getQueryParam("key") : location.state.key;
  const maxCount = debug ? 1 : location.state.maxCount;
  const index = debug ? parseInt(getQueryParam("index") ?? "0") : 0;

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

  const data: QuestionData[] = useMemo(
    () =>
      key in questions
        ? debug
          ? [questions[key].data[index]]
          : shuffle(questions[key].data)
        : [],
    [debug, index, key]
  );
  const question: QuestionData = data[currentQuestionIndex];
  useEffect(() => {
    setQuestionType(question.type);
  }, [question]);

  const handleAnswer = () => {
    const correct = (() => {
      if (questionType === "single") {
        return question.answer === userAnswer;
      } else if (questionType === "multiple") {
        return (
          (question.answer as number[]).every((e) =>
            ((userAnswer as number[]) ?? []).includes(e)
          ) &&
          (userAnswer as number[]).every((e) =>
            (question.answer as number[]).includes(e)
          )
        );
      } else if (questionType === "text") {
        return (question.answer as string[]).includes(userAnswer as string);
      }
      return false;
    })();

    setIsCorrect(correct);
    setShowExplanation(true);
    if (correct) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setIncorrectCount((prev) => prev + 1);
    }
  };

  if (!data.length) {
    return <div className="content-block">問題が見つかりません。</div>;
  }

  return (
    <div className="content-block">
      <h2>
        {`問題 ${debug ? index + 1 : currentQuestionIndex + 1}`}
        {question.aiGenerated && (
          <span
            className="ai-generated-mark"
            title="生成AIによって作成された問題です"
          >
            生成AI
          </span>
        )}
      </h2>
      {typeof question.sentence === "string" ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {question.sentence}
        </ReactMarkdown>
      ) : (
        question.sentence
      )}
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
                  const prev = (userAnswer as number[]) ?? [];
                  const exists = prev.includes(value);
                  setUserAnswer(
                    exists ? prev.filter((v) => v !== value) : [...prev, value]
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
          {typeof question.explanation === "string" ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {question.explanation}
            </ReactMarkdown>
          ) : (
            question.explanation
          )}
        </div>
      )}
      {showExplanation && (
        <button
          onClick={() => {
            setCurrentQuestionIndex((prev) => prev + 1);
            if (currentQuestionIndex + 1 >= Math.min(data.length, maxCount)) {
              navigate("/result", { state: { correctCount, incorrectCount } });
            } else {
              setQuestionType(undefined);
              setShowExplanation(false);
              setUserAnswer(undefined);
            }
          }}
          disabled={debug}
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
        <span style={{ display: "inline-block", width: "5rem" }}>正解</span>
        <span>{correctCount}</span>
        <br />
        <span style={{ display: "inline-block", width: "5rem" }}>不正解</span>
        <span>{incorrectCount}</span>
        <br />
        <span style={{ display: "inline-block", width: "5rem" }}>正答率</span>
        <span>
          {correctCount + incorrectCount > 0
            ? `${Math.round(
                (100 * correctCount) / (correctCount + incorrectCount)
              )}%`
            : "0%"}
        </span>
      </p>
      <Link to="/">Topに戻る</Link>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter basename="/quiz-app">
      <nav>
        <Link to="/">Top</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz-debug" element={<Quiz debug={true} />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
