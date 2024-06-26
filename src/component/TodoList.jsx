import styled from 'styled-components';
import Task from './Task';
import { useSelector } from 'react-redux';

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: flex-start;
  justify-content: center;
  list-style: none;

  @media screen and (max-width: 600px) {
    gap: 1.5rem;
  }
`;

const H2 = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  color: #fff;
  width: 100%;
  text-transform: uppercase;

  @media screen and (min-width: 451px) and (max-width: 600px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 1.4rem;
  }
`;

function TodoList() {
  const todoTask = useSelector((store) => store.todoTask);

  return (
    <Ul>
      {todoTask.length > 0 && <H2>Here are your todo task</H2> &&
        todoTask.map((item, ind) => <Task item={item} key={ind} />)}
    </Ul>
  );
}

export default TodoList;
