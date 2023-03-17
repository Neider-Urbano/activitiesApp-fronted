import React from "react";
import Interfaz from "../../containers/public/IntefazDelFondo";
import FormMessage from "../../components/forms/FormMessage";
import Footer from "../../containers/public/footer/Footer";
import Cards from "../../containers/public/aboutUs/CardsAboutUs";


/*probando para pasar option page a los distintos componentes de la pagina*/ 
const PagePublic = () => {
  return (
    <div>
      <Interfaz/>
      <div>
        <div className="max-h-max w-full pt-1 px-2 bg-gray-900">
          <Cards/>
        </div>
        
        <div className="bg-gray-800">
          <div className="inline lg:max-w-7xl">
            <iframe  className="hidden mx-auto md:flex md:w-full lg:max-w-7xl border border-gray-700" 
              width="800" height="900" 
              src="https://www.youtube.com/embed/hAuJN09D8Ng?start=10" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
          </div>
        </div>
        <FormMessage/>
        <Footer/>
      </div>
    </div>
  );
};
export default PagePublic;
