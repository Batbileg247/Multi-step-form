import { isEmpty } from "./validation";

export const privInfoValidation = (formData) => {
  const { email, phoneNumber, password, confirmPassword } = formData;

  function isNumber(str) {
    return /\D/.test(str);
  }

  const isLengthValid = (str, min, max) => {
    return str.length >= min && str.length <= max;
  };

  function emailTest(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailPattern.test(email);
  }

  function confirmation(pass, password) {
    return pass !== password;
  }

  let newError = {};

  if (email === "") {
    newError.email = "Мэйл хаягаа оруулна уу.";
  } else if (emailTest(email) === true) {
    newError.email = "Зөв мэйл хаягаа оруулна уу.";
  }

  if (phoneNumber === "") {
    newError.phoneNumber = "Утасны дугаараа оруулна уу.";
  } else if (isNumber(phoneNumber) === true) {
    newError.phoneNumber = "Зөв утасны дугаар оруулна уу.";
  } else if (!isLengthValid(phoneNumber, 8, 8) === true) {
    newError.phoneNumber = "Утасны дугаарын урт буруу байна.";
  }

  if (password === "") {
    newError.password = "Нууц үгээ оруулна уу.";
  } else if (!isLengthValid(password, 6, 10)) {
    newError.password = "6-c дээш тэмдэгт байх ёстой.";
  }

  if (confirmPassword === "") {
    newError.confirmPassword = "Нууц үгээ давтаж оруулна уу.";
  } else if (confirmation(confirmPassword, password)) {
    newError.confirmPassword = "Таны оруулсан нууц үг таарахгүй байна.";
  }

  const isValid = isEmpty(newError);

  return { isValid, newError };
};
