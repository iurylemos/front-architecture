import React from "react";

type StepItemProps = {
  status: "active" | "no-active" | "next-item" | "completed";
  currentStepItem: number;
};

export function KeyInputStepsItemComponent({
  status,
  currentStepItem,
}: StepItemProps): JSX.Element {
  return (
    <div className="flex-1">
      <div
        className={`w-10 h-10 ${
          status === "active"
            ? "bg-green-500"
            : status === "next-item" || status === "completed"
            ? "bg-green-200"
            : "bg-white border-2 border-gray-200"
        } mx-auto rounded-full text-lg text-white flex items-center`}
      >
        <span
          className={`${
            status === "no-active" ? "text-gray-500" : "text-white"
          } text-center w-full`}
        >
          {status === "completed" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 w-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          ) : (
            currentStepItem
          )}
          <i className="fa fa-check w-full fill-current white"></i>
        </span>
      </div>
    </div>
  );
}
