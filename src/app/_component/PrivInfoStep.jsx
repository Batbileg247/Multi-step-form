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

export const PrivInfoStep = ({
  formData,
  handleChange,
  handleNextStep,
  onPrev,
}) => {
  const { email, phoneNumber, password, confirmPassword } = formData;

  const [error, setError] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const updateError = (newError) => {
    setError({
      ...error,
      ...newError,
    });
  };

  const formValidation = () => {
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
          error={error.email}
          handleChange={onChange}
          nameholder="Email"
          placeholder="Your email"
          value={email}
          name="email"
        />
        <Input
          error={error.phoneNumber}
          handleChange={onChange}
          nameholder="Phone number"
          placeholder="Your phone number"
          value={phoneNumber}
          name="phoneNumber"
        />
        <Input
          error={error.password}
          handleChange={onChange}
          nameholder="Password"
          placeholder="Your password"
          value={password}
          name="password"
          type="password"
        />
        <Input
          error={error.confirmPassword}
          handleChange={onChange}
          nameholder="Confirm password"
          placeholder="confirm password"
          value={confirmPassword}
          name="confirmPassword"
          type="password"
        />
      </div>
      <div className="flex gap-2">
        <button
          onClick={onPrev}
          className="rounded-md w-52 hover:bg-gray-100 h-11 cursor-pointer gap-2 flex items-center justify-center text-base font-semibold bg-white text-black border border-[#CBD5E1] "
        >
          <img className="h-2" src="/arrowB.png" alt="arrow" />
          Back
        </button>
        <button
          onClick={onSubmit}
          className="rounded-md cursor-pointer gap-2 hover:opacity-80 flex items-center justify-center text-base font-semibold bg-[#121316] text-white w-full h-11"
        >
          Continue 2/3 <img className="h-5" src="/arrow.png" alt="arrow" />
        </button>
      </div>
    </div>
  );
};
