import { useEffect, useState } from "react";
import "./Book.css";
import Book from "./Book";
import getDatafromLs from "./localStroage";

// const getDatafromLs =()=>{
//    let Data =  localStorage.getItem('books')
//    return Data ?  JSON.parse(Data) : []

// }
const Bookslist = () => {
  const [books, setBooks] = useState(getDatafromLs());

  // input field status
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pubyear, setPubYear] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    const sameIdmessage = []
    books.map((book)=>{
      sameIdmessage.push(book.isbn)
    })

    // create every single object
    const book = {
      title,
      author,
      isbn,
      pubyear,
    };
    if(!sameIdmessage.includes(book.isbn)){
      setBooks([...books, book]);
    } 
    else{
      alert('same id issue')
    }
    getEmptyInput();
  };

  // to do emty input
  const getEmptyInput = () => {
    setTitle("");
    setAuthor("");
    setIsbn("");
    setPubYear("");
  };

  // delete items
  const deleteBook = (isbn) => {
    const filteredBook = books.filter((book) => book.isbn !== isbn);
    setBooks(filteredBook);
  };

  // to set date in local storage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <div className="Booklist-container">
      <div className="booklist-heading">
        <h1>BookList App</h1>
        <p>Add and show book list using local storage</p>
      </div>

      <div className="main-content">
        <div className="form-content">
          <form className="form-group" onSubmit={formHandler}>
            <label>TITLE: </label>
            <br />
            <input
              type="text"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="single-form"
            />
            <br />
            <label>AUTHOR:</label>
            <br />
            <input
              type="text"
              required
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
              className="single-form"
            />
            <br />
            <label>#ISBN:</label>
            <br />
            <input
              type="text"
              required
              onChange={(e) => setIsbn(e.target.value)}
              value={isbn}
              className="single-form"
            />
            <br />
            <label>PUBLISH YEAR:</label>
            <br />
            <input
              type="date"
              required
              onChange={(e) => setPubYear(e.target.value)}
              value={pubyear}
              className="single-form"
            />
            <br />
            <button className="submit-btn">Submit</button>
          </form>
        </div>

        <div className="view-content">
          {books.length > 0 && (
            <div className="table-reponsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th>Pubyeat</th>
                    <th style={{ color: "red" }}>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book) => (
                    <Book
                      key={book.isbn}
                      booklist={book}
                      deleteBook={deleteBook}
                    />
                  ))}
                </tbody>
              </table>
              <div className="reset-btn">
                  <button className="res-btn" onClick={() => setBooks([])}>
                    Remove All
                  </button>
                </div>
            </div>
          )}
          {books.length < 1 && <div>NO books are added yet</div>}
        </div>
      </div>
    </div>
  );
};

export default Bookslist;
