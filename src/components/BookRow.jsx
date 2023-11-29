/* eslint-disable react/prop-types */

import { MdFolderDelete } from "react-icons/md";

const BookRow = ({book,deleteBook}) => {
    const {title,author,pubyear,isbn} =book;
  
    return (
        
            <tr>
               <td>{isbn}</td>
               <td>{title}</td>
               <td>{author}</td>
               <td>{pubyear}</td>
               <td onClick={()=>deleteBook(isbn)} style= {{color:'red'}} className="delete-btn">
               <MdFolderDelete />
               </td>
            </tr>
       
    );
};

export default BookRow;