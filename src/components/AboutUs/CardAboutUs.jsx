import React from "react";
import { ContenedorExternoCard,ContenedorInternoCard,
    ImageCard,ContenedorBotonesCard,TextCard,TittleCard} from "../../style-components/public/Components";
   
const CardAboutUs=({id,imageCard,nombre,apellido})=>{
  return (
    <ContenedorExternoCard>
        <ContenedorInternoCard>
            <ImageCard src={imageCard} alt="Bonnie image"/>
            <TittleCard>{nombre+" "+apellido}</TittleCard>
            <TextCard>Fullstack developer</TextCard>
            <ContenedorBotonesCard>
                <a href={id} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                <a href={id} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
            </ContenedorBotonesCard>
        </ContenedorInternoCard>
    </ContenedorExternoCard>
  )
};
export default CardAboutUs;