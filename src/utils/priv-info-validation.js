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
    newError.email = "Хоосон байж болохгүй.";
  } else if (emailTest(email) === true) {
    newError.email = "Тусгай тэмдэгт ашиглаж болохгүй.";
  }

  if (phoneNumber === "") {
    newError.phoneNumber = "Хоосон байж болохгүй.";
  } else if (isNumber(phoneNumber) === true) {
    newError.phoneNumber = "Тусгай тэмдэгт ашиглаж болохгүй.";
  } else if (!isLengthValid(phoneNumber, 8, 8) === true) {
    newError.phoneNumber = "Утасны дугаарын урт буруу байна.";
  }

  if (password === "") {
    newError.password = "Хоосон байж болохгүй.";
  } else if (!isLengthValid(password, 6, 10)) {
    newError.password = "6-c дээш тэмдэгт байх ёстой.";
  }

  if (confirmPassword === "") {
    newError.confirmPassword = "Хоосон байж болохгүй.";
  } else if (confirmation(confirmPassword, password)) {
    newError.confirmPassword = "Таны оруулсан нууц үг таарахгүй байна.";
  }

  const isValid = isEmpty(newError);

  return { isValid, newError };
};
