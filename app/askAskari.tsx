"use client";

import { useState } from "react";

const askAskari = () => {
  const [answer, setAnswer] = useState(false);
  const [inputs, setActiveInputs] = useState({
    input1: false,
    input2: false,
  });
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-6">
      <h1 className="mt-2">سوال های بی جوابتو از عسکری بپرس</h1>
      <div className="flex items-center gap-3 mt-4 relative p-4">
        <div
          className="flex flex-col relative"
          onFocus={(e) => {
            setActiveInputs({
              input1: true,
              input2: inputs.input2,
            });
          }}
        >
          <label
            className={`absolute h-[2rem] transition-all ${
              inputs.input1
                ? `-top-[1rem] -translate-y-[0%]`
                : `top-[50%] -translate-y-[50%]`
            } bg-white px-2 right-4 flex items-center`}
          >
            عنوان سوال
          </label>
          <input type={"text"} className="border-2  rounded p-2" required />
        </div>
        <div
          className="flex flex-col relative"
          onFocus={(e) => {
            setActiveInputs({
              input1: inputs.input1,
              input2: true,
            });
          }}
        >
          <label
            className={`absolute h-[2rem] transition-all ${
              inputs.input2
                ? `-top-[1rem] -translate-y-[0%]`
                : `top-[50%] -translate-y-[50%]`
            } bg-white px-2 right-4 flex items-center`}
          >
            سوال :
          </label>
          <input type={"text"} className="border-2  rounded p-2" required />
        </div>
        <input
          type={"submit"}
          onClick={(e) => {
            e.preventDefault();
            setAnswer(true);
          }}
          value="سوال بپرس"
          className="border-2 border:green-50 p-2 rounded bg-green-200 transition-all hover:drop-shadow-xl hover:-translate-y-[.15rem] cursor-pointer"
        />
        {answer && (
          <span className="absolute top-[-20%] left-0 bottom-0 right-0 z-[10] h-[120%] backdrop-blur-[2px]	"></span>
        )}
      </div>
      {answer && (
        <>
          <h2 className="text-2xl font-bold text-center bg-green-100 p-2 rounded">
            دوست عزیز شما تو این مدت نقاشی کشیدن رو هم یاد گرفته بودین و تمرین
            میکردین، احتمالا تبدیل به منبع درامدتون شده بود تا الان، بجای
            نظرخواهی از آدمایی که احتمالا هیچوقت تو زندگیت نخواهی دید
          </h2>
          <button
            onClick={() => {
              setAnswer(false);
              setActiveInputs({
                input1: false,
                input2: false,
              });
            }}
            className="border-2 border:purple-100 p-2 rounded bg-purple-300 transition-all hover:drop-shadow-xl hover:-translate-y-[.15rem] cursor-pointer"
          >
            پرسش دوباره سوال
          </button>
        </>
      )}
    </div>
  );
};
export default askAskari;
