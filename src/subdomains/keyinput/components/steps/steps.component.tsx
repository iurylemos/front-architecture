"use client";

import React from "react";
import { useDeviceType } from "@/shared/hooks/useDeviceType.hook";
import { KeyInputStepsItemComponent } from "@/subdomains/keyinput/components/steps/item/item.component";
import { KeyInputStepsProgressComponent } from "@/subdomains/keyinput/components/steps/progress/progress.component";

type KeyInputStepsComponentProps = {
  currentStep: number;
  steps: string[];
};

export function KeyInputStepsComponent({
  currentStep,
  steps,
}: KeyInputStepsComponentProps): JSX.Element {
  const isMobile = useDeviceType("tablet-768");

  return (
    <div
      className={`max-w-xl mx-auto my-4 border-b-2 pb-4 ${
        isMobile ? "overflow-x-auto whitespace-nowrap" : ""
      }`}
    >
      <div className={`flex`}>
        {steps.map((_, index) => {
          const stepNumber = index + 1;
          let status: "no-active" | "next-item" | "active" | "completed" =
            "no-active";
          if (stepNumber < currentStep) {
            status = "completed";
          } else if (stepNumber === currentStep) {
            status = "active";
          } else {
            status = "no-active";
          }

          return (
            <React.Fragment key={index}>
              <KeyInputStepsItemComponent
                currentStepItem={stepNumber}
                status={status}
              />
              {stepNumber < steps.length && (
                <KeyInputStepsProgressComponent
                  percetage={
                    stepNumber < currentStep
                      ? 100
                      : stepNumber === currentStep
                      ? 20
                      : 0
                  }
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div className="flex text-xs content-center text-center gap-4 md:gap-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="w-1/4 whitespace-normal text-justify pt-2"
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
