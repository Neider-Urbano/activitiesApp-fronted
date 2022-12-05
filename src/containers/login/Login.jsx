import React, { useState } from "react";
import {
  Main,
  DivContenedor,
  Form,
} from "../../style-components/login/Components";
import {
  GroupLabel,
  ButtonAutenticar,
  ButtonLogin,
  ButtonRegister,
  DivForgotPassword,
} from "../../components/login/index";
import { Player } from "@lottiefiles/react-lottie-player";
import toast, { Toaster } from "react-hot-toast";
import validateInputs from "../../utils/Login/validateInputs";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [dataUser, setDataUser] = useState(initialState);
  const [errors, setErrors] = useState("");
  const [intentosFallidos, setIntentosFallidos] = useState(0);
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

    if (intentosFallidos + 1 > 4) {
      errorEncontrado = "Has intentado ingresar varias veces";
    } else {
      e.target.disabled = false;
    }

    if (errorEncontrado === "") {
      setDataUser(initialState);
    } else {
      setErrors(errorEncontrado);
      toast.remove();
      notify(errorEncontrado);
      setIntentosFallidos(intentosFallidos + 1);
    }
  };

  return (
    <Main>
      <div className="flex justify-center items-center h-[100vh]">
        <DivContenedor>
          <h1 className="text-xl font-medium text-slate-900">Login</h1>

          <div className="flex justify-between my-5">
            <ButtonAutenticar
              urlImg="https://www.svgrepo.com/show/355037/google.svg"
              textSpan="Google"
              nameAut="google"
            />
            <ButtonAutenticar
              urlImg="https://www.svgrepo.com/show/158427/facebook.svg"
              textSpan="Facebook"
              nameAut="facebook"
            />
          </div>

          <div className="flex justify-between items-center">
            <hr className="w-[45%]" /> o <hr className="w-[45%]" />
          </div>

          <Form>
            <GroupLabel
              type="email"
              name="email"
              placeholder="Enter email address"
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

            <DivForgotPassword textA="Forgot Password?" />

            <ButtonLogin textSpan="Login" onActionForm={handleActionForm} />
            <ButtonRegister
              textP="Not registered yet"
              textSpan="Register now"
              href="register"
            />
          </Form>
        </DivContenedor>

        <div
          className="hidden md:block ml-[20px] lg:ml-[50px] w-[30%]"
          key="loadImg"
        >
          <Player
            src="https://assets7.lottiefiles.com/packages/lf20_tpnk0wok.json"
            className="player"
            loop
            autoplay
          />
        </div>
      </div>

      <Toaster position="bottom-center" reverseOrder={false} />
    </Main>
  );
};

export default Login;
