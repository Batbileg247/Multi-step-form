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

export const UserInfoStep = ({ formData, handleChange, handleNextStep }) => {
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
    let newError = {};

    if (firstName === "") {
      newError["firstName"] = "hooson bj bolohgui";
    } else if (firstName !== "") {
      newError["firstName"] = true;
    }

    if (lastName === "") {
      newError["lastName"] = "hooson bj bolohgui";
    }else if (firstName !== "") {
      newError["lastName"] = true;
    }

    if (userName === "") {
      newError["userName"] = "hooson bj bolohgui";
    }else if (firstName !== "") {
      newError["userName"] = true;
    }

    const isValid = isEmpty(newError);

    return { isValid, newError };
  };

  const onSubmit = () => {
    const { isValid, newError } = formValidation();

    if (isValid) {
      handleNextStep();
    }

    console.log(isValid);
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
