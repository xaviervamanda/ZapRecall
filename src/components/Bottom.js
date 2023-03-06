import styled from "styled-components";
import {AiFillCloseCircle} from "react-icons/ai";
import {IoHelpCircle} from "react-icons/io5";
import {IoCheckmarkCircleSharp} from "react-icons/io5";
import sad from "../assets/img/sad.png"
import party from "../assets/img/party.png"

export default function Bottom ({counter, btn, clickOrder}){

    return (
        <BottomBar data-test="footer" counter={counter}>
            {counter === 8 && btn.includes("not") === true ? (
                <Message data-test="finish-text">
                    <div>
                        <img src={sad} alt="sad" />
                        <span><strong>Putz...</strong></span> 
                    </div>
                    <Text>Ainda faltam alguns... Mas não desanime!</Text>
                </Message>
            ) : counter === 8 && btn.includes("not") === false ? (
                <Message data-test="finish-text">
                    <div>
                        <img src={party} alt="party" />
                        <span><strong>Parabéns!</strong></span>
                    </div>
                    <Text>Você não esqueceu de nenhum flashcard!</Text>
                </Message>
            ) : ""}
            <Completed>
                {counter}/8 CONCLUÍDOS
            </Completed>
            <Icons>
                {btn.map ((b, index) => {
                    return btn[clickOrder[index]] === "not" ? <IconNot data-test="no-icon"/> : 
                    btn[clickOrder[index]] === "almost" ? <IconAlmost data-test="partial-icon"/> : 
                    btn[clickOrder[index]] === "zap" ? <IconZap data-test="zap-icon"/> : ""
                    })}
            </Icons>
        </BottomBar>
    );
}

const BottomBar = styled.div`
    width: 390px;
    height: ${props => props.counter === 8 ? "171px" : "70px"};
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0px;
    left:0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Completed = styled.div`
    width: 150px;
    height: 22px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
`
const Icons = styled.div`
    width: 200px;
    height: 22px;
`
const IconNot = styled(AiFillCloseCircle)`
    width: 20px;
    height: 23px;
    color: #FF3030;
    margin-right: 5px;
`
const IconZap = styled(IoCheckmarkCircleSharp)`
    width: 20px;
    height: 23px;
    color: #2FBE34;
    margin-right: 5px;
`
const IconAlmost = styled(IoHelpCircle)`
    width: 20px;
    height: 23px;
    color: #FF922E;
    margin-right: 5px;
`
const Message = styled.div`
    width:222px;
    height: 81px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    img{
        margin-left: 50px;
    }
    span {
        margin-left: 13px;
    }
`
const Text = styled.div`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-left: 10px;
    margin-top: 5px;
`