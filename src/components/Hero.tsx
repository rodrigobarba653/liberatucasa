import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="md:h-[720px] h-[720px] bg-gray-300 flex md:items-center text-left px-6 md:pt-20 pt-32 w-full overflow-x-clip relative"
    >
      <div className="md:w-[960px] w-96 md:h-[960px] h-96 bg-white absolute rounded-full md:-left-64 -left-20 md:-top-40 md:blur-3xl blur-2xl md:opacity-50 opacity-100"></div>
      <div className="container mx-auto overflow-hidden relative">
        <div className="max-w-2xl mb-16 flex flex-col">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Liberarte de tu crédito hipotecario nunca fue tan sencillo
          </h1>
          <p className="text-white text-lg max-w-xl mb-10">
            Si quieres liberarte de tu casa y la adquiriste mediante crédito
            bancario, INFONAVIT o FOVISSSTE, no esperes más y contesta las
            siguientes preguntas:
          </p>
          <Link href="/registro">
            <button className="btn btn-primary sm:w-fit w-full text-center">
              Empezar ya
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-[#0C3A2D] flex sm:flex-row flex-col absolute -bottom-24 left-1/2 -translate-x-1/2 lg:px-16 px-8 lg:py-8 py-4 rounded-2xl sm:gap-8 gap-2 sm:w-fit w-screen justify-center md:max-w-none max-w-[90vw]">
        <h3 className="text-white! text-3xl font-bold md:max-w-64 w-full sm:text-left text-center">
          Duerme tranquilo de nuevo
        </h3>
        <div className="text-white flex flex-col justify-center items-center">
          <span>Casas compradas</span>
          <span className="text-5xl ubuntu font-bold text-[#FFD977]">
            +1,000
          </span>
        </div>
      </div>
    </section>
  );
}
