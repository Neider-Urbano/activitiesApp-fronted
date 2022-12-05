import validator from "validator";

function validateInputs(key, value, dataUser) {
  var error = "";
  if (value === "" && key !== "passwordconfirm") {
    error = key + " is required";
  } else if ((key === "firstname" || key === "lastname") && value.length < 3) {
    error = key + " is too short";
  } else if (key === "password") {
    let patronLetra = /(?=(.*[a-bA-B])).{1,}/;
    let patronNumero = /(?=(.*[0-9])).{1,}/;
    if (!patronLetra.test(value)) {
      error = key + ", at least one letter";
    } else if (!patronNumero.test(value)) {
      error = key + ", at least one number";
    } else if (value.length < 7) {
      error = key + " is too short";
    }
  } else if (key === "passwordconfirm" && value != dataUser.password) {
    error = "different passwords";
  } else if (key === "email" && validator.isEmail(value) == false) {
    error = key + " is invalid";
  }
  return error;
}

export default validateInputs;
