import React from "react";
import { Toaster } from "react-hot-toast";
import ButtonRed from "../../components/Buttons/ButtonRed";
import { ButtonRegister, GroupLabel } from "../../components/login";
import { OptionPage } from "../../components/optionPage/OptionPage";
import useDarkProvider from "../../hooks/useDarkTheme";
import useForgotPassword from "../../hooks/useForgotPassword";
import { DivContenedor, Main } from "../../style-components/login/Components";

const ForgotPassword = () => {
  const [states, actions] = useForgotPassword();
  const { email } = states;
  const { errors } = states;
  const { handleActionForm } = actions;
  const { handleInput } = actions;
  
  //idioma
  const [statesOP, actionsOP, t] = useDarkProvider();
  const { darkTheme, textIdioma } = statesOP.optionPage;

  return (
    <Main className={`${darkTheme ? "darkTheme" : "divLogin"}`}>
      <div
        className={`flex items-center w-[320px] min-w-[320px] min-h-[480px] max-w-[1500px] flex-col pt-[80px]`}
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
          <form className="flex flex-col space-y-5">
            <h1
              className={`text-center font-medium text-slate-800 ${
                darkTheme && "text-slate-200"
              }`}
            >
              {t("login.forgot-password")}
            </h1>
            <p
              className={`text-justify text-slate-800 ${
                darkTheme && "text-slate-300"
              }`}
            >
              {t("forgot-password.message-forgot")}
            </p>
            <GroupLabel
              type="email"
              name="email"
              placeholder={t("forms.enter-email-address")}
              valueData={email}
              onInput={handleInput}
              error={errors.includes("email")}
              darkTheme={darkTheme}
            />

            <ButtonRed
              textSpan={t("forgot-password.reset")}
              onActionForm={handleActionForm}
            />

            <ButtonRegister
              textP={t("forgot-password.return-to")}
              textSpan={t("login.login").toLowerCase()}
              href="login"
              darkTheme={darkTheme}
            />
          </form>
        </DivContenedor>
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </Main>
  );
};

export default ForgotPassword;
