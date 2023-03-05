import styled from "styled-components";
import FlashcardFront from "./FlashcardFront";
import FlashcardBack from "./FlashcardBack";
import Answer from "./Answer";

export default function Content (){
    return (
       <Deck>
        <FlashcardFront />
        <FlashcardBack />
        <Answer />
       </Deck>
    );
}

const Deck = styled.div`
    height: 100%;
    width: 300px;
    position: absolute;
    top: 153px;
    left: 37px;
`



