"use client";

import { useState } from "react";

interface StepFourProps {
  nextStep: () => void;
  updateFormData: (
    data: Partial<{
      mortgageDebt: string;
      mortgageAmount: string;
      propertyTaxDebt: string;
      propertyTaxAmount: string;
      electricityDebt: string;
      electricityAmount: string;
      waterDebt: string;
      waterAmount: string;
    }>
  ) => void;
}

export default function StepFour({ nextStep, updateFormData }: StepFourProps) {
  const [form, setForm] = useState({
    mortgageDebt: "No",
    mortgageAmount: "",
    propertyTaxDebt: "No",
    propertyTaxAmount: "",
    electricityDebt: "No",
    electricityAmount: "",
    waterDebt: "No",
    waterAmount: "",
  });

  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    // Only allow numbers in amount fields
    if (name.includes("Amount")) {
      const numeric = value.replace(/[^\d]/g, "");
      setForm((prev) => ({ ...prev, [name]: numeric }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const {
      mortgageDebt,
      mortgageAmount,
      propertyTaxDebt,
      propertyTaxAmount,
      electricityDebt,
      electricityAmount,
      waterDebt,
      waterAmount,
    } = form;

    const errorsExist =
      (mortgageDebt === "Sí" && !mortgageAmount) ||
      (propertyTaxDebt === "Sí" && !propertyTaxAmount) ||
      (electricityDebt === "Sí" && !electricityAmount) ||
      (waterDebt === "Sí" && !waterAmount);

    if (errorsExist) {
      setError("¡Por favor indica los montos donde aplican adeudos!");
      return;
    }

    // Replace empty amounts for "No" debts with fallback string
    const formattedForm = {
      ...form,
      mortgageAmount: mortgageDebt === "No" ? "No hay adeudo" : mortgageAmount,
      propertyTaxAmount:
        propertyTaxDebt === "No" ? "No hay adeudo" : propertyTaxAmount,
      electricityAmount:
        electricityDebt === "No" ? "No hay adeudo" : electricityAmount,
      waterAmount: waterDebt === "No" ? "No hay adeudo" : waterAmount,
    };

    updateFormData(formattedForm);
    nextStep();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-9/12 px-6 md:px-12 py-8 space-y-4"
    >
      <h2 className="text-2xl font-bold text-[#1F2D3D]">Adeudos</h2>
      <p className="text-gray-700 text-sm mb-4">
        Dinos qué te quita el sueño y quieras que consideremos liberar dentro de
        tu oferta.
      </p>

      {/* Each section */}
      {[
        { label: "¿Tiene adeudo Infonavit o de otro banco?", name: "mortgage" },
        { label: "Adeudos de Predial", name: "propertyTax" },
        { label: "Adeudos de luz", name: "electricity" },
        { label: "Adeudos de agua", name: "water" },
      ].map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium">
            {field.label}
            <span className="text-red-600">*</span>
          </label>
          <div className="flex gap-2">
            <select
              name={`${field.name}Debt`}
              value={(form as any)[`${field.name}Debt`]}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-1/3"
            >
              <option>No</option>
              <option>Sí</option>
            </select>
            <input
              type="text"
              name={`${field.name}Amount`}
              placeholder="$"
              value={(form as any)[`${field.name}Amount`]}
              onChange={handleChange}
              disabled={(form as any)[`${field.name}Debt`] === "No"}
              className="border border-gray-300 p-2 rounded w-2/3 bg-white disabled:bg-gray-100"
            />
          </div>
        </div>
      ))}

      <p className="text-xs text-gray-500">
        Los campos marcados con <span className="text-red-600">*</span> son
        obligatorios.
      </p>

      {error && <p className="text-red-600!">{error}</p>}

      <button
        type="submit"
        className="bg-[#6D9773] text-white px-10 py-4 rounded-full font-medium"
      >
        Continuar
      </button>
    </form>
  );
}
