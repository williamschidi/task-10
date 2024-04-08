import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

const store = configureStore({ reducer });

export function addTask(item) {
  return { type: 'addTask', payload: item };
}

export function saveEditTask(editedId, editedValue) {
  return {
    type: 'editTask',
    payload: {
      editedId,
      editedValue,
    },
  };
}

export function deleteTask(taskId) {
  return { type: 'deleteTask', payload: taskId };
}

export function checked() {
  return { type: 'checked' };
}

export default store;
