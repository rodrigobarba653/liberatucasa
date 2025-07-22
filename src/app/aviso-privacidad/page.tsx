import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AvisoPrivacidad() {
  return (
    <main className="pt-20">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">AVISO DE PRIVACIDAD</h1>
        <p className="text-sm text-gray-500 mb-8">
          Última actualización: 21 julio 2025
        </p>
        <p className="mb-6">
          En <strong>Libera tu casa</strong>, con domicilio en México y correo
          de contacto
          <a
            href="mailto:zkuadraproconsulting@gmail.com"
            className="text-blue-600 underline"
          >
            zkuadraproconsulting@gmail.com
          </a>
          , estamos comprometidos con la protección de tus datos personales y
          con tu derecho a la privacidad.
        </p>
        <h2 className="text-xl font-semibold mb-2">
          1. Datos personales que recabamos
        </h2>
        Podemos recopilar información como:
        <ul className="list-disc pl-6 mt-2">
          <li>Nombre completo</li>
          <li>Correo electrónico</li>
          <li>Teléfono</li>
          <li>Datos relacionados con tu propiedad (si aplica)</li>
          <li>
            Cualquier otro dato que nos proporciones a través de formularios o
            medios de contacto
          </li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">
          2. Finalidad del tratamiento de datos
        </h2>
        <p className="mb-6">Utilizamos tus datos para:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Brindarte información sobre nuestros servicios</li>
          <li>Contactarte para ofrecer asesoría o seguimiento</li>
          <li>Enviarte promociones o novedades (si así lo aceptas)</li>
          <li>Cumplir con obligaciones legales o contractuales</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">3. Protección de datos</h2>
        <p className="mb-6">
          Tus datos son tratados de forma confidencial y están resguardados con
          medidas de seguridad administrativas, técnicas y físicas que evitan su
          pérdida, uso indebido o acceso no autorizado.
        </p>
        <h2 className="text-xl font-semibold mb-2">
          4. Transferencia de datos
        </h2>
        <p className="mb-6">
          No compartimos tus datos personales con terceros sin tu
          consentimiento, salvo por obligación legal o cuando sea necesario para
          brindarte el servicio que solicites.
        </p>
        <h2 className="text-xl font-semibold mb-2">5. Derechos ARCO</h2>
        <p className="mb-6">
          Tienes derecho a acceder, rectificar, cancelar u oponerte al uso de
          tus datos personales (Derechos ARCO). Puedes ejercer estos derechos
          enviando un correo a
          <a
            href="mailto:zkuadraproconsulting@gmail.com"
            className="text-blue-600 underline"
          >
            zkuadraproconsulting@gmail.com
          </a>
          con tu nombre completo, el derecho que deseas ejercer y una copia de
          tu identificación.
        </p>
        <h2 className="text-xl font-semibold mb-2">
          6. Cambios al aviso de privacidad
        </h2>
        <p className="mb-6">
          Este aviso puede ser modificado en cualquier momento. Cualquier cambio
          será publicado en este sitio web:
          <a
            href="https://liberatucasa.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://liberatucasa.mx
          </a>
          .
        </p>
        <h2 className="text-xl font-semibold mb-2">7. Contacto</h2>
        <p className="mb-6">
          Para cualquier duda relacionada con el manejo de tus datos,
          contáctanos en:
          <a
            href="mailto:zkuadraproconsulting@gmail.com"
            className="text-blue-600 underline"
          >
            zkuadraproconsulting@gmail.com
          </a>
          .
        </p>
      </div>
      <Footer />
    </main>
  );
}
