import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../redux/userSlice";

export const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        console.log(form.elements.login.value);
        dispatch(logIn(form.elements.login.value));
        form.reset();
        navigate('/dashboard', {replace: true});
      };

    return(
        <form onSubmit={handleSubmit}>
          <input type="text" name="login" />
          <br/>
          <button type="submit">Log in</button>
      </form>
    );
};