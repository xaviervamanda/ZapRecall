import {BiRightArrow} from "react-icons/bi";
import styled from "styled-components";

export default function FlashcardFront (){
    return (
        <Front>
            <Name>
                Pergunta 1
            </Name>
            <IconFront onClick={() => alert("oi")}/>
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
    /* mudar esse display para flex quando for pra aparecer */
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