import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/userSlice";

export const UserMenu = () => {
    const dispatch = useDispatch();

    const login = useSelector(state => state.user.login)
    return (
        <div>
            {login}
            <button type="button" onClick={() => dispatch(logOut())}>Log out</button>
        </div>
    );
};