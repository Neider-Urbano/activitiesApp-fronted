import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ButtonRed from "../../components/Buttons/ButtonRed";
import { ButtonRegister, GroupLabel } from "../../components/login";
import validateEmail from "../../utils/Login/validateEmail";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const notify = (message, icono) => {
    toast[icono](message);
  };

  const handleInput = (e) => {
    const { value, name } = e.target;
    setEmail(value);
    setErrors(validateEmail(name, value));
  };

  const handleActionForm = async (e) => {
    e.preventDefault();
    e.target.disabled = true;
    var errorEncontrado = validateEmail("email", email);
    if (errorEncontrado === "") {
      setEmail("");
      toast.remove();
      notify("We have sent a link to your email", "success");
    } else {
      setErrors(errorEncontrado);
      toast.remove();
      notify(errorEncontrado, "error");
    }
    e.target.disabled = false;
  };

  return (
    <form className="w-1/2 md:w-2/5 lg:w-1/4">
      <div className="flex flex-col space-y-5">
        <h1 className="text-center font-medium">Forgot Your Password?</h1>
        <p className="text-justify text-neutral-600">
          We get it, stuff happens. Just enter your email address below and
          we'll send you a link to reset your password!
        </p>
        <GroupLabel
          type="email"
          name="email"
          placeholder="Enter your email"
          valueData={email}
          onInput={handleInput}
          error={errors.includes("email")}
        />

        <ButtonRed textSpan="Reset" onActionForm={handleActionForm} />

        <ButtonRegister textP="To return to" textSpan="Login" href="login" />
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </form>
  );
};

export default ForgotPassword;
