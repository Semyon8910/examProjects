import MainRoute from "../../Routs/mainRoute/mainRoute";
import FooterLayout from "../footerLayout/footerLayout";
import HeaderLayout from "../headerLayout/headerLayout";
import MainPage from "../mainPage/mainPage";
import MenuLayout from "../menuLayout/menuLayout";
import "./mainLayout.css";

function MainLayout(): JSX.Element {
    return (
        <div className="mainLayout">
			<header>
                <HeaderLayout/>
            </header>
            <aside>
                <MenuLayout/>
            </aside>
            <main>
                <MainRoute/>
            </main>
            <footer>
                <FooterLayout/>
            </footer>
        </div>
    );
}

export default MainLayout;
