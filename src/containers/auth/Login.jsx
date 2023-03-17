import React from "react";
import {
  Main,
  DivContenedor,
  Form,
  ContenedorForgotPassword,
} from "../../style-components/login/Components";
import { Toaster } from "react-hot-toast";
import ButtonAzul from "../../components/Buttons/ButtonAzul";
import useLogin from "../../hooks/useLogin";
import useDarkProvider from "../../hooks/useDarkTheme";
import { OptionPage } from "../../components/optionPage/OptionPage";
import { Link } from "react-router-dom";
import ButtonAutenticar from "../../components/Buttons/ButtonAutenticar";
import ButtonRegister from "../../components/Buttons/ButtonRegister";
import LabelPrimary from "../../components/Labels/LabelPrimary";
import LinkLogoPublic from "../../components/Links/LinkLogoPublic";

const Login = () => {
  const [states, actions] = useLogin();
  const { dataUser } = states;
  const { errors } = states;
  const { handleActionForm } = actions;
  const { handleInput } = actions;
  const [statesOP, actionsOP, t] = useDarkProvider();
  const { darkTheme, textIdioma } = statesOP.optionPage;

  return (
    <Main className={`${darkTheme ? "darkTheme" : "divLogin"}`}>
      <div
        className={`flex items-center w-[320px] min-w-[320px] min-h-[480px] max-w-[1500px] flex-col py-[80px]`}
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
        <DivContenedor>
          <LinkLogoPublic darkTheme={darkTheme} />

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

          <div
            className={`flex justify-between items-center ${
              darkTheme ? "text-slate-300" : "text-slate-700"
            }`}
          >
            <hr className="w-[44%]" /> {t("login.o")} <hr className="w-[44%]" />
          </div>

          <Form>
            <LabelPrimary
              type="email"
              name="email"
              placeholder={t("forms.enter-email-address")}
              valueData={dataUser.email}
              onInput={handleInput}
              error={errors.includes("email")}
              darkTheme={darkTheme}
            />
            <LabelPrimary
              type="password"
              name="password"
              placeholder={t("forms.enter-your-password")}
              valueData={dataUser.password}
              onInput={handleInput}
              error={errors.includes("password")}
              darkTheme={darkTheme}
            />

            <ContenedorForgotPassword>
              <Link
                to="/forgotpassword"
                className="text-indigo-600 font-normal text-[15.5px] hover:font-medium"
              >
                {t("login.forgot-password")}
              </Link>
            </ContenedorForgotPassword>

            <ButtonAzul
              textSpan={t("login.login")}
              onActionForm={handleActionForm}
              isDisabled={errors.includes("multiple-times") && true}
            />

            <ButtonRegister
              textP={t("login.not-registered-yet")}
              textSpan={t("login.register-now")}
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