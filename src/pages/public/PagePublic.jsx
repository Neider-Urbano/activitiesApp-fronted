import React from "react";
import NavBar from "../../containers/public/NavBar";
import InterfazDelFondo from "../../containers/public/IntefazDelFondo";
import { StyledPagePublic } from "../../style-components/public/Components";
import Footer from "../../containers/public/Footer/Footer";

const PagePublic = () => {
  return (
    <div className="bg-black">
      <NavBar />
      <StyledPagePublic>
        <InterfazDelFondo />
        {/* <Footer/> */}
      </StyledPagePublic>
    </div>
  );
};
export default PagePublic;
