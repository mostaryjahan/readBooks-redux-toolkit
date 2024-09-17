import { createSlice } from "@reduxjs/toolkit";
const initialState = {books: 
    [
    {id: 1, title: 'x', price: 10, author: 'y', quantity: 5},
    {id: 2, title: 'x', price: 10, author: 'y', quantity: 5},
    {id: 3, title: 'x', price: 10, author: 'y', quantity: 5},
    {id: 4, title: 'x', price: 10, author: 'y', quantity: 5},
    {id: 5, title: 'x', price: 10, author: 'y', quantity: 5},
],
}

const BooksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        deleteBook: (state, action) => {
         const  id = action.payload;
         console.log (id)
         state.books = state.books.filter((book) => book.id !== id);
        },
        updateBook: (state, action) => {
            const  {id , title, author, price, quantity}= action.payload;
            // console.log (id)
            const exitingBook = state.books.find((book) => book.id === id);
            if(exitingBook){
              exitingBook.title= title;
              exitingBook.author= author;             exitingBook.price= price;
              exitingBook.quantity= quantity;

            }
           },


        addBook: (state, action) => {
            state.books.push(action.payload)

        },
        
    },
});

export const {deleteBook, addBook, updateBook} = BooksSlice.actions;

export default BooksSlice.reducer;