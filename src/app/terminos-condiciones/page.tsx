import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TerminosYPrivacidad() {
  return (
    <main className="pt-20">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">TÉRMINOS Y CONDICIONES</h1>
        <p className="text-sm text-gray-500 mb-8">
          Última actualización: 21 julio 2025
        </p>

        <p className="mb-6">
          Bienvenido a <strong>Libera tu casa</strong>. Al acceder y utilizar
          este sitio web, aceptas cumplir con los siguientes Términos y
          Condiciones. Si no estás de acuerdo con alguno de ellos, te
          recomendamos no utilizar el sitio.
        </p>

        <h2 className="text-xl font-semibold mb-2">1. Uso del sitio</h2>
        <p className="mb-6">
          El uso de este sitio está destinado exclusivamente a fines
          informativos y/o de contacto con los servicios ofrecidos por Libera tu
          casa. El usuario se compromete a hacer un uso adecuado del contenido y
          a no emplearlo para actividades ilícitas o que atenten contra la
          moral, el orden público o los derechos de terceros.
        </p>

        <h2 className="text-xl font-semibold mb-2">2. Propiedad intelectual</h2>
        <p className="mb-6">
          Todos los contenidos del sitio, incluyendo textos, imágenes,
          logotipos, gráficos, videos, diseño y código fuente, están protegidos
          por derechos de propiedad intelectual y son propiedad de Libera tu
          casa o se utilizan con autorización. Queda prohibida su reproducción
          total o parcial sin el consentimiento expreso y por escrito.
        </p>

        <h2 className="text-xl font-semibold mb-2">3. Enlaces externos</h2>
        <p className="mb-6">
          Este sitio puede contener enlaces a sitios web de terceros. Libera tu
          casa no se hace responsable del contenido, políticas o prácticas de
          privacidad de dichos sitios.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          4. Limitación de responsabilidad
        </h2>
        <p className="mb-6">
          Libera tu casa no garantiza que el sitio esté libre de errores, virus
          o interrupciones en el servicio. En ningún caso será responsable por
          daños derivados del uso del sitio web o la imposibilidad de acceder al
          mismo.
        </p>

        <h2 className="text-xl font-semibold mb-2">5. Modificaciones</h2>
        <p className="mb-6">
          Nos reservamos el derecho de modificar, actualizar o eliminar
          cualquier parte de estos Términos y Condiciones sin previo aviso. Te
          recomendamos revisar esta sección periódicamente.
        </p>

        <h2 className="text-xl font-semibold mb-2">6. Contacto</h2>
        <p className="mb-6">
          Si tienes dudas sobre estos términos, puedes escribirnos a:{" "}
          <a
            target="_blank"
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
