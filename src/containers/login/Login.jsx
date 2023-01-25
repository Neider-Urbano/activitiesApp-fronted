import React from "react";
import { Main, DivContenedor, Form} from "../../style-components/login/Components";
import {GroupLabel,ButtonAutenticar,ButtonRegister,DivForgotPassword,} from "../../components/login/index";
import { Toaster } from "react-hot-toast";
import ButtonAzul from "../../components/Buttons/ButtonAzul";
import imgLogo from "../../assets/images/public/logoApp2.png"
import useLogin from "../../hooks/useLogin";
import useDarkProvider from "../../hooks/useDarkTheme";
import { OptionPage } from "../../components/optionPage/OptionPage";

const Login = () => {
  const [states, actions]=useLogin()
  const {dataUser}=states
  const {errors}=states
  const {handleActionForm}=actions
  const {handleInput}=actions
  const [statesOP,actionsOP]=useDarkProvider() 
  const {darkTheme,textIdioma}=statesOP.optionPage;

  return (
    <Main>
       <div className={`flex justify-center items-center min-w-[320px] min-h-[480px] h-full flex-col ${darkTheme ? "darkTheme": "divLogin"}`}>
        <OptionPage darkTheme={darkTheme} textIdioma={textIdioma} actionsOP={actionsOP}/>
        <DivContenedor>
          <div className="flex flex-col items-center">
            <img src={imgLogo} alt="logo app" className="h-[45px] w-[90px]"/>          
            <h1 className={`font-medium text-lg ${darkTheme ? "text-indigo-500" : "text-slate-700"}`}>Activities App</h1>
          </div>

          <div className="flex justify-between mt-5 md:mt-7 mb-3">
            <ButtonAutenticar
              urlImg="https://www.svgrepo.com/show/355037/google.svg"
              textSpan="Google"
              nameAut="google"
              darkTheme={darkTheme}
            />
            <ButtonAutenticar
              urlImg="https://www.svgrepo.com/show/158427/facebook.svg"
              textSpan="Facebook"
              nameAut="facebook"
              darkTheme={darkTheme}
            />
          </div>

          <div className={`flex justify-between items-center ${darkTheme ? "text-slate-300" : "text-slate-700"}`}>
            <hr className="w-[44%]" /> o <hr className="w-[44%]" />
          </div>

          <Form>
            <GroupLabel
              type="email"
              name="email"
              placeholder="Enter email address"
              valueData={dataUser.email}
              onInput={handleInput}
              error={errors.includes("email")}
              darkTheme={darkTheme}
            />
            <GroupLabel
              type="password"
              name="password"
              placeholder="Enter your password"
              valueData={dataUser.password}
              onInput={handleInput}
              error={errors.includes("password")}
              darkTheme={darkTheme}
            />

            <DivForgotPassword textA="Forgot password?" />


            <ButtonAzul textSpan="Login" onActionForm={handleActionForm} />

            <ButtonRegister
              textP="Not registered yet"
              textSpan="register now"
              href="register"
              darkTheme={darkTheme}
            />
          </Form>
        </DivContenedor>
      </div>

      <Toaster position="bottom-center" reverseOrder={false} />
    </Main>
  );
};

export default Login;
