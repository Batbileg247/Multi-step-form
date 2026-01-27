export const AllSet = () => {
  return (
    <div className="flex flex-col gap-3 justify-between min-h-105">
      <div className="flex flex-col gap-3">
        <Input
          error={error.birthDay}
          handleChange={onChange}
          nameholder="Date of birth"
          placeholder="Your first name"
          value={birthDay}
          name="birthDay"
          type="date"
        />
        <div>
          <div className=" flex text-sm gap-1 font-semibold">
            <p>Profile image</p>
            <p className="text-[#E14942]">*</p>
          </div>

          {file ? (
            <div className="flex flex-row-reverse">
              <img
                src={preview}
                className="w-full h-45 object-cover rounded-md relative"
              />
              <button
                onClick={imgCancel}
                className="cursor-pointer m-4 w-6 h-6 bg-[#202124] text-white rounded-full absolute"
              >
                X
              </button>
            </div>
          ) : (
            <div>
              <div
                className={`border mt-2 bg-gray-100 border-[#CBD5E1] flex-col rounded-lg flex justify-center items-center ${error.pfpImage && "border-red-500"}`}
              >
                <input
                  className="w-full h-45 p-3 cursor-pointer relative z-10 opacity-0"
                  type="file"
                  onChange={handleFileChange}
                  name="pfpImage"
                  value={pfpImage}
                />
                <div className="absolute gap-2 flex flex-col z-0 items-center">
                  <img
                    src="/image.png"
                    alt="img"
                    className="h-7 w-7 bg-white p-2 rounded-full"
                  />
                  <p className="text-sm font-medium">Browse or Drop Image</p>
                </div>
              </div>
              <p className="text-xs text-red-500">{error.pfpImage}</p>
            </div>
          )}
        </div>
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
          Continue 3/3 <img className="h-5" src="/arrow.png" alt="arrow" />
        </button>
      </div>
    </div>
  );
};
