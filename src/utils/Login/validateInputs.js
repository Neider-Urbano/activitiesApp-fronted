import validator from 'validator';

function validateInputs(key,value){
    var error=""
    if(value===""){
      error=key+ " is required"
    }
    else if(key==="password" && value.length<7){
      error=key+ " is too short"
    }
    else if(key==="email" && validator.isEmail(value)==false){
      error=key+ " is invalid"
    }
    return error
}

export default validateInputs