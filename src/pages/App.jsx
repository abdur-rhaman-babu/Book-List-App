/* eslint-disable no-mixed-spaces-and-tabs */

import Bookslist from "../components/Booklist/Bookslist";

// import { useEffect, useState } from "react";
// import BookRow from "../components/BookRow";

// const App = () => {
//   array of object
  // eslint-disable-next-line no-unused-vars
  // const [books, setBooks] = useState([]);
//   input field state
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [isbn, setIsbn] = useState("");
//   const [pubyear, setPubYear] = useState("");

// //   clear inputs
// const clearInputs = ()=>{
// 	setTitle('')
// 	setAuthor('')
// 	setPubYear('')
// 	setIsbn('')
	
// }

// //   form submit event
// const handleSubmit = (e)=>{
// e.preventDefault()
// // create a books object
// const book = {
// 	title,
// 	author,
// 	isbn,
// 	pubyear,
// };
// setBooks([...books,book])
// clearInputs()
// };

// const deleteBook = (isbn)=>{
//   const filteredBook = books.filter(book=>book.isbn!==isbn)
//   setBooks(filteredBook)
// }
// useEffect (()=>{
//   localStorage.setItem('books',JSON.stringify(books))
// },[books])


//   return (
//     <div>
//       <div onSubmit={handleSubmit} className="wrapper">
//         <h1>BookList App</h1>
//         <p>Add and view your books using local storage</p>
//         <div className="main">
//           <div className="form-container">
//             <form className="form-group">
//               <label>Title</label>
//               <input
//                 type="text" 
//                 value={title} onChange={(e)=>setTitle(e.target.value)}
//                 className="form-control"
//                 required
//               ></input>
//               <br></br>
//               <label>Author</label>
//               <input
//                 type="text"
//                 value={author} onChange={(e)=>setAuthor(e.target.value)}
//                 className="form-control"
//                 required
//               ></input>
//               <br></br>
//               <label>ISBN#</label>
//               <input
//                 type="text"
//                 value={isbn} onChange={(e)=>setIsbn(e.target.value)}
//                 className="form-control"
//                 required
//               ></input>
//               <br></br>
//               <label>Publish year</label>
//               <input
//                 type="text"
//                 value={pubyear} onChange={(e)=>setPubYear(e.target.value)}
//                 className="form-control"
//                 required
//               ></input>
//               <br></br>
//               <button type="submit" className="btn btn-success btn-md">
//                 Submit
//               </button>
//             </form>
//           </div>

//           <div className="view-container">
//             <>
//               <div className="table-responsive">
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       <th>ISBN#</th>
//                       <th>Title</th>
//                       <th>Author</th>
//                       <th>Publish year</th>
//                       <th style={{color:'red'}}>Delete</th>
//                     </tr>
//                   </thead>
//                   <tbody>
// 					{
// 						books.map(book=><BookRow 
// 							key ={book.isbn} 
// 							book ={book} deleteBook = {deleteBook}/>)
// 					}
// 				  </tbody>
//                 </table>
//               </div>
//               <button onClick= {()=>setBooks([])} className="btn btn-danger btn-md">Remove</button>
//             </>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


const App = () => {

  return (
    <div>
      <Bookslist/>
    </div>
  );
};

export default App;