import styled from "styled-components";

export default function Answer (){
    return (
        <Container>
            <AnswerText>
                JSX é uma sintaxe para escrever HTML dentro do JS
            </AnswerText>
            <Options>
                <button>
                    Não lembrei
                </button>
                <button>
                    Quase não lembrei
                </button>
                <button>
                    Zap!
                </button>
            </Options>
        </Container>
    );
}

const Container = styled.div`
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
const AnswerText = styled.div`
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
