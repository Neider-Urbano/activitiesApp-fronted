import React from "react";
import { ButtonRegister, GroupLabel } from "../../components/login";
import { Toaster } from "react-hot-toast";
import ButtonAzul from "../../components/Buttons/ButtonAzul";
import imgRegister from "../../assets/images/register3.png";
import { Main } from "../../style-components/login/Components";
import { OptionPage } from "../../components/optionPage/OptionPage";
import useRegister from "../../hooks/useRegister";
import useDarkProvider from "../../hooks/useDarkTheme";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/images/public/logoApp2.png";

const Register = () => {
  const [states, actions] = useRegister();
  const { dataUser } = states;
  const { errors } = states;
  const { handleActionForm } = actions;
  const { handleInput } = actions;
  const [statesOP, actionsOP, t] = useDarkProvider();
  const { darkTheme, textIdioma } = statesOP.optionPage;

  return (
    <Main className={`${darkTheme ? "darkTheme" : "divLogin"}`}>
      <div
        className={`flex items-center w-auto min-w-[320px] min-h-[480px] max-w-[1500px] flex-col py-[80px]`}
      >
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <div className="w-full px-[30px] py-[30px] max-w-[1500px]">
            <OptionPage
              darkTheme={darkTheme}
              textIdioma={textIdioma}
              actionsOP={actionsOP}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full md:w-auto lg:w-2/5 px-[20px] md:pl-[80px] md:pr-[40px]">
            <Link to="/">
              <div className="flex flex-col items-center cursor-pointer">
                <img
                  src={imgLogo}
                  alt="logo app"
                  className="h-[45px] w-[90px]"
                />
                <h1
                  className={`font-medium text-lg ${
                    darkTheme ? "text-indigo-500" : "text-slate-700"
                  }`}
                >
                  Activities App
                </h1>
              </div>
            </Link>
            <form className="my-6 flex flex-col space-y-5">
              <div className="flex space-x-5">
                <GroupLabel
                  type="text"
                  name="firstname"
                  placeholder={t("forms.enter-first-name")}
                  valueData={dataUser.firstname}
                  onInput={handleInput}
                  error={errors.includes("firstname")}
                  darkTheme={darkTheme}
                />
                <GroupLabel
                  type="text"
                  name="lastname"
                  placeholder={t("forms.enter-last-name")}
                  valueData={dataUser.lastname}
                  onInput={handleInput}
                  error={errors.includes("lastname")}
                  darkTheme={darkTheme}
                />
              </div>

              <GroupLabel
                type="email"
                name="email"
                placeholder={t("forms.enter-email-address")}
                valueData={dataUser.email}
                onInput={handleInput}
                error={errors.includes("email")}
                darkTheme={darkTheme}
              />

              <GroupLabel
                type="password"
                name="password"
                placeholder={t("forms.enter-your-password")}
                valueData={dataUser.password}
                onInput={handleInput}
                error={errors.includes("password")}
                darkTheme={darkTheme}
              />

              <GroupLabel
                type="password"
                name="passwordconfirm"
                placeholder={t("forms.confirm-your-password")}
                valueData={dataUser.passwordconfirm}
                onInput={handleInput}
                error={errors.includes("different")}
                darkTheme={darkTheme}
              />

              <ButtonAzul
                textSpan={t("register.register-me")}
                onActionForm={handleActionForm}
              />

              <ButtonRegister
                textP={t("register.i-have-an-account")}
                textSpan={t("login.login").toLowerCase()}
                href="login"
                darkTheme={darkTheme}
              />
              <Toaster position="bottom-center" reverseOrder={false} />
            </form>
          </div>
          <div className="w-3/5 hidden md:flex justify-center items-center h-full">
            <img
              src={imgRegister}
              alt="imagen principal de pagina de registro"
              className="lg:w-[95%] lg:h-[95%]"
            />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Register;
