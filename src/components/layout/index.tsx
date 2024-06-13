import Navigation from "./Navbar";
// import Header from "./Header";
import { Outlet} from "react-router-dom";

export default function Layout(): JSX.Element {
    return (
        <div className="flex flex-col min-w-screen min-h-screen">
            {/* <Header/> */}
            <Navigation/>
            <Outlet/>
        </div>
    )
}