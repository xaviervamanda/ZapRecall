import styled from "styled-components";
import {BiRightArrow} from "react-icons/bi";

export default function Content (){
    return (
       <Deck>
        <FlashcardFront>
            <Question>
                Pergunta 1
            </Question>
            <Icon />
        </FlashcardFront>
        <FlashcardFront>
            <Question>
                Pergunta 2
            </Question>
            <Icon />
        </FlashcardFront>
       </Deck>
    );
}

const Deck = styled.div`
    height: 100%;
    width: 300px;
    background-color: red;
    position: absolute;
    top: 153px;
    left: 37px;
`

const FlashcardFront = styled.div`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    display: flex;
`
const Question = styled.div`
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
const Icon = styled(BiRightArrow)`
    width: 20px;
    height: 23px;
    margin-top: 20px;
    margin-left: 163px;
`
