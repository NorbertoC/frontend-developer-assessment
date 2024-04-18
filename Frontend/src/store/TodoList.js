import { create } from 'zustand';

export const useTodoListStore = create((set, get) => {
  return {
    todoItems: [],
    
    fetchTodoItems: async () => {
      set({
        todoItems: [
          {
            id: '1',
            description: 'finish this app',
            action: false,
          }
        ],
      })
    },
  }
})

