export const Form = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        console.log(form.elements.login.value);
        form.reset();
      };

    return(
        <form onSubmit={handleSubmit}>
          <input type="text" name="login" />
          <br/>
          <button type="submit">Log in</button>
      </form>
    );
};