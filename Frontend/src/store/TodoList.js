import { create } from 'zustand';

export const useTodoListStore = create((set, get) => {
  return {
    todoItems: [],
    
    fetchTodoItems: async () => {
      try {
        const response = await fetch('/api/todoItems');
        const data = await response.json();
        
        set({ todoItems: data });
      } catch (error) {
        console.error('Error fetching todo items:', error);
      }
    },
    
    createTodoItem: async (newTodoItem) => {
      try {
        const response = await fetch('/api/todoItems', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: newTodoItem,
        });
        
        if (response.ok) {
          const createdItem = await response.json();
          set(state => ({
            todoItems: [...state.todoItems, createdItem],
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
        await fetch(`/api/todoItems/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: updatedTodoItem,
        });
        
        set(state => ({
          todoItems: state.todoItems.map(item =>
            item.id === id ? { ...item, ...updatedTodoItem } : item
          ),
        }));
      } catch (error) {
        console.error('Error updating todo item:', error);
      }
    },
    
    removeTodoItem: async id => {
      try {
        await fetch(`/api/todoItems/${id}`, {
          method: 'DELETE',
        });
        
        set(state => ({
          todoItems: state.todoItems.filter(item => item.id !== id),
        }));
      } catch (error) {
        console.error('Error removing todo item:', error);
      }
    },
  };
});