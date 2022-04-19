import { Outlet } from "react-router-dom";
import { AppBar } from "../components/AppBar";

export const Layout = () => {
    return (
        <div>
            <AppBar/>
            <hr/>
            <Outlet />
        </div>
    );
}