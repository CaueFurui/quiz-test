import Quiz from "./components/quiz";
import questions from "./questions"

export function App() {
  return (
    <>
      <h2>App Questions</h2>
      <Quiz questions={questions}/>
    </>
  );
}
