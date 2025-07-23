"use client";

import { useState } from "react";
import Stepper from "@/components/Stepper";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import StepFour from "@/components/StepFour";
import StepFive from "@/components/StepFive";
import StepSix from "@/components/StepSix";

export default function RegistrationForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1
    name: "",
    nss: "",
    phone: "",
    email: "",
    // Step 2
    street: "",
    number: "",
    colony: "",
    municipality: "",
    state: "",
    // Step 3
    constructionSize: "",
    landSize: "",
    bedrooms: "",
    bathrooms: "",
    levels: "",
    // Step 4
    mortgageDebt: "",
    mortgageAmount: "",
    propertyTaxDebt: "",
    propertyTaxAmount: "",
    electricityDebt: "",
    electricityAmount: "",
    waterDebt: "",
    waterAmount: "",
    // Step 5
    reason: "",
    legalIssue: "",
    titleInName: "",
    cadastralAccount: "",
    expectedCash: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <Stepper totalSteps={5} currentStep={step} />
      <div className="flex-1 bg-white">
        {step === 0 && (
          <StepOne nextStep={nextStep} updateFormData={updateFormData} />
        )}
        {step === 1 && (
          <StepTwo nextStep={nextStep} updateFormData={updateFormData} />
        )}
        {step === 2 && (
          <StepThree nextStep={nextStep} updateFormData={updateFormData} />
        )}
        {step === 3 && (
          <StepFour nextStep={nextStep} updateFormData={updateFormData} />
        )}
        {step === 4 && (
          <StepFive
            formData={formData}
            nextStep={nextStep}
            updateFormData={updateFormData}
          />
        )}

        {step === 5 && <StepSix />}
      </div>
    </div>
  );
}
