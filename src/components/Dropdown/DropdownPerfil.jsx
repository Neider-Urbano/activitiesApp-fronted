import React from "react";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import imgUser from "../../assets/images/public/neider.png";
import { Dropdown } from "flowbite-react";
import { faCookie, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownPerfil = () => {
  return (
    <Dropdown
      label={
        <div className="flex items-center">
          <div className="overflow-hidden w-[31px] h-[31px] p-1 rounded-full ring-2 ring-primary md:mr-2">
            <img className="w-full" src={imgUser} alt="img user" />
          </div>
          <p className="hidden md:block">Bonnie Green</p>
        </div>
      }
      className="w-[240px]"
      placement="bottom-start"
      inline="true"
      pill="true"
    >
      <Dropdown.Header>
        <span className="block text-md">Bonnie Green</span>
        <span className="block text-md font-medium truncate">
          bonnie@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        <Link
          to="/dashboard/perfil"
          className="flex gap-2 text-md items-center"
        >
          <FontAwesomeIcon icon={faCircleUser} />
          <p>perfil</p>
        </Link>
      </Dropdown.Item>
      <Dropdown.Item className="flex gap-2 text-md items-center">
        <FontAwesomeIcon icon={faCookie} />
        <p>preferencias de cookies</p>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        <Link to="/" className="flex gap-2 text-md items-center">
          <FontAwesomeIcon icon={faPowerOff} />
          <p>Cerrar sesión</p>
        </Link>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default DropdownPerfil;
