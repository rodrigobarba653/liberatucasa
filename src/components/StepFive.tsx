"use client";

import { useState } from "react";

interface StepFiveProps {
  nextStep: () => void;
  formData: any;
  updateFormData: (data: Partial<any>) => void;
}

export default function StepFive({
  nextStep,
  formData,
  updateFormData,
}: StepFiveProps) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { reason, legalIssue, hasDeed, desiredAmount } = formData;

    if (!reason || !legalIssue || !hasDeed || !desiredAmount) {
      setError("¡Por favor llena todos los campos obligatorios!");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/full-send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error al enviar el formulario.");
      nextStep();
    } catch (err) {
      setError("¡No se pudo enviar el formulario. Intenta nuevamente!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-9/12 px-6 md:px-12 py-8 space-y-4"
    >
      <h2 className="text-2xl font-bold text-[#1F2D3D]">Historial</h2>
      <p className="text-gray-700 text-sm mb-4">
        Ya son las últimas preguntas, lo juramos. Cuéntanos más sobre tu casa,
        esto nos ayudará a poderte hacer una mejor oferta.
      </p>

      <div className="space-y-1">
        <label htmlFor="reason" className="text-sm font-medium">
          ¿Por qué te quieres liberar de tu deuda?
          <span className="text-red-600">*</span>
        </label>
        <select
          id="reason"
          name="reason"
          value={formData.reason || ""}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="">-Selecciona una opción-</option>
          <option value="Ya no puedo pagarla">Ya no puedo pagarla</option>
          <option value="Quiero vender y obtener liquidez">
            Quiero vender y obtener liquidez
          </option>
          <option value="Otra razón">Otra razón</option>
        </select>
      </div>

      <div className="space-y-1">
        <label htmlFor="legalIssue" className="text-sm font-medium">
          ¿Tiene tu casa algún embargo o problema jurídico que debamos saber?
          <span className="text-red-600">*</span>
        </label>
        <select
          id="legalIssue"
          name="legalIssue"
          value={formData.legalIssue || ""}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="">-Selecciona una opción-</option>
          <option value="No">No</option>
          <option value="Sí">Sí</option>
        </select>
      </div>

      <div className="space-y-1">
        <label htmlFor="hasDeed" className="text-sm font-medium">
          ¿Las escrituras están a tu nombre?
          <span className="text-red-600">*</span>
        </label>
        <select
          id="hasDeed"
          name="hasDeed"
          value={formData.hasDeed || ""}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="">-Selecciona una opción-</option>
          <option value="No">No</option>
          <option value="Sí">Sí</option>
        </select>
      </div>

      <div className="space-y-1">
        <label htmlFor="cadastral" className="text-sm font-medium">
          ¿Sabes el número de cuenta catastral de tu casa?
        </label>
        <input
          id="cadastral"
          name="cadastral"
          type="text"
          value={formData.cadastral || ""}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="desiredAmount" className="text-sm font-medium">
          Después de liberarte de tu deuda hipotecaria, me gustaría este
          dinerito extra.
          <span className="text-red-600">*</span>
        </label>
        <input
          id="desiredAmount"
          name="desiredAmount"
          type="number"
          value={formData.desiredAmount || ""}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <p className="text-xs text-gray-500">
        Los campos marcados con <span className="text-red-600">*</span> son
        obligatorios.
      </p>

      {error && <p className="text-red-600!">{error}</p>}

      <button
        type="submit"
        className="bg-[#6D9773] text-white px-10 py-4 rounded-full font-medium"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Continuar"}
      </button>
    </form>
  );
}
