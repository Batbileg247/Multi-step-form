import { Input } from "./Input";
import { userInfoValidation } from "@/utils/user-info-validation";

export const UserInfoStep = ({
  formData,
  onChange,
  handleNextStep,
  updateError,
  error,
}) => {

  const onSubmit = () => {
    const { isValid, newError } = userInfoValidation(formData);

    if (isValid) {
      handleNextStep();
    }

    updateError(newError);
  };

  return (
    <div className="flex flex-col gap-3 justify-between min-h-105">
      <div className="flex flex-col gap-3">
        <Input
          error={error.firstName}
          handleChange={onChange}
          nameholder="First name"
          placeholder="Your first name"
          value={formData.firstName}
          name="firstName"
        />
        <Input
          error={error.lastName}
          handleChange={onChange}
          nameholder="Last name"
          placeholder="Your last name"
          value={formData.lastName}
          name="lastName"
        />
        <Input
          error={error.userName}
          handleChange={onChange}
          nameholder="Username"
          placeholder="Your username"
          value={formData.userName}
          name="userName"
        />
      </div>
      <button
        onClick={onSubmit}
        className="rounded-md cursor-pointer gap-2 flex items-center hover:opacity-80 justify-center text-base font-semibold bg-[#121316] text-white w-full h-11"
      >
        Continue 1/3 <img className="h-5" src="/arrow.png" alt="arrow" />
      </button>
    </div>
  );
};
