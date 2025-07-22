export default function Pasos() {
  const steps = [
    {
      title: "¡Queremos saber más de tu casa!",
      description: "Cuéntanos sobre ella y su situación.",
    },
    {
      title: "¡Agendamos una visita para conocerla en vivo y a todo color!",
      description:
        "Si tu casa cumple con los criterios de selección, agendamos rápidamente para conocerla.",
    },
    {
      title: "Recibe nuestra oferta y firmemos nuestro compromiso.",
    },
    {
      title: "Inicia de nuevo sin deudas.",
      description:
        "Te liberamos de tu hipoteca y recibe el monto de la oferta para iniciar de nuevo sin deudas.",
    },
  ];

  return (
    <section id="pasos" className="bg-white pt-40 pb-20 px-6 text-center">
      <div className="container mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full text-left lg:px-16 lg:mb-0 mb-12">
          <div className="pasos-img lg:h-full h-80 w-full rounded-4xl shadow-xl shadow-blue-900/40"></div>
        </div>
        <div className="lg:w-1/2 text-left lg:pr-16">
          <h2 className="md:text-4xl text-3xl font-bold mb-12 md:leading-12 leading-10">
            Sigue el paso a paso para tu libertad financiera
          </h2>
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start mb-8">
              <div className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-[#BB8A52] text-white text-[14px] font-bold leading-none shrink-0 mt-3">
                {index + 1}
              </div>
              <div>
                <h5 className="text-xl">{step.title}</h5>
                {step.description && <p>{step.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
