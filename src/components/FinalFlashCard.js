import styled from "styled-components";
import {AiFillCloseCircle} from "react-icons/ai"
import {IoHelpCircle} from "react-icons/io5"
import {IoCheckmarkCircleSharp} from "react-icons/io5"

export default function FinalFlashCard ({btn, index}){
    return (
        <Final btn={btn} index={index}>
            <Name>
                Pergunta {(index + 1)}
            </Name>
            {btn[index] === "not" ? <IconNot data-test="play-btn" /> : btn[index] === "zap" ? <IconZap data-test="play-btn" /> : <IconAlmost data-test="play-btn" />}
        </Final>
    );
}

const Final = styled.div`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    display: flex;
    color: ${props => props.btn[props.index] === "not" ? "#FF3030" : props.btn[props.index] === "zap" ? "#2FBE34" : "#FF922E"};
    text-decoration: line-through solid ${props => props.btn[props.index] === "not" ? "#FF3030" : props.btn[props.index] === "zap" ? "#2FBE34" : "#FF922E"};
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
const IconNot = styled(AiFillCloseCircle)`
    width: 20px;
    height: 23px;
    margin-top: 20px;
    margin-left: 163px;
    color: #FF3030;
`
const IconZap = styled(IoCheckmarkCircleSharp)`
    width: 20px;
    height: 23px;
    margin-top: 20px;
    margin-left: 163px;
    color: #2FBE34;
`
const IconAlmost = styled(IoHelpCircle)`
    width: 20px;
    height: 23px;
    margin-top: 20px;
    margin-left: 163px;
    color: #FF922E;
`