"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { keyInputSchema } from "@/subdomains/keyinput/modules/yup/schema";
import {
  KeyInputFormData,
  TriggerEventKeyInputForm,
} from "@/subdomains/keyinput/types";
import { KeyInputStepsComponent } from "@/subdomains/keyinput/components/steps/steps.component";
import { KeyInputGeneralInformationComponent } from "@/subdomains/keyinput/components/generalinformation/generalinformation.component";
import { KeyInputRefsComponent } from "@/subdomains/keyinput/components/refs/refs.component";
import { KeyInputTeamComponent } from "@/subdomains/keyinput/components/team/team.component";
import { KeyInputMilestoneComponent } from "../components/milestone/milestone.component";
import { KeyInputCurrencyRatesComponent } from "../components/currencyrates/currencyrates.component";
import { KeyInputMaterialRatesComponent } from "../components/materialrates/materialrates.component";

export function KeyInputInterface(): JSX.Element {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const onSubmit = async (data: KeyInputFormData) => {
    try {
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const steps = useMemo(
    () => [
      "General Information",
      "Team",
      "References",
      "Milestones",
      "Currency Rates",
      "Material Rates",
    ],
    []
  );

  const methods = useForm({
    resolver: yupResolver(keyInputSchema),
    defaultValues: {
      generalInformations: {
        customerId: 0,
        project: "",
        modelVehicle: "",
        country: "",
        productionSite: "",
        quoteDispatchDate: new Date(),
        firstYearOfCAA: new Date().getFullYear(),
        firstSopDate: new Date(),
        currencyId: 0,
      },
      team: {
        platformManager: "",
        technicalProjectLeader: "",
        purchasingLeader: "",
        processLeader: "",
        financeContributor: "",
        salesLeader: "",
        projectName: "",
        productName: "",
      },
      refs: [{ value: "", productId: 0 }],
      milestones: {
        npav: null,
        caav: null,
        prkf: null,
        reqf: null,
        isd: null,
        soco: null,
        ffv: null,
        efv: null,
        desf: null,
        iarv: null,
        afv: null,
        togo: null,
        ofto: null,
        otop: null,
        fdpr: null,
        sssr: null,
        crar: null,
        isva: null,
        sopr: null,
        sop: null,
        prcl: null,
      },
      materialRates: {
        id: 0,
        aluLME: 0,
        aluPremiumYinbang: 0,
        aluPremiumAlcha: 0,
        aluPremium: 0,
        aluMidwestDDU: 0,
        aluSHFE: 0,
        stampingStockSidePlate: 0,
        stampingStockManifolds: 0,
        pptv20: 0,
        pptv40: 0,
        pp54Scolefin: 0,
        ppGf30: 0,
        pa6Gf30: 0,
        pa610: 0,
        pa66Gf30: 0,
        pa66Gf35: 0,
        ppaGf50: 0,
        abs: 0,
        pom: 0,
        tpeShore40: 0,
        tpeShore25: 0,
        molykoteGrease: 0,
        pptv40TpeShore40: 0,
        ppC3IndexValue: 0,
      },
      currencyRates: {
        brl: 0,
        cny: 0,
        czk: 0,
        eur: 0,
        inr: 0,
        jpy: 0,
        krw: 0,
        mrd: 0,
        pln: 0,
        ron: 0,
        rub: 0,
        thb: 0,
        try: 0,
        usd: 0,
        zar: 0,
      },
    },
  });

  const handleNext = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    try {
      e.preventDefault();

      let triggerEvent: TriggerEventKeyInputForm;

      switch (currentStep) {
        case 1:
          triggerEvent = "generalInformations";
          break;
        case 2:
          triggerEvent = "team";
          break;
        case 3:
          triggerEvent = "refs";
          break;
        case 4:
          triggerEvent = "milestones";
          break;
        case 5:
          triggerEvent = "currencyRates";
          break;
        case 6:
          triggerEvent = "materialRates";
          break;
        default:
          triggerEvent = "generalInformations";
          break;
      }

      const isValid = await methods.trigger(triggerEvent);

      if (!isValid) throw new Error("Form is not valid");

      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handlePrevious = (): void => {
    setCurrentStep(currentStep - 1);
  };

  const handleFormSubmit = (data: any): void => {
    // onSubmit(data);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-md mt-4">
      <div className="bg-white p-4 rounded-md shadow-md mb-6">
        <KeyInputStepsComponent currentStep={currentStep} steps={steps} />
      </div>
      <div className="bg-white p-4 rounded-md shadow-md mb-6">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(handleFormSubmit)}
            className="max-w-md md:max-w-xl mx-auto bg-gray-200 p-4 rounded-md shadow-sm"
          >
            {currentStep === 1 && <KeyInputGeneralInformationComponent />}
            {currentStep === 2 && <KeyInputTeamComponent />}
            {currentStep === 2 && <KeyInputRefsComponent />}
            {currentStep === 4 && <KeyInputMilestoneComponent />}
            {currentStep === 5 && <KeyInputCurrencyRatesComponent />}
            {currentStep === 6 && <KeyInputMaterialRatesComponent />}

            {/* Navigation Buttons */}
            <div className="mt-6">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md mr-4 hover:bg-gray-600 focus:outline-none focus:bg-gray-400 text-lg"
                >
                  Previous
                </button>
              )}
              {currentStep < 6 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 text-lg"
                >
                  Next
                </button>
              )}
              {currentStep === 6 && (
                <button
                  type="submit"
                  className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 text-lg"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
