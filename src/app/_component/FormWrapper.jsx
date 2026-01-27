export const FormWrapper = ({ children }) => {
  if (children[3]) {
    return (
      <div className="w-screen h-screen flex justify-center items-center ">
        <div className="bg-white w-120 p-8 rounded-lg">
          <header>
            <img className="h-15 w-15" src="/main.png" alt="logo" />
            <h1 className="text-[26px] font-bold tracking-wide mt-2">
              You're All Set! 🔥
            </h1>
            <h2 className="text-[#8E8E8E] font-semibold text-lg mt-2">
              We've received your submission. Thank you!
            </h2>
          </header>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="bg-white w-120 p-8 rounded-lg">
        <header>
          <img className="h-15 w-15" src="/main.png" alt="logo" />
          <h1 className="text-[26px] font-bold tracking-wide mt-2">
            Join Us! 😎
          </h1>
          <h2 className="text-[#8E8E8E] font-semibold text-lg mt-2">
            Please provide all current information accurately.
          </h2>
        </header>
        <section className="mt-7">{children}</section>
      </div>
    </div>
  );
};
