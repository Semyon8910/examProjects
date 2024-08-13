import { NavLink } from "react-router-dom";
import "./MainMenu.css";

function MainMenu(): JSX.Element {
   
    return (
        <div className="MainMenu">
            <br/>
			<b>Main menu</b>
            <br/><br/>
            <hr/>
                <NavLink to="/">Main Page</NavLink><br/><br/>
                <NavLink to="/servers">Servers list</NavLink><br/><br/>
        </div>
    );
}

export default MainMenu;
