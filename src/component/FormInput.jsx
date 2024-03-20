import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;
const StyledDiv = styled.div`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.7rem 1.8rem;
  width: 40rem;
  margin-right: 2rem;
  outline: none;
  border: none;
  border-radius: 1rem;
`;
const Button = styled.button`
  padding: 0.8rem 1.5rem;
  font-weight: bold;
  background: #fff;
  color: #212529;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  &:hover {
    background: #eeeaea;
  }
  &:active {
    box-shadow: inset 0 0.2rem 0.4rem rgba(0, 0, 0, 0.6);
  }
`;

function FormInput({
  onAddTask,
  inputItem,
  setInputItem,
  editValue,
  editId,
  setEditValue,
  onUpdateItem,
  isActive,
}) {
  const newItems = { id: Date.now(), inputItem, isExecuted: false };

  return (
    <Form>
      <StyledDiv className="task add-task" active={isActive}>
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
          <Button onClick={(e) => onAddTask(e, newItems)}>Add Task</Button>
        </div>
      </StyledDiv>
      <StyledDiv className="task edit-task" active={!isActive}>
        <div>
          <Label>Edit Task</Label>
        </div>
        <div>
          <Input
            type="text"
            placeholder="Edit Task"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <Button onClick={(e) => onUpdateItem(e, editId, editValue)}>
            Edit Task
          </Button>
        </div>
      </StyledDiv>
    </Form>
  );
}

export default FormInput;
