import styled from "styled-components";
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import FlashCardInitial from "./FlashCardInitial";
import FinalFlashCard from "./FinalFlashCard";


export default function FlashCard ({cards, 
    showFlashcardBack, displayQuestions, 
    showFlashcardAnswer, showAnswer,
    btn, setBtn, setCounter, counter}){

    function showFinalFlashCard (answer, index){
        const newBtn = [...btn];
        newBtn[index] = answer
        setBtn(newBtn);
        const turn = counter + 1;
        setCounter(turn);
    }

    return (
        <>
            {cards.map((card, index) => {
            if (displayQuestions[index] === "flex"){
                return (
                    <FlashCardInitial key={index} index={index} showFlashcardBack={showFlashcardBack} />
                );   
            }
            else {
                if (!showAnswer[index]){
                    return (
                        <Back key={index} data-test="flashcard">
                            <Question data-test="flashcard-text">
                                {card.question}
                            </Question>
                            <IconBack data-test="turn-btn" onClick={() => showFlashcardAnswer(index)}/>
                        </Back>   
                    );    
                }
                else{
                    console.log(btn)
                    if (btn[index] === ""){
                    return (
                        <Container key={index} data-test="flashcard">
                            <AnswerText data-test="flashcard-text">
                                {card.answer}
                            </AnswerText>
                            <Options>
                                <button data-test="no-btn" onClick={() => showFinalFlashCard("not", index)}>
                                    Não lembrei
                                </button>
                                <button data-test="partial-btn" onClick={() => showFinalFlashCard("almost", index)}>
                                    Quase não lembrei
                                </button>
                                <button data-test="zap-btn" onClick={() => showFinalFlashCard("zap", index)}>
                                    Zap!
                                </button>
                            </Options>
                        </Container>
                    );
                    }
                    else {
                        return (
                          <FinalFlashCard key={index} btn={btn} index={index} />  
                        );  
                    }
                }
            }
        })}
        </>
    );
}

const Back = styled.div`
    width: 300px;
    height: 131px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    display: flex;
    position: relative;
    background-color: #FFFFD5;
`
const Question = styled.div`
    width: 270px;
    height: 69px;
    margin-left: 15px;
    margin-top: 18px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
`
const IconBack = styled(BsFillArrowRightCircleFill)`
    width: 30px;
    height: 20px;
    position: absolute;
    bottom: 10px;
    right: 8px;
`
const Container = styled.div`
    width: 300px;
    height: 161px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    display: flex;
    position: relative;
    background-color: #FFFFD5;
`
const AnswerText = styled.div`
    width: 270px;
    height: 89px;
    margin-left: 15px;
    margin-top: 18px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    
`
const Options = styled.div`
    width: 274px;
    height: 38px;
    position: absolute;
    bottom: 10px;
    left: 13px;
    margin: 0 auto;
    display: flex;
    button {
        width: 86px;
        height: 38px;
        border-radius: 5px;
        border: none;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
    }
    & button:first-child {
        background-color: #FF3030;
        margin-right: 8px;
    }
    & button:last-child {
        background-color: #2FBE34;
    }
    & button:nth-child(2) {
        background-color: #FF922E;
        margin-right: 8px;
    }
`