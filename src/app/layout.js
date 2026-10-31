import SloganSection from "@/components/SloganSection";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import ColorPlate from "@/components/ColorPlate";
import Preloader from "@/components/Preloader";
import JsonLd from "@/components/JsonLd";
import { sitio } from "@/data/sitio";
import { Poppins } from "next/font/google";

// Bootstrap CSS
import "../../public/css/bootstrap.min.css";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Global CSS
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // Hace que las URLs relativas de canonical y OpenGraph se resuelvan a
  // absolutas, que es como las necesitan Google y las redes.
  metadataBase: new URL(sitio.url),
  // La marca va primero a propósito: este texto es también el de la pestaña
  // del navegador, donde solo entran los primeros ~15 caracteres.
  title: "MGOdontología | Clínica odontológica en Rosario",
  description: sitio.descripcion,
  applicationName: sitio.nombre,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: sitio.nombre,
    title: "MGOdontología | Clínica odontológica en Rosario",
    description: sitio.descripcion,
    images: [{ url: sitio.ogImage, width: 1200, height: 630, alt: sitio.nombre }],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body className={poppins.className}>
        <>
          <JsonLd />
          <Preloader />
          <ColorPlate />
          <main>{children}</main>
          <SloganSection />
          <Footer />
          <ScrollTop />
        </>
      </body>
    </html>
  );
}
