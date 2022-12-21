import { useEffect, useState } from "react";
import { shuffleArray } from "../utils/shuffelArray";

interface QuestionsInterface {
  question: string 
  correct_answer: string
  incorrect_answers: string[]
}

interface QuizInterface {
  questions: Array<QuestionsInterface>
}

const Quiz = ({ questions }: QuizInterface) => {
  const [answerSelected, setAnswerSelected] = useState<string | null>();
  const [answers, setAnswers] = useState<Array<any>>()
  const [actualQuestion, setActualQuestion] = useState<QuestionsInterface>(questions[0])
  const [index, setIndex] = useState(0)
  const [points, setPoints] = useState(0)

  // useEffect(() => {
  //   setIndex(prevState => prevState + 1)
  //   setPoints(prevState => prevState + 1)
  // }, [])

  useEffect(() => {
    setAnswers(shuffleArray([actualQuestion?.correct_answer, ...actualQuestion.incorrect_answers]))
  }, [actualQuestion])

  const handleNextQuestion = () => {
    if (questions.length !== index) {
      setIndex(prevState => prevState + 1)
      setActualQuestion(questions[index])
    }
  }
  
  const handleNextButton = () => {
    if(answerSelected === actualQuestion?.correct_answer) {
      // Ele tem que verificar se a resposta está correta, se sim somar um ponto se não, não somar nada
      setPoints(prevState => prevState + 1)
      handleNextQuestion()

    } else {
      // Ir para a próxima pergunta
      handleNextQuestion()
    }
  }

  return (
    <>
      <h1>Question {index}</h1>
      <p>{actualQuestion?.question}</p>
      {
        answers?.map(answer => (
          <>
            <input
              type="radio"
              name='question'
              id={answer}
              value={answer}
              onChange={value => setAnswerSelected(value.target.value)}
            />
            <label>{answer}</label>
            <br />
          </>
        ))
      }
      {
        questions.length !== index ? (
          <button
            onClick={handleNextButton}
            disabled={answerSelected === undefined ? true : false}
          >
              Next
          </button>
        ) : (
          <p>
            Parabéns! Sua pontuação foi de: {points}
          </p>
        )
      }
      
    </>
  )
}


export default Quiz