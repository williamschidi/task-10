import styled from 'styled-components';
import Task from './Task';

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: flex-start;
  justify-content: center;
  list-style: none;
`;

const H2 = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  color: #fff;
  width: 100%;
  text-transform: uppercase;
`;

function TodoList({ todoTask, onDeleteTask, setIsActive, setEditId }) {
  return (
    <Ul>
      <H2>Here are your todo task</H2>
      {todoTask.map((item, ind) => (
        <Task
          item={item}
          key={ind}
          onDeleteTask={onDeleteTask}
          setIsActive={setIsActive}
          setEditId={setEditId}
        />
      ))}
    </Ul>
  );
}

export default TodoList;
