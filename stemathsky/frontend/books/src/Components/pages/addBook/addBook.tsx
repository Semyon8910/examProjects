import { useEffect, useState } from "react";
import "./addBook.css";
import axios from "axios";
import { Author } from "../../Models/Author";
import { Books } from "../../Models/Books";
import { SubmitHandler, useForm } from "react-hook-form";

function AddBook(): JSX.Element {
    type newBook = {
        ID: 0;
        book_name: string;
        number_of_pages: number;
        price: number;
        writerID: number;
    }
    
    const {
        register,
        handleSubmit,
        formState: { errors}
    } = useForm<newBook>();

    const [writers, setWriters] = useState<Author[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/author/all")
        .then(response=>response.data)
        .then(data=>setWriters(data));
    },[]);

    console.log(writers);

    const bookAdding: SubmitHandler<newBook> = (data) => {
        console.log(data);
        axios.post("http://localhost:8080/api/v1/books/add", {
            book_name: data.book_name,
            number_of_pages: data.number_of_pages,
            price: data.price,
            writerID: data.writerID,
        }).then(response=>response.status)
        .catch((err)=>console.log(err));
    }

    return (
        <div className="addBook">
			<h1>Add new book</h1>
            <form onSubmit={handleSubmit(bookAdding)}>
                <input type="text" placeholder="book name"
                {...register("book_name",{required:true})}/><br/><br/>
                <input type="number" placeholder="number of pages"
                {...register("number_of_pages",{required:true})}/><br/><br/>
                <input type="number" placeholder="price"
                {...register("price", {required:true})}/><br/><br/>
                <select {...register("writerID", {required:true})}>
                    {writers.map(item=><option key={item.ID} value={item.ID}>{item.name} {item.surname}</option>)}
                </select>
                <input type="submit" value={"Add book"}/>
            </form>
        </div>
    );
}

export default AddBook;
