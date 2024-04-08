import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { deleteTask, saveEditTask } from './store';

const Li = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.1rem solid #b3afaf;

  @media screen and (min-width: 451px) and (max-width: 750px) {
    width: 100%;
    padding: 0 1rem;
    font-size: 1.6rem;
  }
  @media screen and (max-width: 450px) {
    padding: 0 1rem;
    font-size: 1.4rem;
  }
`;

const StyleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    gap: 0.7rem;
  }
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
  @media screen and (max-width: 600px) {
    padding: 0.3rem 0.7rem;
  }
`;

function Task({ item }) {
  const [editedText, setEditedText] = useState('');
  const [isExecuted, setIsExecuted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef(null);

  const dispatch = useDispatch();

  function handleInputChange() {
    setIsExecuted((prev) => !prev);
  }
  function handleEditChange(e) {
    setEditedText(e.target.value);
  }

  function toggleEdit() {
    setIsEditing(true);
  }

  function handleEdit() {
    if (!editedText) return;
    dispatch(saveEditTask(item.id, editedText));
    setIsEditing(false);
    setEditedText('');
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleEdit();
    }
  }

  function handleDelete() {
    dispatch(deleteTask(item.id));
  }

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEditing]);

  return (
    <>
      <Li>
        {isEditing ? (
          <>
            <textarea
              value={editedText}
              onChange={handleEditChange}
              ref={textareaRef}
              onKeyPress={(e) => handleKeyPress(e)}
            />
            <Button onClick={handleEdit}>Save</Button>
          </>
        ) : (
          <>
            <StyleDiv style={{ color: 'white' }}>
              <input
                type="checkbox"
                value={isExecuted}
                onChange={handleInputChange}
              />
              <Span className={isExecuted ? 'cancelOut' : ''}>
                {item.inputItem}
              </Span>
            </StyleDiv>
            <StyleDiv style={{ color: 'white' }}>
              <Button onClick={toggleEdit}>
                <ion-icon name="create-outline"></ion-icon>
              </Button>
              <Button onClick={handleDelete}>
                <ion-icon name="close-outline"></ion-icon>
              </Button>
            </StyleDiv>
          </>
        )}
      </Li>
    </>
  );
}

export default Task;
