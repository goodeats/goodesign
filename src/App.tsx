import { Footer, Header, Main, Nav } from '#lib/main.ts';
import './App.css';
import { Components } from './components/index.tsx';

function App() {
  return (
    <>
      <Header>
        <h1>Goodesign</h1>
        <Nav>Design System in progress</Nav>
      </Header>
      <Main>
        <Components />
      </Main>
      <Footer>Thanks ✌️</Footer>
    </>
  );
}

export default App;
