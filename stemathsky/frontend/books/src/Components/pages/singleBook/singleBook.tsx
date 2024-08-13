import { Books } from "../../Models/Books";
import "./singleBook.css";

interface bookProps{
    book:Books;
}

function SingleBook(props:bookProps): JSX.Element {
    return (
        <div className="singleBook box">
			<h1>{props.book.book_name}</h1>
            <b>{props.book.name} {props.book.surname}</b>
            <p>{props.book.number_of_pages}</p>
            <p>{props.book.price}</p>
        </div>
    );
}

export default SingleBook;
