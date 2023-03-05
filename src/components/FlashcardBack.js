import {BsFillArrowRightCircleFill} from "react-icons/bs";
import styled from "styled-components";

export default function FlashcardBack (){
    return (
        <Back >
            <Question>
                O que é JSX?
            </Question>
            <IconBack />
        </Back>
    );
}

const Back = styled.div`
    width: 300px;
    height: 131px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    /* mudar esse display para flex quando for pra aparecer */
    display: none;
    position: relative;
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