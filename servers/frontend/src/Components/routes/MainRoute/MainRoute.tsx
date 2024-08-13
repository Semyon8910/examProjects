import { Route, Routes } from "react-router-dom";
import "./MainRoute.css";
import MainPage from "../../layout/MainPage/MainPage";
import { Page404 } from "../../pages/Page404/Page404";
import ServersList from "../../pages/serversList/serversList";

export function MainRoute(): JSX.Element {
    return (
        <div className="MainRoute">
			<Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/servers" element={<ServersList/>}/>                
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}
