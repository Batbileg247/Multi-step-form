import { useState } from "react";
import { Input } from "./Input";

function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }
  return true;
}

export const PrivInfoStep = ({ formData, handleChange, handleNextStep }) => {
  const { firstName, lastName, userName } = formData;

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const updateError = (newError) => {
    setError({
      ...error,
      ...newError,
    });
  };


const formValidation = () => {

    function rergexTest (str) {
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

  const onSubmit = () => {
    const { isValid, newError } = formValidation();

    if (isValid) {
      handleNextStep();
    }

    updateError(newError);
  };

  const onChange = (event) => {
    setError({
      ...error,
      [event.target.name]: "",
    });
    handleChange(event);
  };

  return (
    <div className="flex flex-col gap-3 justify-between min-h-105">
      <div className="flex flex-col gap-3">
        <Input
          error={error.firstName}
          handleChange={onChange}
          nameholder="First name"
          placeholder="Your first name"
          value={firstName}
          name="firstName"
        />
        <Input
          error={error.lastName}
          handleChange={onChange}
          nameholder="Last name"
          placeholder="Your last name"
          value={lastName}
          name="lastName"
        />
        <Input
          error={error.userName}
          handleChange={onChange}
          nameholder="Username"
          placeholder="Your username"
          value={userName}
          name="userName"
        />
      </div>
      <button
        onClick={onSubmit}
        className="rounded-md cursor-pointer gap-2 flex items-center justify-center text-base font-semibold bg-[#121316] text-white w-full h-11"
      >
        Continue 1/3 <img className="h-5" src="/arrow.png" alt="arrow" />
      </button>
    </div>
  );
};
