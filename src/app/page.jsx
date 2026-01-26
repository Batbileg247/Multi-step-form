'use client'

import { useState } from "react"
import { FormWrapper } from "./_component/FormWrapper"
import { UserInfoStep } from "./_component/UserInfoStep"
import { PrivInfoStep } from "./_component/PrivInfoStep"

export default function Home() {
  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleNextStep = () => {
    setStep(step + 1)
  } 



  return (<FormWrapper>
        {step === 1 && <UserInfoStep handleChange={handleChange} formData={formData} handleNextStep={handleNextStep} />}
        {step === 2 && <PrivInfoStep handleChange={handleChange} formData={formData} handleNextStep={handleNextStep} />}
  </FormWrapper>
  );
}



