export default function Footer() {
  return (
    <section
      id="footer"
      className="bg-[#0C3A2D] py-20 px-6 text-center text-white items-center flex flex-col"
    >
      <h5 className="text-white! text-xl mb-2">
        2025 LiberaTuCasa® Todos los derechos reservados.
      </h5>
      <div className="flex md:gap-4 gap-2 md:justify-center justify-between mb-6">
        <a className="underline! text-white!" href="/terminos-condiciones">
          Términos y condiciones
        </a>
        |
        <a className="underline! text-white!" href="/aviso-privacidad">
          Aviso de Privacidad
        </a>
      </div>
      <p className="text-white! max-w-[620px]">
        Usar este sitio implica que aceptas nuestras Políticas y Términos, Aviso
        de Privacidad y Política datos de Navegación. Prohibida su reproducciín
        total o parcial, asi como su traducción a cualquier idioma sin
        autorización escrita de su titular. *El tiempo estipulado depende del
        proceso que requiere el inmueble.
      </p>
    </section>
  );
}
