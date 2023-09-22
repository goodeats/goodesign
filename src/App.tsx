import { Footer, Header, Main, Nav, Wrapper } from '#lib/main.ts';
import { Components } from './components/index.tsx';

function App() {
  return (
    <Wrapper variant="page">
      <Header>
        <h1>Goodesign</h1>
        <Nav>Design System in progress</Nav>
      </Header>
      <Main>
        <Components />
      </Main>
      <Footer>Thanks ✌️</Footer>
    </Wrapper>
  );
}

export default App;
