import styled from 'styled-components';
import GlobalStyle from '../styled/GlobalStyles';
import { useState } from 'react';
import Header from './Header';
import FormInput from './FormInput';
import TodoList from './TodoList';

const Main = styled.main`
  width: 70rem;
  margin: 15rem auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;
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
