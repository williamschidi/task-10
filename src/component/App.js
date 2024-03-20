import styled from 'styled-components';
import GlobalStyle from '../styled/GlobalStyles';
import { useState } from 'react';
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
  const [todoTask, setTodoTask] = useState([]);
  const [inputItem, setInputItem] = useState('');
  const [editValue, setEditValue] = useState('');
  const [editId, setEditId] = useState('');
  const [isActive, setIsActive] = useState(true);

  function addTask(e, item) {
    e.preventDefault();
    setTodoTask((todoTask) => [...todoTask, item]);
    setInputItem('');
  }

  function deleteTask(id) {
    setTodoTask((todoTask) => todoTask.filter((task) => task.id !== id));
  }

  function upDateTask(e, id, value) {
    e.preventDefault();
    setTodoTask((todoTask) =>
      todoTask.map((task) =>
        task.id === id ? { ...task, inputItem: value } : task
      )
    );
    setEditValue('');
    setIsActive((prev) => !prev);
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <FormInput
          onAddTask={addTask}
          inputItem={inputItem}
          setInputItem={setInputItem}
          editValue={editValue}
          setEditValue={setEditValue}
          onUpdateItem={upDateTask}
          isActive={isActive}
          editId={editId}
        />
        <TodoList
          todoTask={todoTask}
          onDeleteTask={deleteTask}
          setIsActive={setIsActive}
          setEditId={setEditId}
        />
      </Main>
    </>
  );
}

export default App;
