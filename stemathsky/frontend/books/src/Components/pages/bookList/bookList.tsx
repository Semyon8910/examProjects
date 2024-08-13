import { useEffect, useState } from "react";
import { Books } from "../../Models/Books";
import "./bookList.css";
import axios from "axios";
import SingleBook from "../singleBook/singleBook";

function BookList(): JSX.Element {
    const [books, setBooks] = useState<Books[]>([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/api/v1/books/all")
        .then(response=>response.data)
        .then(data=>setBooks(data));         
    },[]);
    return (
        <div className="bookList">
			{books.map(item=><SingleBook key={item.ID} book={item} />)}
        </div>
    );
}

export default BookList;
