import React from "react";
import { ButtonRegister, GroupLabel } from "../../components/login";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import validateInputs from "../../utils/Register/validateInputs";
import ButtonAzul from "../../components/Buttons/ButtonAzul";

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
  const notify = (message, icono) => {
    toast[icono](message);
  };

  const handleInput = (e) => {
    const { value, name } = e.target;
    setDataUser({
      ...dataUser,
      [name]: value,
    });
    setErrors(validateInputs(name, value, dataUser));
  };

  const handleActionForm = async (e) => {
    e.preventDefault();
    e.target.disabled = true;
    var errorEncontrado = "";
    Object.keys(dataUser).map((key) => {
      if (errorEncontrado === "")
        errorEncontrado = validateInputs(key, dataUser[key], dataUser);
    });
    if (errorEncontrado === "") {
      setDataUser(initialState);
      toast.remove();
      notify("registered account", "success");
    } else {
      setErrors(errorEncontrado);
      toast.remove();
      notify(errorEncontrado, "error");
    }
    e.target.disabled = false;
  };

  return (
    <form className="my-10">
      <div className="flex flex-col space-y-5">
        <div className="flex space-x-5">
          <GroupLabel
            type="text"
            name="firstname"
            placeholder="Enter first name"
            valueData={dataUser.firstname}
            onInput={handleInput}
            error={errors.includes("firstname")}
          />
          <GroupLabel
            type="text"
            name="lastname"
            placeholder="Enter last name"
            valueData={dataUser.lastname}
            onInput={handleInput}
            error={errors.includes("lastname")}
          />
        </div>

        <GroupLabel
          type="email"
          name="email"
          placeholder="Enter your email"
          valueData={dataUser.email}
          onInput={handleInput}
          error={errors.includes("email")}
        />

        <GroupLabel
          type="password"
          name="password"
          placeholder="Enter your password"
          valueData={dataUser.password}
          onInput={handleInput}
          error={errors.includes("password")}
        />

        <GroupLabel
          type="password"
          name="passwordconfirm"
          placeholder="Enter confirm your password"
          valueData={dataUser.passwordconfirm}
          onInput={handleInput}
          error={errors.includes("different")}
        />

        <ButtonAzul textSpan="Register med" onActionForm={handleActionForm} />

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
