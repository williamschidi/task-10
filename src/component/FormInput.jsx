import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTask } from './store';
import { useState } from 'react';

const Form = styled.form`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 600px) {
    padding: 0.7rem 1.4rem;
    gap: 1.2rem;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;

  @media screen and (min-width: 451px) and (max-width: 600px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.2rem;
  }
`;

const Input = styled.input`
  padding: 0.7rem 1.8rem;
  width: 40rem;
  margin-right: 2rem;
  outline: none;
  border: none;
  border-radius: 1rem;

  @media screen and (min-width: 451px) and (max-width: 600px) {
    width: 25rem;
    padding: 0.5rem 1.2rem;
    margin-right: 1.5rem;
  }

  @media screen and (max-width: 450px) {
    width: 20rem;
    padding: 0.4rem 1rem;
    margin-right: 1.2rem;
  }
`;
const Button = styled.button`
  padding: 0.8rem 1.5rem;
  font-weight: bold;
  background: #fff;
  color: #212529;
  border: none;
  border-radius: 2rem;
  font-size: 1.4rem;
  cursor: pointer;
  &:hover {
    background: #eeeaea;
  }
  &:active {
    box-shadow: inset 0 0.2rem 0.4rem rgba(0, 0, 0, 0.6);
  }

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    padding: 0.5rem 1.2rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.2rem;
    padding: 0.3rem 0.8rem;
  }
`;

function FormInput() {
  const [inputItem, setInputItem] = useState('');

  const dispatch = useDispatch();

  function handleInput(e) {
    e.preventDefault();
    const newItems = { id: Date.now(), inputItem, isExecuted: false };

    dispatch(addTask(newItems));
    setInputItem('');
  }

  return (
    <Form>
      <StyledDiv className="task add-task">
        <div>
          <Label>Add Task</Label>
        </div>
        <div>
          <Input
            type="text"
            placeholder="Add Task"
            value={inputItem}
            onChange={(e) => setInputItem(e.target.value)}
          />
          <Button onClick={(e) => handleInput(e)} disabled={!inputItem}>
            Add Task
          </Button>
        </div>
      </StyledDiv>
    </Form>
  );
}

export default FormInput;
