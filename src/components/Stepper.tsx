import React from "react";

interface StepperProps {
  totalSteps: number;
  currentStep: number;
}

const stepLabels = [
  "Contacto",
  "Ubicación de tu Casa",
  "Características",
  "Adeudos",
  "Historial",
];

export default function Stepper({ totalSteps, currentStep }: StepperProps) {
  return (
    <div className="flex md:flex-col items-center justify-center md:justify-start md:w-3/12 w-full md:py-12 py-4 md:h-screen bg-[#EEF4EF]">
      <div className="flex md:flex-col flex-row">
        {Array.from({ length: totalSteps }).map((_, index) => {
          return (
            // ✅ Wrapper number/name and Line
            <div
              className="flex items-center md:flex-col md:items-start"
              key={index}
            >
              {/* ✅ Wrapper number and name */}
              <div className="flex justify-start items-center gap-2">
                {/* Number */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm
            ${
              index === currentStep
                ? "border-[#6D9773] border-[2px] text-[#6D9773]"
                : index < currentStep
                  ? "bg-[#6D9773] text-white"
                  : "bg-gray-400 text-white"
            }`}
                >
                  {index + 1}
                </div>

                {/* Name */}
                <div className="hidden md:block text-sm text-[#1F2D3D]">
                  {stepLabels[index]}
                </div>
              </div>

              {/* Line */}
              {index < totalSteps - 1 && (
                <div className="block md:h-10 h-0.5 md:w-0.5 w-8 bg-gray-400 md:ms-4" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
