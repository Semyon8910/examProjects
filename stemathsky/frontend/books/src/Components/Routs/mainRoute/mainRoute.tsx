import { Route, Routes } from "react-router-dom";
import "./mainRoute.css";
import MainPage from "../../layout/mainPage/mainPage";
import WritersList from "../../pages/writersList/writersList";
import Page404 from "../../pages/page404/page404";
import AddBook from "../../pages/addBook/addBook";
import BookList from "../../pages/bookList/bookList";

function MainRoute(): JSX.Element {
    return (
        <div className="mainRoute">
			<Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/addBook" element={<AddBook/>}/>
                <Route path="/bookList" element={<BookList/>}/>
                <Route path="/authorsList" element={<WritersList/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default MainRoute;
