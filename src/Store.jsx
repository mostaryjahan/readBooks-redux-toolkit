import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./featucers/BooksSlice";

const Store = configureStore({
    reducer: {
        books: bookReducer,
    }
})


export default Store;