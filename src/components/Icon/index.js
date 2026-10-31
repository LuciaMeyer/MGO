import { glifos } from "./glifos";

// Dibuja el icono como SVG inline, conservando el <i> y sus clases para que
// todos los selectores del CSS del sitio (.single-features i, .single-fun i,
// etc.) sigan aplicando igual que cuando esto era una fuente de iconos.
//
// El glifo se deduce del propio className, asi los llamados no cambian:
//   <Icon className="icofont icofont-tooth" />
//   <Icon className="fa fa-cog fa-spin" />
export default function Icon({ className = "", ...props }) {
  const glifo = resolver(className);

  if (!glifo) {
    // Clase sin glifo conocido: se deja el <i> vacio en lugar de romper el
    // render, y queda visible en consola durante el desarrollo.
    if (process.env.NODE_ENV !== "production") {
      console.warn(`Icon: sin glifo para "${className}"`);
    }
    return <i className={className} aria-hidden="true" {...props} />;
  }

  return (
    <i className={className} aria-hidden="true" {...props}>
      <svg viewBox={glifo.box} focusable="false" role="presentation">
        {/* Las fuentes SVG tienen el eje Y invertido: se traslada por el
            ascenso y se escala -1 en Y para enderezar el trazado. */}
        <g transform={`translate(0 ${glifo.y}) scale(1 -1)`}>
          <path d={glifo.d} />
        </g>
      </svg>
    </i>
  );
}

function resolver(className) {
  for (const token of className.split(/\s+/)) {
    if (glifos[token]) return glifos[token];
  }
  return null;
}
