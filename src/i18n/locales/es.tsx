import React from "react";
import { AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";

export const es = {
  header: {
    nav: {
      about: "Sobre GONKA",
      pricing: "Precios",
      faq: "FAQ",
    },
    safecompute_nav: {
      about: "Sobre nosotros",
      problem: "Solución",
      pricing: "Precios",
      how_it_works: "Cómo funciona",
      economics: "Economía",
      faq: "FAQ",
    },
    cta: "Conectar",
  },
  hero: {
    tag: "GONKA Mainnet ya está activa",
    title: "Alquile NVIDIA H200 para Gonka",
    title_accent: "30% más barato que en la nube",
    description: "Las GPU optimizadas para Gonka reducen los costos de minería a $1 por GNK. Ofrecemos una solución llave en mano: configuración, lanzamiento y soporte 24/7.",
    cta: "Empezar a minar",
    features: {
      ready: "Solución llave en mano",
      ready_desc: "Nodo conectado a Mainnet",
      passive: "Ingresos pasivos",
      passive_desc: "Recompensas en tokens GNK",
      warranty: "Garantía",
      warranty_desc: "Compensación por inactividad",
    },
  },
  about: {
    title: "¿Qué es",
    title_accent: "GONKA",
    title_suffix: "y por qué es importante?",
    description: "GONKA es un protocolo descentralizado para cómputo de IA creado por los hermanos Liberman. A diferencia de la minería clásica que simplemente quema electricidad, la red GONKA realiza un trabajo útil.",
    cards: {
      useful: {
        title: "Cómputo Útil",
        desc: "Proporciona potencia para Inteligencia Artificial (Inferencia) y entrenamiento de modelos.",
      },
      protocol: {
        title: "Protocolo Único",
        desc: "Proof-of-Work basado en Transformadores: 99% de la potencia va a tareas reales de IA, y solo 1% a la seguridad de la red.",
      },
    },
    why: {
      title: "¿Por qué ahora?",
      list: [
        "Mainnet lanzada hace solo unos meses. La dificultad crece exponencialmente.",
        "Escasez aguda de chips H100/A100 a nivel mundial. GONKA permite monetizar este déficit.",
        "Una oportunidad para competir con gigantes tecnológicos (Google, OpenAI) en infraestructura de IA.",
      ],
    },
  },
  pricing: {
    title: "Precios y Condiciones",
    subtitle: "Clúster de IA basado en 8× GPU NVIDIA H200 listo para minar",
    note: "Cuanto más largo el alquiler, menor el precio por hora",
    plans: {
      short: {
        name: "Hasta 1 mes",
        price: "$8",
        period: "/ hora",
        features: ["Peso del nodo: 2000+", "Garantía de uptime", "Soporte 24/7"],
        cta: "Seleccionar",
      },
      medium: {
        tag: "POPULAR",
        name: "Hasta 2 meses",
        price: "$6",
        period: "/ hora",
        features: ["Peso del nodo: 2000+", "Máximo beneficio", "Soporte prioritario"],
        cta: "Alquilar Nodo",
      },
      long: {
        name: "3 meses o más",
        price: "$5",
        period: "/ hora",
        features: ["Peso del nodo: 2000+", "Contrato a largo plazo", "Gerente personal"],
        cta: "Seleccionar",
      },
    },
  },
  infrastructure: {
    title: "Infraestructura",
    title_accent: "Grado Industrial",
    subtitle: "Por qué alquilar un nodo con nosotros es más rentable que construir tu propia granja.",
    cards: {
      metal: {
        title: "Eficiencia Bare Metal",
        desc: "Proporcionamos acceso directo al hardware sin capas de virtualización. Su nodo utiliza el 100% de los recursos de la GPU. Las soluciones domésticas y en la nube (AWS, Azure) pierden 15-20% de rendimiento en overhead de hipervisores.",
        highlight: "acceso directo al hardware",
        tag: "Tasa de hash máxima sin pérdidas"
      },
      scale: {
        title: "Economía de Escala",
        desc: "El beneficio se logra a través del volumen. Compramos equipos y electricidad a tarifas industriales mayoristas. Tales precios no están disponibles para un minero individual.",
        highlight: "tarifas industriales mayoristas",
        tag: "Reducción de costos hasta 40%"
      }
    }
  },
  videos: {
    title: "Videos y",
    title_accent: "Entrevistas",
    items: [
      {
        title: "\"¡Open AI es una burbuja!\" Revelaciones de Silicon Valley",
        quote: "«No estamos creando nuevo oro (como Bitcoin), estamos creando combustible para el futuro de la IA. El mercado de cómputo de IA está valorado en decenas de billones de dólares.»"
      },
      {
        title: "David Liberman sobre IA Descentralizada (Bitcoin.com)",
        quote: "«Los jugadores centralizados amortizan las GPU en 6 años, mientras que en cripto la innovación actualiza el hardware cada año. La descentralización siempre gana en velocidad (y costo).»"
      },
      {
        title: "Bitfury invertirá $50M en total en el proyecto Gonka AI de los hermanos Liberman",
        quote: "«Los propietarios de GPU pueden alquilarlas a través del protocolo Gonka a cualquiera que necesite potencia de cómputo para proyectos de IA.»"
      },
      {
        title: "¿Quién posee el futuro del cómputo? La búsqueda para hacer la IA abierta para todos",
        quote: "«Si la IA es la nueva electricidad, el cómputo es la red que la alimenta. Quien controle los chips controlará la innovación de la próxima década.»"
      }
    ],
    read_article: "Leer Artículo"
  },
  faq: {
    title: "FAQ",
    subtitle: "Preguntas Frecuentes",
    items: [
      {
        q: "¿Qué es GONKA24.com?",
        a: "Es un servicio para alquilar nodos GPU listos para usar y participar en la red Gonka, simplificando la configuración y las recompensas de minería y cómputo."
      },
      {
        q: "¿Qué es un “nodo Gonka” y por qué es necesario?",
        a: "Un nodo es un servidor con una unidad de procesamiento gráfico (GPU) configurado para trabajar en la red Gonka. Participa en la computación distribuida y recibe recompensas por contribuir a la red."
      },
      {
        q: "¿Cómo se calculan las recompensas?",
        a: "Configuramos el nodo a su billetera fría y garantizamos las recompensas. Si su nodo no recibe recompensa por una época, reembolsamos el dinero. Si el peso del nodo es inferior a 2000, el precio se ajusta proporcionalmente."
      },
      {
        q: "¿Qué métodos de pago se aceptan?",
        a: "Puede pagar el alquiler a través de: BTC (Bitcoin), USDT, USD/EUR."
      },
      {
        q: "¿Cómo funciona la configuración y el lanzamiento del nodo?",
        a: "Después del pago, configuramos completamente el servidor para su billetera y aseguramos su funcionamiento. No necesita conocimientos técnicos, todo se hace por usted."
      },
      {
        q: "¿Cuánto tiempo tarda en lanzarse un nodo?",
        a: "Después de la confirmación del pago, la configuración suele ser rápida; nos pondremos en contacto con usted para aclarar los detalles de la billetera."
      }
    ]
  },
  resources: {
    title: "Recursos Útiles",
    subtitle: "Aprenda más sobre Gonka Network y la computación descentralizada",
    items: {
      whitepaper: { title: "Whitepaper", desc: "Documentación técnica del protocolo Gonka Network", action: "Leer" },
      tokenomics: { title: "Tokenomics GNK", desc: "Modelo económico y distribución de tokens", action: "Leer" },
      twitter: { title: "X (Twitter)", desc: "Siga las noticias y actualizaciones de Gonka", action: "Abrir" },
      discord: { title: "Comunidad Discord", desc: "Únase a la comunidad global de entusiastas", action: "Unirse" }
    }
  },
  cta_section: {
    how_it_works: {
      title: "Cómo funciona",
      steps: [
        { title: "Deja una solicitud", desc: "Complete un formulario simple" },
        { title: "Configuramos el nodo", desc: "A su billetera" },
        { title: "Recibe recompensas", desc: "En tokens GNK" }
      ]
    },
    title: "Participe en la creación de",
    title_accent: "infraestructura IA dex de próxima generación",
    subtitle: "Abierta. Escalable. Independiente.",
    button: "Empezar a minar"
  },
  footer: {
    rights: "© 2026 GONKA Mining. Todos los derechos reservados.",
    payment: "Pago: Prepago de 1 mes. Se proporcionarán detalles.",
    contact_text: "Si tiene alguna pregunta — escriba a",
    contact_link_text: "nuestro gerente",
    manager_link: "https://t.me/lina_semash",
    community_text: "Únase a nuestro",
    community_link_text: "grupo de chat en Telegram",
    community_link: "https://t.me/+40Xsw5RML45mOGEx"
  },
  safecompute: {
    hero: {
      tag: "GONKA Mainnet ya está activa",
      title: "Mine GNK desde $250",
      title_accent: "llave en mano",
      description: "Forme parte de la revolución de la IA descentralizada. Nos encargamos de la configuración del hardware y los servidores: usted obtiene monedas GNK minadas.",
      cta: "Empezar a minar",
      features: {
        ready: "Mejores GPUs",
        ready_desc: "Minería H100/H200",
        passive: "Llave en mano",
        passive_desc: "Manejamos la tecnología",
        warranty: "Economía",
        warranty_desc: "Minería a precios óptimos del mercado",
      },
    },
    about_custom: {
      title: "¿Qué es",
      title_accent: "Gonka Network?",
      description: "Gonka es una red descentralizada para cómputo de IA. A diferencia de las criptomonedas estándar, la minería aquí proporciona una utilidad real: entrenamiento de redes neuronales e inferencia.",
      facts: [
        {
          title: "Inversiones Gigantes",
          desc: "Bitfury (leyenda de la minería de Bitcoin) invirtió más de $50M, junto con fondos que apoyaron a OpenAI y Solana."
        },
        {
          title: "Fundadores",
          desc: "Los hermanos Liberman (ex-directores de Snapchat), creadores de \"unicornios\"."
        },
        {
          title: "Tecnología",
          desc: "Proof-of-Work de próxima generación. La potencia de la red ya es equivalente a miles de GPU H100."
        },
        {
          title: "Escasez",
          desc: "Suministro total de 1.000 millones de tokens, modelo de halving tipo Bitcoin (las recompensas disminuyen)."
        }
      ]
    },
    problem_solution: {
      title: "El Problema vs ",
      title_accent: "Nuestra Solución",
      problem: {
        title: "Minería por su cuenta",
        items: [
          "Requiere potentes GPU (H100/H200) que cuestan $2,000 - $30,000.",
          "Configuración compleja: Linux, Docker, gestión de claves.",
          "Riesgo de tiempo de inactividad y multas (slashing).",
        ]
      },
      solution: {
        title: "Minería con Nosotros",
        items: [
          "Entrada asequible: Comience desde solo $250. Agrupamos capital para potencia.",
          "Sin tecnología necesaria: Gestionamos nodos, actualizamos software y monitoreamos 24/7.",
          "Garantía de uptime: Administración profesional.",
        ]
      }
    },
    pricing: {
      title: "Condiciones Flexibles para Inversores",
      subtitle: "Cuanto mayor sea el depósito, mejores serán las condiciones",
      note: "La tarifa de gestión disminuye con el volumen",
      plans: {
        short: {
          name: "Compute Basic",
          price: "$250",
          period: "entrada mín",
          features: ["Fee de Gestión: 30%", "Ideal para probar hipótesis", "Intro al proyecto"],
          cta: "Seleccionar Plan",
        },
        medium: {
          tag: "RECOMENDADO",
          name: "Compute +",
          price: "$1,000",
          period: "entrada mín",
          features: ["Fee de Gestión: 20%", "10% Beneficio", "Elección Óptima"],
          cta: "Seleccionar Plan",
        },
        long: {
          name: "Compute Premium Pool",
          price: "desde $10,000+",
          period: "/ mes",
          features: [
            "∞ NVIDIA H200 (escalable según tarea)",
            "Precio por hora: calculado individualmente",
            "Fee de gestión: 5%",
            "Configuración directa de billetera"
          ],
          cta: "Contáctenos",
        },
      },
    },
    how_it_works: {
      title: "Cómo funciona",
      subtitle: "Parte técnica en palabras simples",
      steps: [
        { title: "Depósito", desc: "Usted deposita USDT/USDC (TRC20)." },
        { title: "Lanzamiento", desc: "Asignamos fondos para comprar/alquilar acciones de GPU en clústeres." },
        { title: "Épocas", desc: "El hardware realiza tareas de inferencia y gana recompensas." },
        { title: "Distribución", desc: "Las recompensas menos la tarifa se acreditan a su billetera mensualmente (180 días de vesting)." }
      ]
    },
    fomo: {
      title: "Bitcoin para la Era de la IA",
      subtitle: "Apenas comenzando",
      text: "La red se lanzó en agosto de 2025. Estamos en el temprano 'Grace Period' donde las recompensas son máximas.",
      grace_period: "Grace Period",
      today: "Hoy",
      disclaimer: "* El gráfico es una ilustración visual del cambio en las recompensas mineras individuales a lo largo del tiempo.",
      chart: {
        start: "Inicio (2025)",
        halving1: "Halving 1 (Ago 2029)",
        halving2: "Halving 2 (Ago 2033)",
        daily_reward_potential: "Potencial de Recompensa Diaria",
        daily_reward: "Recompensa Diaria",
        reward: "Recompensa",
        month: "Mes"
      },
      epochs: {
        now: {
          title: "Ahora (2025–2029)",
          text: "La red asigna <span class=\"text-primary font-mono\">~323,000 GNK</span> por día a todos los mineros."
        },
        halving1: {
          title: "Después del 1er Halving (Ago 2029)",
          text: "La asignación cae a <span class=\"text-primary font-mono\">~161,500 GNK</span> por día."
        },
        halving2: {
          title: "Después del 2do Halving (Ago 2033)",
          text: "La asignación cae a <span class=\"text-primary font-mono\">~80,750 GNK</span> por día."
        }
      }
    },
    tokenomics_section: {
      title: "Tokenomics Transparente",
      description: "La minería se basa en la tokenomics pública del proyecto.\nTodas las reglas de emisión, distribución y uso de monedas son fijas y abiertas.",
      link_text: "Leer tokenomics del proyecto",
      link_url: "https://gonka.ai/tokenomics.pdf"
    },
    faq: {
      title: "FAQ",
      subtitle: "Preguntas Frecuentes",
      items: [
        {
          q: "¿Qué garantías ofrecen?",
          a: (
            <div className="space-y-3">
              <p>Proporcionamos un enlace público de blockchain donde puede rastrear en cualquier momento:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>el saldo,</li>
                <li>los GNK acumulados,</li>
              </ul>
              <p>Todas las operaciones son transparentes y verificables en la blockchain.</p>
            </div>
          )
        },
        {
          q: "¿Qué es el Management Fee?",
          a: (
            <div className="space-y-3">
              <p>Management Fee es una comisión por la gestión de infraestructura que deducimos además del monto que depositó.</p>
              <p>La comisión incluye:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>administración de nodos,</li>
                <li>monitoreo de tiempo de actividad,</li>
                <li>unjail de nodos,</li>
                <li>reclamo de recompensas,</li>
                <li>soporte técnico.</li>
              </ul>
            </div>
          )
        },
        {
          q: "¿Puedo retirar fondos después de la asignación a potencia de cómputo?",
          a: (
            <div className="space-y-3">
              <p className="font-bold text-red-400">No.</p>
              <p>Si los fondos ya están asignados a potencia de cómputo, los reembolsos no son posibles hasta que finalice el período de minería.</p>
              <p>Esto se debe a que el hardware se alquila y se fija para un caso específico.</p>
            </div>
          )
        },
        {
          q: "¿Cuándo se actualiza el estado del pago?",
          a: (
            <div className="space-y-3">
              <p>El estado del pago se actualiza automáticamente dentro de 1-2 horas después de la confirmación de la blockchain.</p>
              <p>Si han pasado más de 2 horas y el estado no se ha actualizado, escriba a nuestro soporte en Telegram.</p>
            </div>
          )
        },
        {
          q: "¿Qué es el vesting y por qué es necesario?",
          a: (
            <div className="space-y-3">
              <p>El vesting es un mecanismo de desbloqueo gradual de tokens ganados, utilizado en Gonka Network para:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>estabilidad económica,</li>
                <li>protección contra la especulación,</li>
                <li>prevención de ventas masivas repentinas.</li>
              </ul>
            </div>
          )
        },
        {
          q: "¿Cómo funciona el vesting?",
          a: (
            <div className="space-y-3">
              <p>Cada día se desbloquea 1/180 de la cantidad ganada el día anterior.</p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="font-semibold mb-2 text-primary">Ejemplo:</p>
                <ul className="space-y-2 text-sm">
                  <li>Hoy el pool ganó <span className="text-foreground font-semibold">180 GNK</span></li>
                  <li>Mañana se desbloquea <span className="text-foreground font-semibold">1 GNK</span></li>
                  <li>Pasado mañana — otro <span className="text-foreground font-semibold">1 GNK</span></li>
                </ul>
                <p className="mt-3 text-sm italic opacity-80">
                  Si mañana el pool gana 180 GNK nuevamente, entonces pasado mañana se desbloquearán 2 GNK
                  (1 GNK por el primer día + 1 GNK por el segundo)
                </p>
              </div>
            </div>
          )
        },
        {
          q: "¿Cómo retirar tokens?",
          a: (
            <div className="space-y-3">
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Envía una solicitud de retiro en nuestro Telegram</li>
                <li>Transferimos las monedas a su billetera especificada en la solicitud</li>
                <li>La transferencia se ejecuta dentro de las 24 horas posteriores a la recepción de la solicitud</li>
              </ol>
            </div>
          )
        },
        {
          q: "¿Cómo crear una billetera Gonka Network?",
          a: (
            <div className="space-y-4">
              <p>Recomendamos usar <span className="text-foreground font-semibold">Keplr Wallet</span> con autorización de Google.</p>

              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-bold">Importante:</span>
                </div>
                <ul className="space-y-1 text-sm text-red-600/80">
                  <li>Nunca comparta su clave privada con terceros</li>
                  <li>Guarde su clave privada en un lugar seguro</li>
                  <li>Si pierde el acceso a Gmail — la recuperación solo es posible a través de la clave privada</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          q: "Instrucciones paso a paso para crear una billetera Keplr",
          a: (
            <div className="space-y-4">
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Vaya al sitio web oficial de Keplr y haga clic en "Get Keplr Wallet"</li>
                <li>Elija la extensión para su navegador (Chrome, Firefox, Edge, Brave)</li>
                <li>Instale la extensión</li>
                <li>Haga clic en "Create a new wallet"</li>
                <li>Seleccione "Connect with Google"</li>
              </ol>

              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-yellow-400">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-bold">Importante:</span>
                </div>
                <p className="text-sm text-yellow-700/80 mb-2">No elija la opción de frase mnemotécnica.</p>
                <p className="text-sm text-yellow-700/80">
                  Sin autorización de Google no podrá realizar transacciones a través del puente; la plataforma requiere autorización de Google.
                </p>
              </div>

              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Termine la configuración de la billetera</li>
                <li>Guarde su clave privada</li>
                <li>Seleccione las redes Cosmos Hub y Gonka</li>
              </ul>
            </div>
          )
        },
        {
          q: "¿Cómo conectarse al Dashboard descentralizado de Gonka?",
          a: (
            <div className="space-y-4">
              <p>Elija cualquier nodo de la lista (todos son equivalentes):</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm font-mono text-primary">
                {[
                  "http://185.216.21.98:8000",
                  "http://69.19.136.233:8000",
                  "http://36.189.234.197:18026",
                  "http://36.189.234.237:17241",
                  "http://node1.gonka.ai:8000",
                  "http://node2.gonka.ai:8000",
                  "http://node3.gonka.ai:8000",
                  "http://47.236.26.199:8000",
                  "http://47.236.19.22:18000",
                  "http://gonka.spv.re:8000"
                ].map((url) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-2 rounded bg-muted/50 hover:bg-muted transition-colors flex items-center justify-between group"
                  >
                    <span className="truncate">{url}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">Consejo: puede elegir cualquiera, todos dan acceso a la red Gonka.</p>
            </div>
          )
        },
        {
          q: "¿Cómo conectar la billetera al Dashboard?",
          a: (
            <div className="space-y-3">
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Abra el Dashboard en la URL seleccionada</li>
                <li>Haga clic en "Connect Wallet" (esquina superior derecha)</li>
                <li>Seleccione Keplr</li>
                <li>Confirme la adición de la red Gonka</li>
                <li className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" /> Listo
                </li>
              </ol>
              <p className="text-muted-foreground">Ahora puede copiar la dirección de su billetera: es su dirección GNK para recibir recompensas.</p>
            </div>
          )
        }
      ]
    },
    final_cta: {
      title: "Empiece a minar hoy",
      subtitle: "Condiciones transparentes. Planes flexibles.",
      text: "Empiece a ganar monedas GNK sin configuraciones complejas.",
      button: "Empezar a minar"
    }
  },
  calculator: {
    title: "Calculadora de Rendimiento GNK",
    subtitle: "Seleccione un grupo e ingrese el monto de la inversión",
    pools: {
      light: {
        name: "Compute Light",
        badge: "Peso inicial 300"
      },
      pro: {
        name: "Compute Pro",
        badge: "Peso inicial 1500",
        discount_badge: "-10%"
      },
      premium: {
        name: "Compute Premium",
        badge: "Peso ∞",
        discount_badge: "-15%"
      }
    },
    info: {
      min_deposit: "Depósito mín.:",
      max_deposit: "Depósito máx.:",
      node_weight: "Tu participación:",
      management_fee: "Tarifa de gestión:",
      yield_per_day: "GNK/día"
    },
    input: {
      label: "Monto de inversión mensual ($)",
      placeholder: "Ingrese el monto",
      error: {
        min: "El monto mínimo para {name} es {min}",
        max: "El monto máximo para {name} es {max}"
      }
    },
    results: {
      daily: "GNK por día",
      monthly: "GNK por mes",
      tooltip: "Estas son cifras aproximadas. Los valores difieren significativamente según los hosts de la red.",
      disclaimer: "Cálculos aproximados. Basados en el peso de la red {weight} y recompensa {reward} GNK el {date}."
    }
  }
};
