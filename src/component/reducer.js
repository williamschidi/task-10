const initialState = {
  todoTask: [],
  editValue: '',
  editId: '',
  isActive: false,
  isEditing: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'addTask':
      return {
        ...state,
        todoTask: [...state.todoTask, action.payload],
      };

    case 'editTask':
      const { editedId, editedValue } = action.payload;
      const updatedTask = state.todoTask.map((task) =>
        task.id === editedId ? { ...task, inputItem: editedValue } : task
      );
      return {
        ...state,
        todoTask: updatedTask,
        isEditing: false,
      };

    case 'deleteTask':
      const taskId = action.payload;
      const retainTask = state.todoTask.filter((task) => task.id !== taskId);
      return { ...state, todoTask: retainTask };

    case 'checked':
      return { ...state, isActive: true };

    default:
      return state;
  }
}
