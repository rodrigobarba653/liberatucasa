"use client";

import { useState } from "react";

interface StepThreeProps {
  nextStep: () => void;
  updateFormData: (
    data: Partial<{
      constructionSize: string;
      landSize: string;
      bedrooms: string;
      bathrooms: string;
      levels: string;
    }>
  ) => void;
}

export default function StepThree({
  nextStep,
  updateFormData,
}: StepThreeProps) {
  const [form, setForm] = useState({
    constructionSize: "",
    landSize: "",
    bedrooms: "1",
    bathrooms: "1",
    levels: "1",
  });

  const [errors, setErrors] = useState({
    constructionSize: "",
    landSize: "",
    bedrooms: "",
    bathrooms: "",
    levels: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "constructionSize" || name === "landSize") {
      newValue = value.replace(/\D/g, ""); // only digits
    }

    setForm((prev) => ({ ...prev, [name]: newValue }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validateForm() {
    const newErrors = {
      constructionSize: "",
      landSize: "",
      bedrooms: "",
      bathrooms: "",
      levels: "",
    };

    if (!form.constructionSize)
      newErrors.constructionSize = "Ingresa los metros de construcción.";
    if (!form.landSize) newErrors.landSize = "Ingresa los metros de terreno.";
    if (!form.bedrooms)
      newErrors.bedrooms = "Selecciona el número de recámaras.";
    if (!form.bathrooms) newErrors.bathrooms = "Selecciona el número de baños.";
    if (!form.levels) newErrors.levels = "Selecciona el número de niveles.";

    setErrors(newErrors);
    return !Object.values(newErrors).some((err) => err);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return;

    updateFormData(form);
    nextStep();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-9/12 px-6 md:px-12 py-8 space-y-4"
    >
      <h2 className="text-2xl font-bold text-[#1F2D3D]">Características</h2>
      <p className="text-gray-700 text-sm mb-4">
        Cuéntanos más sobre tu casa, esto nos ayudará a poderte hacer una mejor
        oferta.
      </p>

      <div>
        <label htmlFor="constructionSize" className="block text-sm font-medium">
          Metros de construcción.<span className="text-red-600">*</span>
        </label>
        <input
          id="constructionSize"
          name="constructionSize"
          type="text"
          value={form.constructionSize}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
        {errors.constructionSize && (
          <p className="text-red-600! text-sm">{errors.constructionSize}</p>
        )}
      </div>

      <div>
        <label htmlFor="landSize" className="block text-sm font-medium">
          Metros de terreno.<span className="text-red-600">*</span>
        </label>
        <input
          id="landSize"
          name="landSize"
          type="text"
          value={form.landSize}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
        {errors.landSize && (
          <p className="text-red-600! text-sm">{errors.landSize}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="bedrooms" className="block text-sm font-medium">
            Número de recámaras.<span className="text-red-600">*</span>
          </label>
          <select
            id="bedrooms"
            name="bedrooms"
            value={form.bedrooms}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={String(num)}>
                {num}
              </option>
            ))}
          </select>
          {errors.bedrooms && (
            <p className="text-red-600! text-sm">{errors.bedrooms}</p>
          )}
        </div>

        <div>
          <label htmlFor="bathrooms" className="block text-sm font-medium">
            Número de Baños.<span className="text-red-600">*</span>
          </label>
          <select
            id="bathrooms"
            name="bathrooms"
            value={form.bathrooms}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          >
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={String(num)}>
                {num}
              </option>
            ))}
          </select>
          {errors.bathrooms && (
            <p className="text-red-600! text-sm">{errors.bathrooms}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="levels" className="block text-sm font-medium">
          Número de niveles.<span className="text-red-600">*</span>
        </label>
        <select
          id="levels"
          name="levels"
          value={form.levels}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        >
          {[1, 2, 3].map((num) => (
            <option key={num} value={String(num)}>
              {num}
            </option>
          ))}
        </select>
        {errors.levels && (
          <p className="text-red-600! text-sm">{errors.levels}</p>
        )}
      </div>

      <p className="text-xs text-gray-500">
        Los campos marcados con <span className="text-red-600">*</span> son
        obligatorios.
      </p>

      <button
        type="submit"
        className="bg-[#6D9773] text-white px-10 py-4 rounded-full font-medium"
      >
        Continuar
      </button>
    </form>
  );
}
