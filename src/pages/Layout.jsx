import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <nav>
              <Link to="/login">Log in</Link>
            </nav>
            <hr/>
            <Outlet />
        </div>
    );
}