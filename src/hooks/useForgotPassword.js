import { useState } from "react";
import { toast } from "react-hot-toast";
import validateEmail from "../utils/Login/validateEmail";
import { useTranslation } from "react-i18next";

    const useForgotPassword=()=>{
        const [email, setEmail] = useState("");
        const [errors, setErrors] = useState("");
        const [t]=useTranslation("global")    
        const notify = (message, icono) => {
          toast[icono](message);
        };
        
        const handleInput = (e) => {
          const { value, name } = e.target;
          setEmail(value);
          setErrors(validateEmail(name, value));
        };
        
        const handleActionForm = async (e) => {
          e.preventDefault();
          e.target.disabled = true;
          var errorEncontrado = validateEmail("email", email);
          if (errorEncontrado === "") {
            setEmail("");
            toast.remove();
            notify(t("forgot-password.message-send-link"), "success");
          } else {
            setErrors(errorEncontrado);
            toast.remove();    
            var minusculaError=errorEncontrado.toLowerCase()
            var replaceError=minusculaError.replace(/\s+/g, '-')
            notify(t('errors.'+replaceError), "error");
          }
          e.target.disabled = false;
        };

        return [
            {
                email,
                errors
            },
            {
                handleActionForm,
                handleInput
            }
        ]
    }

    export default useForgotPassword