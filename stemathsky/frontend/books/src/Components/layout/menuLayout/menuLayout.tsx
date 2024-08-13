import { NavLink } from "react-router-dom";
import "./menuLayout.css";

function MenuLayout(): JSX.Element {
    return (
        <div className="menuLayout">
			<h3>Main menu</h3><hr />
            <NavLink to="/booklist">books list</NavLink><br /><br />
            <NavLink to="/authorsList">writers list</NavLink><hr />
            <NavLink to="/addBook">add new book</NavLink>
        </div>
    );
}

export default MenuLayout;
