import React from "react";

type StepProgressProps = {
  percetage: number;
};

export function KeyInputStepsProgressComponent({
  percetage,
}: StepProgressProps): JSX.Element {
  return (
    <div className="w-full min-w-8 md:w-1/6 align-center items-center align-middle content-center flex">
      <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
        <div
          className={`${
            percetage < 100 ? "bg-green-400" : "bg-green-200"
          } text-xs leading-none py-1 text-center text-gray-500 rounded`}
          style={{ width: `${percetage}%` }}
        ></div>
      </div>
    </div>
  );
}
