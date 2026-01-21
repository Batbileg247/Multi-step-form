'use client'

import { useState } from "react"

export default function Home() {
  const [value, setValue] = useState("")

  const click = () => {
    console.log(value)
    setValue("")
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (<div className="w-screen h-screen flex justify-center items-center ">
    <div className="bg-white w-120 p-8 rounded-lg">
      <header>
        <img className="h-15 w-15" src="/main.png" alt="logo" />
        <h1 className="text-[26px] font-semibold mt-2">Join Us! 😎</h1>
        <h2 className="text-[#8E8E8E] text-lg mt-2">Please provide all current information accurately.</h2>
      </header>
      <section className="mt-7 flex flex-col justify-between min-h-105">
        <div className="flex flex-col gap-3">
          {<div>
            <div className="flex text-sm gap-1 font-semibold">
              <p className="">First name</p><p className="text-[#E14942]">*</p>
            </div>
            <input className="border border-[#CBD5E1] mt-2 p-3 w-full h-11 rounded-lg"
              type="text"
              onChange={handleChange}
              placeholder="Your first name"
              value={value} />
          </div>}
        </div>
        <button onClick={click} className="rounded-md cursor-pointer gap-2 flex items-center justify-center text-base font-semibold bg-[#121316] text-white w-full h-11">Continue 1/3 <img className="h-5" src="/arrow.png" alt="arrow" /></button>
      </section>
    </div>
  </div>
  );
}
