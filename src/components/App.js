import Bottom from "./Bottom";
import Content from "./Content";
import Top from "./Top";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Top />
      <Content />
      <Bottom />
    </Container>
  );
}

export default App;

const Container = styled.div`
    width: 375px;
    height: 695px;
    background-color: #FB6B6B;
    position: relative;
`

