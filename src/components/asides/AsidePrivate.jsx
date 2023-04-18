import React from "react";
import { Sidebar, Accordion } from "flowbite-react";
import { Link } from "react-router-dom";

const AsidePrivate = ({ showSidebar, setShowSidebar }) => {
  return (
    <div
      className={
        "fixed overflow-hidden z-30 md:w-[280px] bg-gray-900 bg-opacity-25  inset-0 transform ease-in-out md:transition-opacity md:opacity-100 md:duration-500 md:translate-x-0 md:bg-transparent md:bg-opacity-0 md:pt-[55px]" +
        (showSidebar
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 -translate-x-full  ")
      }
    >
      <section
        className={
          " w-[65%] md:w-[250px] left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  md:translate-x-0" +
          (showSidebar ? " translate-x-0 " : " -translate-x-full ")
        }
      >
        <article className="relative w-full md:w-[250px] pb-5 flex flex-col overflow-y-auto h-full bg-white scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          <div className="w-full">
            <button
              onClick={() => setShowSidebar(false)}
              className="md:hidden text-gray-700 w-full text-right pr-[30px] pt-[20px]"
            >
              X
            </button>
          </div>
          <Sidebar aria-label="Default Sidebar example" className="w-full">
            <Sidebar.Items>
              <Accordion flush={true} arrowIcon={false}>
                <Accordion.Panel>
                  <Accordion.Title>Actividades</Accordion.Title>
                  <Accordion.Content>
                    <Sidebar.ItemGroup>
                      <Sidebar.Item href="#">New</Sidebar.Item>
                      <Sidebar.Item href="#">List</Sidebar.Item>
                      <Sidebar.Item href="#">Favorits</Sidebar.Item>
                      <Sidebar.Item>
                        <Link to="/dashboard/calendar">Calendario</Link>
                      </Sidebar.Item>
                    </Sidebar.ItemGroup>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>Aboutus</Accordion.Title>
                  <Accordion.Content>
                    <Sidebar.ItemGroup>
                      <Sidebar.Item href="#">Documentation</Sidebar.Item>
                      <Sidebar.Item href="#">Comunidad</Sidebar.Item>
                      <Sidebar.Item href="#">Novedades</Sidebar.Item>
                      <Sidebar.Item href="#">Help</Sidebar.Item>
                    </Sidebar.ItemGroup>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </Sidebar.Items>
          </Sidebar>
        </article>
      </section>
      <section
        className="w-full h-full cursor-pointer md:hidden"
        onClick={() => {
          setShowSidebar(false);
        }}
      ></section>
    </div>
  );
};

export default AsidePrivate;
