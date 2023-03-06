import Bottom from "./Bottom";
import Content from "./Content";
import Top from "./Top";
import styled from "styled-components";
import { useState } from "react";
import cards from "../cards";
import InitialScreen from "./InitialScreen";

export default function App() {

  const [displayQuestions, setDisplayQuestions] = useState(Array(8).fill("flex"));
  const [displayQuestionsText, setDisplayQuestionsText] = useState(Array(8).fill("none"));
  const [showAnswer, setShowAnswer] = useState(Array(8).fill(false));
  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState("");
  const [btn, setBtn] = useState(Array(8).fill(""));
  const [clickOrder, setClickOrder] = useState([]);

  function showFlashcardBack (index){
    const newDisplayQuestions = [...displayQuestions];
    newDisplayQuestions[index] = "none";
    setDisplayQuestions(newDisplayQuestions);
  }

  function showFlashcardAnswer (index){
    const newDisplayQuestionsText = [...displayQuestionsText];
    newDisplayQuestionsText[index] = "flex";
    setDisplayQuestionsText(newDisplayQuestionsText);
    const newShowAnswer = [...showAnswer];
    newShowAnswer[index] = true
    setShowAnswer(newShowAnswer);
  }

  function playZapRecall (){
    const status = "play";
    setStart(status);
  }

  return (
    <Container>
      {start === "play" ? (
        <>
        <Top />
        <Content 
        showFlashcardBack={showFlashcardBack} 
        showFlashcardAnswer={showFlashcardAnswer} 
        cards={cards}
        displayQuestions={displayQuestions}
        displayQuestionsText={displayQuestionsText}
        showAnswer={showAnswer}
        counter={counter}
        setCounter={setCounter}
        setDisplayQuestions={setDisplayQuestions}
        btn={btn}
        setBtn={setBtn}
        clickOrder={clickOrder}
        setClickOrder={setClickOrder}
        />
        <Bottom counter={counter} btn={btn} 
        clickOrder={clickOrder} />
        </>
      ) : (
        <InitialScreen playZapRecall={playZapRecall} start={start}/>
      )}
      
    </Container>
  );
}


const Container = styled.div`
    width: 390px;
    height: 695px;
    background-color: #FB6B6B;
    position: relative;
`

