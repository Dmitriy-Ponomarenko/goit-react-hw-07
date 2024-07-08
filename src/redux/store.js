import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlice";
import { filtersReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
