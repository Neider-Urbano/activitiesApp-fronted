import React from "react";
import {
  ButtonLogin,
  ButtonRegister,
  GroupLabel,
} from "../../components/login";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  passwordconfirm: "",
};

const Register = () => {
  const [dataUser, setDataUser] = useState(initialState);
  const [errors, setErrors] = useState("");
  const notify = (error) => toast.error(error);

  const handleInput = (e) => {
    const { value, name } = e.target;
    setDataUser({
      ...dataUser,
      [name]: value,
    });
    setErrors(validateInputs(name, value));
  };

  const handleActionForm = (e) => {
    e.preventDefault();
    e.target.disabled = true;
    var errorEncontrado = "";
    Object.keys(dataUser).map((key) => {
      if (errorEncontrado === "")
        errorEncontrado = validateInputs(key, dataUser[key]);
    });

    if (errorEncontrado === "") {
      setDataUser(initialState);
    } else {
      setErrors(errorEncontrado);
      toast.remove();
      notify(errorEncontrado);
    }
  };

  function validateInputs() {}

  return (
    <form className="my-10">
      <div className="flex flex-col space-y-5">
        <div className="flex space-x-5">
          <GroupLabel
            type="text"
            name="firstname"
            placeholder="Enter first name"
            valueData={""}
            onInput={""}
            error={""}
          />
          <GroupLabel
            type="text"
            name="lastname"
            placeholder="Enter last name"
            valueData={""}
            onInput={""}
            error={""}
          />
        </div>

        <GroupLabel
          type="email"
          name="email"
          placeholder="Enter your email"
          valueData={""}
          onInput={""}
          error={""}
        />

        <GroupLabel
          type="password"
          name="password"
          placeholder="Enter your password"
          valueData={""}
          onInput={""}
          error={""}
        />

        <GroupLabel
          type="password"
          name="passwordconfirm"
          placeholder="Enter confirm your password"
          valueData={""}
          onInput={""}
          error={""}
        />

        <ButtonLogin
          textSpan="Register med"
          onActionForm={() => {
            console.log("hola");
          }}
        />

        <ButtonRegister
          textP="I have an account"
          textSpan="Login"
          href="login"
        />
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </form>
  );
};

export default Register;
