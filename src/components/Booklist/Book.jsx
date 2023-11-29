/* eslint-disable react/prop-types */

// import Bookslist from './Bookslist';
import { MdDelete } from "react-icons/md";

const Book = ({booklist,deleteBook}) => {
    const {title,author,isbn,pubyear} = booklist;
    return (
      
            <tr>
                <td>{title}</td>
                <td>{author}</td>
                <td>{isbn}</td>
                <td>{pubyear}</td>
                <td style={{color:'red'}} onClick={()=>deleteBook(isbn)}><MdDelete /></td>
            </tr>
    );
};

export default Book;