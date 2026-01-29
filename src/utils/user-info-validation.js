import { isEmpty } from "./validation";

export const userInfoValidation = (formData) => {
  const { firstName, lastName, userName } = formData;

  function rergexTest(str) {
    const regex = /[^\w\s]/;
    return regex.test(str);
  }

  function hasNumbers(str) {
    return /\d/.test(str);
  }

  let newError = {};

  if (firstName === "") {
    newError.firstName = "Хоосон байж болохгүй.";
  } else if (rergexTest(firstName) === true) {
    newError.firstName = "Тусгай тэмдэгт ашиглаж болохгүй.";
  } else if (hasNumbers(firstName) === true) {
    newError.firstName = "Тoo ашиглаж болохгүй.";
  }

  if (lastName === "") {
    newError.lastName = "Хоосон байж болохгүй.";
  } else if (rergexTest(lastName) === true) {
    newError.lastName = "Тусгай тэмдэгт ашиглаж болохгүй.";
  } else if (hasNumbers(lastName) === true) {
    newError.lastName = "Тoo ашиглаж болохгүй.";
  }

  if (userName === "") {
    newError.userName = "Хоосон байж болохгүй.";
  } else if (rergexTest(userName) === true) {
    newError.userName = "Тусгай тэмдэгт ашиглаж болохгүй.";
  }

  const isValid = isEmpty(newError);

  return { isValid, newError };
};
