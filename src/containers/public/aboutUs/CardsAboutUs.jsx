import React from "react"
import CardAboutUs from "../../../components/AboutUs/CardAboutUs";
import { ContenedorDeCards } from "../../../style-components/public/Components";
import ema from "../../../assets/images/public/ema.png";
import neider from "../../../assets/images/public/neider.png";
import Slogan from "../../../components/AboutUs/Slogan";

const CardsAboutUs=()=> {
    return(
    <div className="max-w-7xl xl:mx-auto border border-gray-800">
        <Slogan/>
        <ContenedorDeCards>
            <CardAboutUs id="#formularioEmanuel" imageCard={ema} nombre="Emanuel" apellido="Carballal"/>
            <CardAboutUs id="#formularioNeider"  imageCard={neider} nombre="Neider" apellido="Urbano"/>
        </ContenedorDeCards>
    </div>
    )
}
export default CardsAboutUs;