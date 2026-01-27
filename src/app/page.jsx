"use client";

import { useState } from "react";
import { FormWrapper } from "./_component/FormWrapper";
import { UserInfoStep } from "./_component/UserInfoStep";
import { PrivInfoStep } from "./_component/PrivInfoStep";
import { FinalStep } from "./_component/FinalStep";

export default function Home() {
  const [step, setStep] = useState(3);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    birthDay: "",
    pfpImg: "",
  });

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
          handleChange={handleChange}
          formData={formData}
          handleNextStep={handleNextStep}
        />
      )}
      {step === 2 && (
        <PrivInfoStep
          handleChange={handleChange}
          formData={formData}
          handleNextStep={handleNextStep}
          onPrev={onPrev}
        />
      )}
      {step === 3 && (
        <FinalStep
          handleChange={handleChange}
          formData={formData}
          handleNextStep={handleNextStep}
          onPrev={onPrev}
        />
      )}
      {step === 4 && <div>Hi this is 4 step</div>}
    </FormWrapper>
  );
}
