export class Books{
    ID:number;
    writerID:number; //Forigen key
    book_name:string;
    number_of_pages:number;
    price:number;

    constructor(ID:number,writerID:number,book_name:string,number_of_pages:number,price:number){
        this.ID=ID;
        this.writerID=writerID;
        this.book_name=book_name;
        this.number_of_pages=number_of_pages;
        this.price=price;
    }
}

