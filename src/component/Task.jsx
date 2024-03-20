import { useState } from 'react';
import styled from 'styled-components';

const Li = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
`;

const StyleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  cursor: pointer;
`;
const Span = styled.span`
  &.cancelOut {
    text-decoration: line-through;
    color: #fff;
    text-decoration-thickness: 0.2rem;
  }
`;
const Button = styled.button`
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  border-radius: 0.8rem;
  border-radius: none;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: #eeeaea;
  }
  &:active {
    box-shadow: inset 0 0.2rem 0.4rem rgba(0, 0, 0, 0.6);
  }
`;

function Task({ item, onDeleteTask, setIsActive, setEditId }) {
  const [isExecuted, setIsExecuted] = useState(item.isExecuted);

  function handleChange() {
    setIsExecuted((prev) => !prev);
  }
  return (
    <>
      <Li>
        <StyleDiv style={{ color: 'white' }}>
          <input type="checkbox" value={isExecuted} onChange={handleChange} />
          <Span className={isExecuted ? 'cancelOut' : ''}>
            {item.inputItem}
          </Span>
        </StyleDiv>
        <StyleDiv style={{ color: 'white' }}>
          <Button
            onClick={() => {
              setEditId(item.id);
              setIsActive((prev) => !prev);
            }}
          >
            <ion-icon name="create-outline"></ion-icon>
          </Button>
          <Button onClick={() => onDeleteTask(item.id)}>
            <ion-icon name="close-outline"></ion-icon>
          </Button>
        </StyleDiv>
      </Li>
    </>
  );
}

export default Task;
