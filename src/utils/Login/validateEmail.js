import validator from "validator";

function validateEmail(key, value) {
  var error = "";
  if (value === "") {
    error = key + " is required";
  } else if (key === "email" && validator.isEmail(value) == false) {
    error = key + " is invalid";
  }
  return error;
}

export default validateEmail;
