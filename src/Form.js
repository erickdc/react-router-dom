import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
  return (
    <form>
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={(e) => setemail(e.target.value)}
      />
      <br />
      <br />
      <label for="pwd">Password:</label>
      <input
        type="password"
        id="pwd"
        name="pwd"
        minlength="8"
        onChange={(e) => setpassword(e.target.value)}
      />
      <br />
      <br />
      <button type="button" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
};

export default Form;
