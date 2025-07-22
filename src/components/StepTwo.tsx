"use client";

import { useState } from "react";

interface StepTwoProps {
  nextStep: () => void;
  updateFormData: (
    data: Partial<{
      street: string;
      number: string;
      colony: string;
      municipality: string;
      state: string;
    }>
  ) => void;
}

export default function StepTwo({ nextStep, updateFormData }: StepTwoProps) {
  const [form, setForm] = useState({
    street: "",
    number: "",
    colony: "",
    municipality: "",
    state: "",
  });

  const [errors, setErrors] = useState({
    street: "",
    number: "",
    colony: "",
    municipality: "",
    state: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "number") {
      newValue = value.replace(/\D/g, ""); // allow only digits
    }

    setForm((prev) => ({ ...prev, [name]: newValue }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validateForm() {
    const newErrors = {
      street: "",
      number: "",
      colony: "",
      municipality: "",
      state: "",
    };

    if (!form.street.trim()) newErrors.street = "La calle es obligatoria.";
    if (!form.number.trim()) newErrors.number = "El número es obligatorio.";
    if (!form.colony.trim()) newErrors.colony = "La colonia es obligatoria.";
    if (!form.municipality.trim())
      newErrors.municipality = "El municipio es obligatorio.";
    if (!form.state.trim()) newErrors.state = "El estado es obligatorio.";

    setErrors(newErrors);

    return !Object.values(newErrors).some((err) => err);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    updateFormData(form);
    nextStep();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-9/12 px-6 md:px-12 py-8 space-y-4"
      noValidate
    >
      <h2 className="text-2xl font-bold text-[#1F2D3D]">
        Ubicación de tu Casa
      </h2>
      <p className="text-gray-700 text-sm mb-4">
        Proporciona los datos completos de tu casa para que, en caso de
        calificar, pueda nuestro asesor visitarte y concretar la oferta
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="street" className="block text-sm font-medium">
            Calle<span className="text-red-600">*</span>
          </label>
          <input
            id="street"
            name="street"
            type="text"
            value={form.street}
            onChange={handleChange}
            className={`w-full p-2 rounded border ${
              errors.street ? "border-red-500 bg-red-50" : "border-gray-300"
            }`}
          />
          {errors.street && (
            <p className="text-red-600! text-sm">{errors.street}</p>
          )}
        </div>

        <div>
          <label htmlFor="number" className="block text-sm font-medium">
            Número<span className="text-red-600">*</span>
          </label>
          <input
            id="number"
            name="number"
            type="text"
            value={form.number}
            onChange={handleChange}
            inputMode="numeric"
            className={`w-full p-2 rounded border ${
              errors.number ? "border-red-500 bg-red-50" : "border-gray-300"
            }`}
          />
          {errors.number && (
            <p className="text-red-600! text-sm">{errors.number}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="colony" className="block text-sm font-medium">
          Colonia<span className="text-red-600">*</span>
        </label>
        <input
          id="colony"
          name="colony"
          type="text"
          value={form.colony}
          onChange={handleChange}
          className={`w-full p-2 rounded border ${
            errors.colony ? "border-red-500 bg-red-50" : "border-gray-300"
          }`}
        />
        {errors.colony && (
          <p className="text-red-600! text-sm">{errors.colony}</p>
        )}
      </div>

      <div>
        <label htmlFor="municipality" className="block text-sm font-medium">
          Municipio<span className="text-red-600">*</span>
        </label>
        <input
          id="municipality"
          name="municipality"
          type="text"
          value={form.municipality}
          onChange={handleChange}
          className={`w-full p-2 rounded border ${
            errors.municipality ? "border-red-500 bg-red-50" : "border-gray-300"
          }`}
        />
        {errors.municipality && (
          <p className="text-red-600! text-sm">{errors.municipality}</p>
        )}
      </div>

      <div>
        <label htmlFor="state" className="block text-sm font-medium">
          Estado<span className="text-red-600">*</span>
        </label>
        <select
          id="state"
          name="state"
          value={form.state}
          onChange={handleChange}
          className={`w-full p-2 rounded border ${
            errors.state ? "border-red-500 bg-red-50" : "border-gray-300"
          }`}
        >
          <option value="">Selecciona un estado</option>
          <option value="Aguascalientes">Aguascalientes</option>
          <option value="Baja California">Baja California</option>
          <option value="Baja California Sur">Baja California Sur</option>
          <option value="Campeche">Campeche</option>
          <option value="Chiapas">Chiapas</option>
          <option value="Chihuahua">Chihuahua</option>
          <option value="CDMX">Ciudad de México</option>
          <option value="Coahuila">Coahuila</option>
          <option value="Colima">Colima</option>
          <option value="Durango">Durango</option>
          <option value="Edomex">Estado de México</option>
          <option value="Guanajuato">Guanajuato</option>
          <option value="Guerrero">Guerrero</option>
          <option value="Hidalgo">Hidalgo</option>
          <option value="Jalisco">Jalisco</option>
          <option value="Michoacán">Michoacán</option>
          <option value="Morelos">Morelos</option>
          <option value="Nayarit">Nayarit</option>
          <option value="Nuevo León">Nuevo León</option>
          <option value="Oaxaca">Oaxaca</option>
          <option value="Puebla">Puebla</option>
          <option value="Querétaro">Querétaro</option>
          <option value="Quintana Roo">Quintana Roo</option>
          <option value="San Luis Potosí">San Luis Potosí</option>
          <option value="Sinaloa">Sinaloa</option>
          <option value="Sonora">Sonora</option>
          <option value="Tabasco">Tabasco</option>
          <option value="Tamaulipas">Tamaulipas</option>
          <option value="Tlaxcala">Tlaxcala</option>
          <option value="Veracruz">Veracruz</option>
          <option value="Yucatán">Yucatán</option>
          <option value="Zacatecas">Zacatecas</option>
        </select>

        {errors.state && (
          <p className="text-red-600! text-sm">{errors.state}</p>
        )}
      </div>

      <p className="text-xs text-gray-500">
        Los campos marcados con <span className="text-red-600">*</span> son
        obligatorios.
      </p>

      <button
        type="submit"
        className="bg-[#6D9773] text-white px-10 py-4 rounded-full font-medium"
        disabled={loading}
      >
        {loading ? "Cargando..." : "Continuar"}
      </button>
    </form>
  );
}
