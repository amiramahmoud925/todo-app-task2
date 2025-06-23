import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FILTRATION_TYPES = {
  ALL: "all",
  COMPLETED: "completed",
  IN_PROGRESS: "in-progress",
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    filter: FILTRATION_TYPES.ALL,
    loading: false,
    error: "",
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = action.payload;
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    markAsCompleted: (state, action) => {
      const id = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateFilter: (state, action) => {
      const filter = action.payload;
      state.filter = filter;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.error = "Failed to fetch todos ";
        state.loading = false;
      });
  },
});

export const { addTodo, removeTodo, markAsCompleted, updateFilter } =
  todosSlice.actions;

export default todosSlice;
