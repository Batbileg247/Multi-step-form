export const Input = ({ type = 'text', nameholder, placeholder, name, value, handleChange, error }) => {
    return (<div >
        <div className=" flex text-sm gap-1 font-semibold">
            <p>{nameholder}</p><p className="text-[#E14942]">*</p>
        </div>
        <input className={`border border-[#CBD5E1] mt-2 p-3 w-full h-11 rounded-lg ${error && 'border-red-500'}`}
            type={type}
            onChange={handleChange}
            placeholder={placeholder}
            name={name}
            value={value} />
        <p className="text-xs text-red-500">{error}</p>
    </div>)
}


