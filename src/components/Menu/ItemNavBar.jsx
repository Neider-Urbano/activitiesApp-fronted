import React from "react";
import { Link } from "react-router-dom";
import { ContenedorDeIconoNav,UlItemNav,LiDeItemNav} from "../../style-components/public/Components";

const ItemsNavBar=({nombreDelItem})=> {
    return(
        <ContenedorDeIconoNav>
            <UlItemNav>
                <LiDeItemNav>
                    <Link to={nombreDelItem} className="p-3 rounded hover:underline md:bg-transparent md:text-violet-200 md:p-0 md:hover:text-white md:mx-10 lg:mx-20" aria-current="page">{nombreDelItem}</Link>
                </LiDeItemNav>
            </UlItemNav>
        </ContenedorDeIconoNav>
    )
};
export default ItemsNavBar;