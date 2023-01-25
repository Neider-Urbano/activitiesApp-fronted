import { useState } from "react";
import toast from "react-hot-toast";
import validateInputs from "../utils/Login/validateInputs";

const initialState = {
  email: "",
  password: "",
};

const useLogin=()=>{
  const [dataUser, setDataUser] = useState(initialState);
  const [errors, setErrors] = useState("");
  const [intentosFallidos, setIntentosFallidos] = useState(0);
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
        errorEncontrado = "Has intentado ingresar varias veces";
      } else {
        e.target.disabled = false;
      }

      if (errorEncontrado === "") {
        setDataUser(initialState);
      } else {
        setErrors(errorEncontrado);
        toast.remove();
        notify(errorEncontrado);
        setIntentosFallidos(intentosFallidos + 1);
      }
  };

  
  return [
    {
      dataUser,
      errors
    },
    {
      handleActionForm,
      handleInput
    }
  ]
}

export default useLogin