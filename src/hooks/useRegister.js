import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import validateInputs from "../utils/Register/validateInputs";


const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  passwordconfirm: "",
};

const useRegister=()=>{
    const [dataUser, setDataUser] = useState(initialState);
    const [errors, setErrors] = useState("");
    const [t]=useTranslation("global")
    const notify = (message, icono) => {
        toast[icono](message);
    };

    const handleInput = (e) => {
        const { value, name } = e.target;
        setDataUser({
            ...dataUser,
            [name]: value,
        });
        setErrors(validateInputs(name, value, dataUser));
    };

    const handleActionForm = async (e) => {
        e.preventDefault();
        e.target.disabled = true;
        var errorEncontrado = "";
        Object.keys(dataUser).map((key) => {
            if (errorEncontrado === "")
                errorEncontrado = validateInputs(key, dataUser[key], dataUser);
        });
        if (errorEncontrado === "") {
            setDataUser(initialState);
            toast.remove();
            notify(t("errors.registered-account"), "success");
        } else {
            setErrors(errorEncontrado);
            toast.remove();
            var minusculaError=errorEncontrado.toLowerCase()
            var replaceError=minusculaError.replace(/\s+/g, '-')
            notify(t('errors.'+replaceError),"error");
        }
        e.target.disabled = false;
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

export default useRegister