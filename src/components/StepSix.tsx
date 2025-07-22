"use client";

import { useRouter } from "next/navigation";

export default function StepSix() {
  const router = useRouter();

  return (
    <div className="w-full md:w-9/12 px-6 md:px-12 py-12 text-center space-y-6">
      <h2 className="text-2xl font-bold text-[#1F2D3D]">¡Lo lograste!</h2>
      <p className="text-gray-700 text-base">
        Te contactaremos lo más pronto posible.
      </p>

      <button
        onClick={() => router.push("/")}
        className="bg-[#6D9773] text-white px-10 py-4 rounded-full font-medium"
      >
        Regresar al inicio
      </button>
    </div>
  );
}
