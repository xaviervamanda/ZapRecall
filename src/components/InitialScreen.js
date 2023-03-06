import styled from "styled-components";
import logo from "../assets/img/logo.png"

export default function InitialScreen ({playZapRecall, start}){
    return (
        <Container start={start}>
            <Logo>
                <img src={logo} alt="logo zap recall" />
            </Logo>
            <PageName>
                ZapRecall
            </PageName>
            <Play data-test="start-btn" onClick={() => playZapRecall()}>
                Iniciar Recall!
            </Play>
        </Container>
    );
}

const Container = styled.div`
    width: 390px;
    height: 667px;
    position: relative;
    background-color: #FB6B6B;
    display: ${props => props.start === "play" ? "none" : "flex"};
`
const Logo = styled.div`
    position: absolute;
    top:148px;
    left:119px;
    img {
        width: 136px;
        height: 161px;
    }
`
const PageName = styled.div`
    width: 257px;
    height: 59px;
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:322px;
    left:59px;
`
const Play = styled.button`
    width: 246px;
    height: 54px;
    position: absolute;
    top:411px;
    left:64px;
    background-color: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #D70900;

`