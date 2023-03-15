import React from "react";
import Interfaz from "../../containers/public/IntefazDelFondo";
import FormMessage from "../../components/formMessage/FormMessage";
import Footer from "../../containers/public/footer/Footer";
import Cards from "../../containers/public/aboutUs/CardsAboutUs";

import useDarkProvider from "../../hooks/useDarkTheme";
import { OptionPage } from "../../components/optionPage/OptionPage";


/*probando para pasar option page a los distintos componentes de la pagina*/ 
const PagePublic = () => {
  return (
    <div>
      <Interfaz/>
      <div>
        <div className="max-h-max w-full pt-1 px-2 bg-gray-900">
          <Cards/>
        </div>
        <FormMessage/>
        <Footer/>
      </div>
    </div>
  );
};
export default PagePublic;
