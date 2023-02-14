import { useState } from "react";
import toast from "react-hot-toast";
import validateInputs from "../utils/Login/validateInputs";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const useLogin = () => {
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState(initialState);
  const [errors, setErrors] = useState("");
  const [intentosFallidos, setIntentosFallidos] = useState(0);
  const [t] = useTranslation("global");
  const notify = (error) => toast.error(error);

  const handleInput = (e) => {
    const { value, name } = e.target;
    setDataUser({
      ...dataUser,
      [name]: value,
    });
    setErrors(validateInputs(name, value));
  };

  const handleActionForm = (e) => {
    e.preventDefault();
    e.target.disabled = true;
    var errorEncontrado = "";
    Object.keys(dataUser).map((key) => {
      if (errorEncontrado === "")
        errorEncontrado = validateInputs(key, dataUser[key]);
    });

    if (intentosFallidos + 1 > 4) {
      errorEncontrado = "tried-to-log-in-multiple-times";
    } else {
      e.target.disabled = false;
    }

    if (errorEncontrado === "") {
      setDataUser(initialState);
      navigate("/home");
    } else {
      setErrors(errorEncontrado);
      toast.remove();
      var minusculaError = errorEncontrado.toLowerCase();
      var replaceError = minusculaError.replace(/\s+/g, "-");
      notify(t("errors." + replaceError));
      setIntentosFallidos(intentosFallidos + 1);
    }
  };

  return [
    {
      dataUser,
      errors,
    },
    {
      handleActionForm,
      handleInput,
    },
  ];
};

export default useLogin;
