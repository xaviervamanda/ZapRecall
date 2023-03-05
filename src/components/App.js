import Bottom from "./Bottom";
import Content from "./Content";
import Top from "./Top";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <Top />
      <Content />
      <Bottom />
    </Container>
  );
}

const Container = styled.div`
    width: 375px;
    height: 695px;
    background-color: #FB6B6B;
    position: relative;
`

