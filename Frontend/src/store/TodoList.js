import { create } from 'zustand';
import Axios from 'axios';

const TODO_LIST_API = 'http://localhost:8000/api';
const ENDPOINT = 'todoItems';

export const useTodoListStore = create((set, get) => {
  return {
    todoItems: [],
    
    fetchTodoItems: async () => {
      try {
        const response = await Axios.get(`${TODO_LIST_API}/${ENDPOINT}`);
        
        set({ todoItems: response.data });
      } catch (error) {
        console.error('Error fetching todo items:', error);
      }
    },
    
    createTodoItem: async (item) => {
      try {
        const response = await Axios.post(`${TODO_LIST_API}/${ENDPOINT}`, item);
        
        if (response.data) {
          set(state => ({
            todoItems: [...state.todoItems, response.data],
          }));
        } else {
          console.error('Error adding todo item:', response.statusText);
        }
        
      } catch (error) {
        console.error('Error adding todo item:', error);
      }
    },
    
    updateTodoItem: async (id, updatedTodoItem) => {
      try {
        const response = await Axios.put(`${TODO_LIST_API}/${ENDPOINT}/${id}`, updatedTodoItem);
        
        set(state => ({
          todoItems: state.todoItems.map(item =>
            item.id === id ? { ...item, ...response.data } : item
          ),
        }));
        
      } catch (error) {
        console.error('Error adding todo item:', error);
      }
    },
    
    removeTodoItem: async id => {
      try {
        await Axios.delete(`${TODO_LIST_API}/${ENDPOINT}/${id}`);
        
        set(state => ({
          todoItems: state.todoItems.filter(item => item.id !== id),
        }));
      } catch (error) {
        console.error('Error removing todo item:', error);
      }
    },
  };
});