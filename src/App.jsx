import { useState } from "react";
import SingUp from "./components/singUp/SingUp";
const App = () => {
  const [values, setVaues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    required: true,
  });
  const [isLoading, setIsLoading] = useState(true);

  const inputs = [
    {
      id: 1,
      name: "username",
      label: "Username",
      type: "text",
      placehoder: "Enter your username",
      errorMessage:
        "Usename should be 3-16 charsaters and shouldn't craracter!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      type: "email",
      errorMessage: "It should be a valid email addreess!",
      placehoder: "Enter your email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      label: "Password",
      type: "password",
      placehoder: "Enter your password",
      errorMessage:
        "Passwor shold be- 8-20 characters and inculide at least 1 letter, 1 number and special charcter!",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      label: "Confirm Password",
      type: "confirmPassword",
      pattern: values.password,
      errorMessage: "Passwords don't match!",
      placehoder: "Enter your Confirm Password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(false);
    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  };

  const onChange = (e) => {
    e.preventDefault();
    setVaues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center bg-cover h-screen ">
      <form
        onSubmit={handleSubmit}
        className="w-[450px] rounded-lg p-[20px] flex flex-col  gap-8 bg-blue-800"
      >
        <h1 className="text-center items-center text-xl font-bold bg-white text-purple-800 py-1 mx-auto px-8 rounded-lg shadow-lg">
          Regester
        </h1>
        {inputs.map((input) => (
          <SingUp key={input.id} onChange={onChange} {...input} />
        ))}

        <div className="flex justify-center items-center">
          <button className="w-44 rounded-lg  py-1 border-none text-xl bg-white text-purple-800 cursor-pointer mb-[10px] transition-all font-bold hover:opacity-[0.5]">
            {isLoading ? "SingUp" : "Loading..."}
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
