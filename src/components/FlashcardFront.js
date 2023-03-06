import styled from "styled-components";
import {BiRightArrow} from "react-icons/bi";

export default function FlashCardFront ({index, showFlashcardBack}){
    return (
        <Front data-test="flashcard">
            <Name>
                Pergunta {(index + 1)}
            </Name>
            <IconFront data-test="play-btn" onClick={() => showFlashcardBack(index)}/>
        </Front> 
    );
}

const Front = styled.div`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    display: flex;
`
const Name = styled.div`
    width: 87px;
    height: 19px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin: auto 0;
    margin-left: 15px;
`
const IconFront = styled(BiRightArrow)`
    width: 20px;
    height: 23px;
    margin-top: 20px;
    margin-left: 163px;
`