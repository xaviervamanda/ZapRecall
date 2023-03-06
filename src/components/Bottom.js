import styled from "styled-components";

export default function Bottom ({counter}){
    return (
        <BottomBar data-test="footer">
            <Completed>
                {counter}/8 CONCLUÍDOS
            </Completed>
        </BottomBar>
    );
}

const BottomBar = styled.div`
    width: 386px;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0px;
    left:0px;
    display: flex;
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