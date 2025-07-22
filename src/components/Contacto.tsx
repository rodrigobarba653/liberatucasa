import { Icon } from "@iconify/react";

export default function Contacto() {
  return (
    <section id="contacto" className="bg-white py-20 px-6 text-center">
      <h2 className="md:text-lg text-base text-slate-600 font-bold uppercase">
        Contáctanos
      </h2>
      <h3 className="md:text-5xl text-4xl font-bold mb-4">¿Tienes dudas?</h3>
      <p className="mb-8">Estamos para darte tranquilidad, pregúntanos.</p>
      <h6 className="text-2xl font-bold mb-2">Horario de atención</h6>
      <p className="mb-8">Lunes a Viernes de 9:00 am a 5:00 pm.</p>
      <div className="flex justify-center">
        <a
          href="tel:526567802215"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 flex gap-2 self-center w-fit text-green-600 hover:text-green-700"
        >
          <Icon icon="mdi:phone" width="24" height="24" />
          <span className=" underline!">+52 656 780 2215</span>
        </a>
      </div>

      <div className="flex justify-center mb-8">
        <a
          href="https://wa.me/526567802215"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FFB902] hover:bg-yellow-500 rounded-full flex px-8 py-4 gap-2"
        >
          <Icon icon="mdi:whatsapp" width="24" height="24" />
          <span className="">Escríbenos en WhatsApp</span>
        </a>
      </div>

      <div className="flex justify-center gap-4">
        <a
          href="https://www.instagram.com/liberatucasa_mx/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary rounded-full flex justify-center items-center w-12 h-12 gap-2"
        >
          <Icon icon="mdi:instagram" width="24" height="24" />
        </a>

        <a
          href="https://www.facebook.com/LiberaaTuCasa"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary rounded-full flex justify-center items-center w-12 h-12 gap-2"
        >
          <Icon icon="mdi:facebook" width="24" height="24" />
        </a>
      </div>
    </section>
  );
}
