"use client";

import { useState } from "react";

interface StepOneProps {
  nextStep: () => void;
  updateFormData: (
    data: Partial<{
      name: string;
      nss: string;
      phone: string;
      email: string;
    }>
  ) => void;
}

export default function StepOne({ nextStep, updateFormData }: StepOneProps) {
  const [form, setForm] = useState({
    name: "",
    nss: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "nss" || name === "phone") {
      newValue = value.replace(/\D/g, "");
    }

    setForm((prev) => ({ ...prev, [name]: newValue }));
    updateFormData({ [name]: newValue });

    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validateForm() {
    const newErrors: typeof errors = {
      name: "",
      phone: "",
      email: "",
    };

    if (!form.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    }

    if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "El teléfono debe tener 10 dígitos.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Correo electrónico inválido.";
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some((err) => err);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/send-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Error al enviar el formulario");

      nextStep();
    } catch (err) {
      setSubmitError("Hubo un problema al enviar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full md:w-9/12 px-6 md:px-12 py-8 space-y-4"
    >
      <h2 className="text-2xl font-bold text-[#1F2D3D]">Cuéntanos sobre ti</h2>

      {/* Nombre */}
      <div className="space-y-1">
        <label htmlFor="name" className="text-sm font-medium">
          Nombre Completo<span className="text-red-600">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className={`w-full p-2 rounded border ${
            errors.name ? "border-red-500 bg-red-50" : "border-gray-300"
          }`}
        />
        {errors.name && <p className="text-red-600! text-sm">{errors.name}</p>}
      </div>

      {/* NSS */}
      <div className="space-y-1">
        <label htmlFor="nss" className="text-sm font-medium">
          Número de Seguridad Social
        </label>
        <input
          id="nss"
          name="nss"
          type="text"
          inputMode="numeric"
          value={form.nss}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      {/* Teléfono */}
      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium">
          Teléfono Celular<span className="text-red-600">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="numeric"
          value={form.phone}
          onChange={handleChange}
          className={`w-full p-2 rounded border ${
            errors.phone ? "border-red-500 bg-red-50" : "border-gray-300"
          }`}
        />
        {errors.phone && (
          <p className="text-red-600! text-sm">{errors.phone}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium">
          Correo electrónico<span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={`w-full p-2 rounded border ${
            errors.email ? "border-red-500 bg-red-50" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <p className="text-red-600! text-sm">{errors.email}</p>
        )}
      </div>

      <p className="text-xs text-gray-500">
        Los campos marcados con <span className="text-red-600">*</span> son
        obligatorios.
      </p>

      {submitError && <p className="text-red-600!">{submitError}</p>}

      <button
        type="submit"
        className="bg-[#6D9773] text-white px-10 py-4 rounded-full font-medium"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
