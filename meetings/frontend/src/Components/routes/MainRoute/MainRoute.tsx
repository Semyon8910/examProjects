import { Route, Routes } from "react-router-dom";
import "./MainRoute.css";
import MainPage from "../../layout/MainPage/MainPage";
import { Page404 } from "../../pages/Page404/Page404";
import StartPage from "../../pages/startPage/startPage";

export function MainRoute(): JSX.Element {
    return (
        <div className="MainRoute">
			<Routes>
                <Route path="/" element={<StartPage/>}/>
                <Route path="/meetings/:teamID" element={<MainPage/>}/>               
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}
