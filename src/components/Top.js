import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function Top (){
    return (
        <TopBar>
            <Logo>
                <img src={logo} alt="logo zap recall" />
            </Logo>
            <PageName>
                ZapRecall
            </PageName>
        </TopBar>
        
    );
}

const TopBar = styled.div`
    width: 255.61px;
    height: 60px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 42px;
    left: 59px;
`
const Logo = styled.div`
    img {
        width: 52px;
        height: 60px;
    }
`
const PageName = styled.div`
    width: 203.17px;
    height: 44px;
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
`