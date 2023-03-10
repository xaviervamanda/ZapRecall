import styled from "styled-components";
import FlashCard from "./FlashCard";
import { useState } from "react";

export default function Content ({displayQuestions, cards, showFlashcardBack, 
    showFlashcardAnswer, showAnswer, counter, 
    setCounter, btn, setBtn, clickOrder, setClickOrder}){


    return (
       <Deck>
        <FlashCard 
        cards={cards}
        displayQuestions={displayQuestions}
        showFlashcardBack={showFlashcardBack}
        showFlashcardAnswer={showFlashcardAnswer}
        showAnswer={showAnswer}
        btn={btn}
        setBtn={setBtn}
        counter={counter}
        setCounter={setCounter}
        clickOrder={clickOrder}
        setClickOrder={setClickOrder}
        />
       </Deck>
    );
}

const Deck = styled.div`
    height: 425px;
    width: 300px;
    position: absolute;
    top: 153px;
    left: 37px;
    overflow-y: auto;
    ::-webkit-scrollbar{
        display: none;
    }
`



