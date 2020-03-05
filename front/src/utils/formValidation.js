export function minLengthValidation(inputData, minLength) {
  const { value } = inputData;

  removeClassErrorSuccess(inputData);

  if (value.length >= minLength) {
    inputData.classList.add("Success");
    return true;
  } else {
    inputData.classList.add("Error");
    return false;
  }
}
export function emailValidation(inputData) {
  const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const { value } = inputData;

  removeClassErrorSuccess(inputData);

  const resultValidation = emailValid.test(value);
  if (resultValidation) {
    inputData.classList.add("Success");
    return true;
  } else {
    inputData.classList.add("Error");
    return false;
  }
}
function removeClassErrorSuccess(inputData) {
  inputData.classList.remove("Success");
  inputData.classList.remove("Error");
}
