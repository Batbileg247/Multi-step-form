import { privInfoValidation } from "@/utils/priv-info-validation";
import { Input } from "./Input";

export const PrivInfoStep = ({
  formData,
  onChange,
  error,
  updateError,
  handleNextStep,
  onPrev,
}) => {

  const onSubmit = () => {
    const { isValid, newError } = privInfoValidation(formData);

    if (isValid) {
      handleNextStep();
    }

    updateError(newError);
  };

  return (
    <div className="flex flex-col gap-3 justify-between min-h-105">
      <div className="flex flex-col gap-3">
        <Input
          error={error.email}
          handleChange={onChange}
          nameholder="Email"
          placeholder="Your email"
          value={formData.email}
          name="email"
        />
        <Input
          error={error.phoneNumber}
          handleChange={onChange}
          nameholder="Phone number"
          placeholder="Your phone number"
          value={formData.phoneNumber}
          name="phoneNumber"
        />
        <Input
          error={error.password}
          handleChange={onChange}
          nameholder="Password"
          placeholder="Your password"
          value={formData.password}
          name="password"
          type="password"
        />
        <Input
          error={error.confirmPassword}
          handleChange={onChange}
          nameholder="Confirm password"
          placeholder="confirm password"
          value={formData.confirmPassword}
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
