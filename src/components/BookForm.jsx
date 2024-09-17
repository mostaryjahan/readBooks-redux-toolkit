import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "../featucers/BooksSlice";

const BookForm = ({editBook, onCancel}) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
  });

  useEffect(()=>{
  if(editBook){
    setBook(editBook)
  }
  }, [editBook]);
  

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({...book, id: nanoid() });
   if(editBook){
    //update
    dispatch(updateBook(book))

   }else{
    dispatch(addBook({...book, id: nanoid()}))

   }
   setBook(
  {  title: "",
    author: "",
    price: "",
    quantity: "",}
   )
  };

  return (
    <div>
      <h1> Book Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={book.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={book.quantity}
          onChange={handleChange}
          required
        />
        <button type="submit">{
          editBook ? 'Edit Book' : 'Add Book'
          }</button>
          {editBook && <button onClick={onCancel}> Cancel</button>}
      </form>
    </div>
  );
};

export default BookForm;
