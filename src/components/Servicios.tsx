import Image from "next/image";

const servicios = [
  {
    title: "Diagnóstico completo de tu propiedad",
    description:
      "Revisamos a fondo la situación legal y crediticia de tu casa para que sepas exactamente en dónde estás parado.",
    image: "/images/servicios-1.png",
  },
  {
    title: "Nos encargamos de tus adeudos",
    description:
      "Liquidamos por ti las deudas de agua, predial, luz y hasta tu crédito hipotecario.",
    image: "/images/servicios-2.png",
  },
  {
    title: "Te bonificamos y recuperas la tranquilidad",
    description:
      "Recibes el monto acordado para que puedas cerrar este ciclo con calma y empezar de nuevo.",
    image: "/images/servicios-3.png",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-[#EEF4EF] py-20 px-6 text-center">
      <h2 className="md:text-lg text-base text-slate-600 font-bold uppercase">
        ¿Qué resolvemos?
      </h2>
      <h3 className="md:text-5xl text-4xl  font-bold mb-12">
        Nuestros servicios
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl shadow-blue-900/20 lg:px-8 px-6 lg:py-4 py-3 flex flex-col justify-between"
          >
            <div>
              <h5 className="text-2xl md:mb-2">{servicio.title}</h5>
              <p>{servicio.description}</p>
            </div>
            <div className="w-full flex justify-end">
              <Image
                src={servicio.image}
                alt={servicio.title}
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
