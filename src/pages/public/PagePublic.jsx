import React from "react";
import NavBar from "../../containers/menu/NavBar";
import InterfazDelFondo from "../../containers/menu/IntefazDelFondo";
import { StyledPagePublic} from "../../style-components/public/Components";

const PagePublic=()=>{
    return(
        <StyledPagePublic>
                <NavBar/>
                <InterfazDelFondo/>
        </StyledPagePublic>
    )
};
export default PagePublic;
