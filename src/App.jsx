import { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

const App = () => {

  const [editBook, setBookEdit] = useState(null);

 const handleEdit = (book) =>{
  // console.log(book);
  setBookEdit(book);
 }

 const handleCancelEdit = () =>{
  setBookEdit(null);
 }

  return (
    <div className="App">
      <BookForm editBook={editBook} onCancel={handleCancelEdit}/>
      <BookList onHandleEdit={handleEdit} />
    </div>
  );
};

export default App;