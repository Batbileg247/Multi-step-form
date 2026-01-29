import { isEmpty } from "./validation";

export const finalValidation = (formData, file) => {
  const targetYear = formData.birthDay.split("-")[0];

  const nowYear = new Date().getFullYear();

  let newError = {};

  if (formData.birthDay === "") {
    newError.birthDay = "Хоосон байж болохгүй.";
  } else if (nowYear - targetYear <= 18) {
    newError.birthDay = "Та 18 ба түүнээс дээш настай байх ёстой.";
  }

  if (file === null) {
    newError.pfpImage = "Хоосон байж болохгүй.";
  }

  const isValid = isEmpty(newError);

  return { isValid, newError };
};
