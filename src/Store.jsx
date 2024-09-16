import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./featucers/BooksSlice";

const Store = configureStore({
    reducer: {
        booksR: bookReducer,
    }
})


export default Store;