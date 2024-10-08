import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../featucers/BooksSlice";

const BookList = ({onHandleEdit}) => {
  const books = useSelector((state) => state.booksR.books);
  //   console.log(books);

  const dispatch = useDispatch();

  const handleDelete = (id) =>{
    // console.log(id)
    dispatch(deleteBook(id)) 
  }

  const handleEdit = (book) =>{
    console.log(book)
    onHandleEdit(book);
  }

  return (
    <div>
      <h2>List of Books</h2>
      {books && books.length > 0 ? (
        <ul>
          {books.map((book) => {
            return (
              <li key={book.id}>
                {book.title} by {book.author} - ${book.price} - {book.quantity}{" "}
                pcs
                <button onClick={() =>handleDelete(book.id)}>Delete</button>
                <button onClick={() =>handleEdit(book)}>Edit</button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p> No books exits</p>
      )}
    </div>
  );
};

export default BookList;
