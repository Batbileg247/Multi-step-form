"use client";

import { useState } from "react";
import { FormWrapper } from "./_component/FormWrapper";
import { UserInfoStep } from "./_component/UserInfoStep";
import { PrivInfoStep } from "./_component/PrivInfoStep";
import { FinalStep } from "./_component/FinalStep";

const initialValue = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  birthDay: "",
  pfpImg: "",
};

export default function Home() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState(initialValue);
  const [error, setError] = useState(initialValue);

  const updateError = (newError) => {
    setError({
      ...error,
      ...newError,
    });
  };

  const onChange = (event) => {
    setError({
      ...error,
      [event.target.name]: "",
    });
    handleChange(event);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const onPrev = () => {
    setStep(step - 1);
  };

  return (
    <FormWrapper>
      {step === 1 && (
        <UserInfoStep
          onChange={onChange}
          formData={formData}
          error={error}
          handleNextStep={handleNextStep}
          updateError={updateError}
        />
      )}
      {step === 2 && (
        <PrivInfoStep
          onChange={onChange}
          formData={formData}
          error={error}
          handleNextStep={handleNextStep}
          onPrev={onPrev}
          updateError={updateError}
        />
      )}
      {step === 3 && (
        <FinalStep
          onChange={onChange}
          formData={formData}
          error={error}
          handleNextStep={handleNextStep}
          onPrev={onPrev}
          updateError={updateError}
        />
      )}
      {step === 4 && <div>Hi this is 4 step</div>}
    </FormWrapper>
  );
}
