import styled from 'styled-components';
import GlobalStyle from '../styled/GlobalStyles';
import Header from './Header';
import FormInput from './FormInput';
import TodoList from './TodoList';

const Main = styled.main`
  max-width: 70rem;
  margin: 15rem auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media screen and (min-width: 601px) and (max-width: 800px) {
    margin: 12rem auto;
    gap: 3rem;
  }

  @media screen and (min-width: 451px) and (max-width: 600px) {
    max-width: 50rem;
    margin: 10rem auto;
    gap: 3rem;
  }

  @media screen and (max-width: 450px) {
    margin: 8rem auto;
    max-width: 35rem;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <FormInput />
        <TodoList />
      </Main>
    </>
  );
}

export default App;
