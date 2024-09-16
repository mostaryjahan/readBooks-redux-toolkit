import { createSlice } from "@reduxjs/toolkit";
const initialState = {books: []}

const BooksSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {}
})

export default BooksSlice.reducer;