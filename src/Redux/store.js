import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./slices/todos.slice";
import { todosApi } from "./queries/todos.query";

const store = configureStore({
  reducer: {
    todosState: todosSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

export default store;
