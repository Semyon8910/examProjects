import { Books } from '../Models/Books';
import dal_mysql from '../dal/dal_mysql';

const getAllBooks = async ()=>{
    //sql statement
    const sql = `
        SELECT *, \`writers\`.name, \`writers\`.surname FROM books
        INNER JOIN \`writers\`
        ON \`books\`.writerID = \`writers\`.ID
    `;
    //execute the sql statement
    return await dal_mysql.execute(sql);
}

const addNewBook = async (newBook:Books)=>{
    const sql = `INSERT INTO books (writerID, book_name, number_of_pages, price) 
    VALUES (${newBook.writerID}, '${newBook.book_name}', ${newBook.number_of_pages}, ${newBook.price})`;
    return await dal_mysql.execute(sql);
}

export {getAllBooks,addNewBook};

