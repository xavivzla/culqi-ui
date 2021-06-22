<template>
  <div>
    <md-autocomplete
      v-model="selectedGroup"
      :md-options="dataGroup"
      mdOutlined
      md-group
      md-group-item="detail"
      md-group-item-label="description"
      md-group-name="name"
      @md-changed="prueba"
    >
      <label>mdOutlined group</label>

      <template v-slot:helper>
        <span class="md-helper-text">Helper text</span>
        <span class="md-error">There is an error</span>
      </template>
    </md-autocomplete>

    <md-autocomplete
      v-model="selectedCountry"
      :md-options="countries"
      mdOutlined
    >
      <label>autocomplete group</label>
    </md-autocomplete>

    <md-autocomplete v-model="selectedCountry" :md-options="countries">
      <label>Country</label>
    </md-autocomplete>

    <md-autocomplete
      v-model="selectedEmployee"
      :md-options="employees"
      md-dense
    >
      <label>Employees</label>
    </md-autocomplete>
  </div>
</template>

<script>
export default {
  name: "AutocompleteStatic",
  data: () => ({
    selectedCountry: null,
    selectedGroup: null,
    selectedEmployee: null,
    dataGroup: [
      {
        name: "AGROPECUARIA",
        slug: "kIb2XpDavWhkOHHr",
        detail: [
          {
            description: "Servicios veterinarios",
            code: "0742"
          },
          {
            description: "Cooperativas agricolas",
            code: "0763"
          },
          {
            description: "Servicios de horticultura y paisajismo",
            code: "0780"
          }
        ]
      },
      {
        name: "ALIMENTOS EN GENERAL",
        slug: "xjslcG8zlvSXTjFo",
        detail: [
          {
            description: "Minimarkets, bodegas y supermercados",
            code: "5411"
          },
          {
            description:
              "Tiendas misceláneas de comida – tiendas de conveniencia y mercados especializados.",
            code: "5499"
          },
          {
            description: "Pastelerías.",
            code: "5462"
          },
          {
            description:
              "Mercados y minoristas, almacenaje refrigerado y productos a granel de carne.",
            code: "5422"
          },
          {
            description: "Dulcerías (tiendas de dulces, nueces y confiterías).",
            code: "5441"
          },
          {
            description: "Tiendas de productos lácteos.",
            code: "5451"
          }
        ]
      },
      {
        name: "ALQUILER Y REPARACION DE VEHICULOS",
        slug: "wsdhMwHctMjeRgsO",
        detail: [
          {
            description: "Agencias de alquiler de autos",
            code: "7512"
          },
          {
            description: "Estacionamientos de autos",
            code: "7523"
          },
          {
            description: "Talleres de servicio automotriz (no comerciante)",
            code: "7538"
          },
          {
            description: "Lavado de autos",
            code: "7542"
          },
          {
            description: "Servicios de remolque",
            code: "7549"
          }
        ]
      },
      {
        name: "ARTICULOS Y\/O EQUIPOS PARA EL HOGAR",
        slug: "GYpdp47WBSk4ZnrP",
        detail: [
          {
            description: "Electrodomésticos",
            code: "5722"
          },
          {
            description: "Música u otros medios",
            code: "5735"
          },
          {
            description: "Tiendas de electronicos",
            code: "5732"
          },
          {
            description:
              "Tiendas de música – instrumentos musicales, pianos y partituras",
            code: "5733"
          },
          {
            description: "Tiendas de sistemas para computadoras.",
            code: "5734"
          },
          {
            description:
              "Muebles, tiendas de mobiliario y equipo para el hogar, excepto aparatos.",
            code: "5712"
          },
          {
            description: "Tiendas de cubiertas para pisos.",
            code: "5713"
          },
          {
            description:
              "Tiendas de cortinas, cubiertas para ventanas y tapicería.",
            code: "5714"
          },
          {
            description:
              "Tiendas de especialidad para implementación miscelánea del hogar (tiendas de decoracion en general)",
            code: "5719"
          }
        ]
      },
      {
        name: "CONSTRUCCION",
        slug: "2MfHbzlXLLOJoVep",
        detail: [
          {
            description: "Contratistas generales – residencial y comercial",
            code: "1520"
          },
          {
            description:
              "Contratistas en calefaccion, plomeria y acondicionamiento de aire",
            code: "1711"
          },
          {
            description: "Contratistas en electricidad",
            code: "1731"
          },
          {
            description: "Contratistas en carpinteria",
            code: "1750"
          },
          {
            description:
              "Contratistas en albañileria, canteria, embaldosado, relleno con yeso y aislamiento",
            code: "1740"
          },
          {
            description:
              "Contratistas con oficio especial (no clasificado en otro mcc)",
            code: "1799"
          }
        ]
      },
      {
        name: "CONSUMO DE ALIMENTOS Y BEBIDAS",
        slug: "BRlj08xRC3He9Y4T",
        detail: [
          {
            description: "Servicio de catering",
            code: "5811"
          },
          {
            description: "Restaurantes y vida nocturna",
            code: "5812"
          },
          {
            description: "Restaurantes de comida rápida",
            code: "5814"
          },
          {
            description:
              "Lugares para beber (bebidas alcohólicas) – bares, tabernas, clubes nocturnos, salas de cócteles y discotecas. (discotecas, peñas, bares y pub's)",
            code: "5813"
          }
        ]
      },
      {
        name: "GOBIERNO",
        slug: "g3XhD9z3vTDCH5Zb",
        detail: [
          {
            description: "Pagos de impuestos",
            code: "9311"
          }
        ]
      },
      {
        name: "INTERMEDIACION FINANCIERA",
        slug: "89jIJQbrFMRr4mlk",
        detail: [
          {
            description: "Instituciones financieras – mercancia y servicios",
            code: "6012"
          },
          {
            description: "Agentes de valores y corredores de bolsa",
            code: "6211"
          },
          {
            description: "Ventas de seguros, garantías y primas",
            code: "6300"
          },
          {
            description: "Tiempo compartido",
            code: "7012"
          },
          {
            description:
              "Instituciones no financieras - moneda extranjera, giros (no transferencias de efectivo), cheques de viajero",
            code: "6051"
          },
          {
            description: "Parques para caravanas y locaciones para acampar.",
            code: "7033"
          }
        ]
      },
      {
        name: "LIMPIEZA",
        slug: "Dl4Wie4TKHJg5DuX",
        detail: [
          {
            description: "Lavanderías – familiares y comerciales",
            code: "7211"
          },
          {
            description: "Limpieza de alfombras y tapicería.",
            code: "7217"
          }
        ]
      },
      {
        name: "MERCADERIA EN GENERAL",
        slug: "QQYNHyOyXqjeqRkB",
        detail: [
          {
            description: "Tiendas libres de impuestos (duty free)",
            code: "5309"
          },
          {
            description: "Clubes mayoristas",
            code: "5300"
          },
          {
            description: "Tiendas de descuentos",
            code: "5310"
          },
          {
            description: "Tiendas por departamentos",
            code: "5311"
          },
          {
            description:
              "Tiendas de conveniencia, mini mart, tienda de variedad",
            code: "5331"
          },
          {
            description: "Mercadería miscelánea (bazares y tiendas de regalo)",
            code: "5399"
          }
        ]
      },
      {
        name: "ORGANIZACIONES Y ASOCIACIONES",
        slug: "YthAybJH6cQQ0TNU",
        detail: [
          {
            description: "Servicios de cuidado infantil, guardería",
            code: "8351"
          },
          {
            description:
              "Organizaciones caritativas y servicios sociales (organizaciones sin fines de lucro)",
            code: "8398"
          },
          {
            description: "Organizaciones religiosas",
            code: "8661"
          },
          {
            description: "Organizaciones de membresía",
            code: "8699"
          },
          {
            description: "Otro servicios profesionales",
            code: "8999"
          },
          {
            description:
              "Asociaciones cívicas, sociales y fraternales y colegios profesionales",
            code: "8641"
          },
          {
            description: "Asociaciones automovilísticas",
            code: "8675"
          }
        ]
      },
      {
        name: "REPARACION DE EQUIPOS Y\/O ARTC. DEL HOGAR",
        slug: "6DTtwOP6BYWuemz6",
        detail: [
          {
            description:
              "Tiendas de reparación de pequeños aparatos eléctricos",
            code: "7629"
          },
          {
            description: "Retapizado, reparación y retoque de muebles",
            code: "7641"
          }
        ]
      },
      {
        name: "SERVICIOS DE ALOJAMIENTO",
        slug: "Du1Qty5UqXjQ8EGl",
        detail: [
          {
            description: "Agentes de bienes inmobiliarios - alquiler",
            code: "6513"
          },
          {
            description: "Hoteles, moteles y posadas",
            code: "7011"
          }
        ]
      },
      {
        name: "SERVICIOS DE COMUNICACION",
        slug: "zv1w4Hckk2CxZ7UT",
        detail: [
          {
            description: "Ventas de equipos de telecomunicación y teléfonos",
            code: "4812"
          },
          {
            description:
              "Servicios de telecomunicación incluyendo llamadas locales y de larga distancia, llamadas con tarjeta de crédito a través de teléfonos con lectora de banda magnética y servicios de fax.",
            code: "4814"
          },
          {
            description: "Redes de computadoras \/ servicios de informacion",
            code: "4816"
          },
          {
            description:
              "Transferencia de efectivo por giro (wtmos – wire transfer money orders)",
            code: "4829"
          },
          {
            description: "Utensilios de metal, equipos y suministros",
            code: "5072"
          },
          {
            description:
              "Cable satelite y otros servicios pagados de televisión y radio",
            code: "4899"
          },
          {
            description: "Productos informáticos",
            code: "5045"
          },
          {
            description: "Equipos comerciales (no clasificados en otro mcc)",
            code: "5046"
          },
          {
            description: "Mayoristas de productos de metal.",
            code: "5051"
          },
          {
            description:
              "Suministros industriales (no clasificados en otro mcc)",
            code: "5085"
          }
        ]
      },
      {
        name: "SERVICIOS DE RECREACION",
        slug: "ThvGisLk1oNE30QR",
        detail: [
          {
            description: "Cines",
            code: "7832"
          },
          {
            description: "Tiendas de alquiler de videos.",
            code: "7841"
          },
          {
            description: "Salones de baile, estudios y escuelas",
            code: "7911"
          },
          {
            description: "Agencias de ventas para entrada de espectáculos",
            code: "7922"
          },
          {
            description:
              "Apuestas, incluyendo boletos de lotería, fichas de casino, apuestas fuera de las pistas, apuestas en las pistas de carrera",
            code: "7995"
          },
          {
            description: "Parques de atracciones, ferias y circos",
            code: "7996"
          },
          {
            description: "Músicos, grupos y orquestas",
            code: "7929"
          },
          {
            description: "Establecimientos de billar",
            code: "7932"
          },
          {
            description: "Centros de bolos (boliche)",
            code: "7933"
          },
          {
            description:
              "Establecimientos de juegos de video y máquinas de recreación",
            code: "7994"
          },
          {
            description: "Clubes privados",
            code: "7997"
          },
          {
            description:
              "Internacional: servicios de recreación – no clasificado en otro mcc",
            code: "7999"
          },
          {
            description: "Nacional: concesiones y servicios en clubes.",
            code: "7999"
          }
        ]
      },
      {
        name: "SERVICIOS DE TRANSPORTE",
        slug: "LvWJYGFCP8XF7814",
        detail: [
          {
            description: "Servicio de transporte compartido",
            code: "4111"
          },
          {
            description: "Trenes de pasajeros",
            code: "4112"
          },
          {
            description: "Servicio de ambulancias",
            code: "4119"
          },
          {
            description: "Servicio de taxis y limosinas",
            code: "4121"
          },
          {
            description: "Transporte urbano y suburbano",
            code: "4215"
          },
          {
            description: "Agencias de viaje y operadores turísticos",
            code: "4722"
          },
          {
            description: "Trenes",
            code: "4011"
          },
          {
            description: "Líneas de autobuses",
            code: "4131"
          },
          {
            description:
              "Portadores motorizados de carga y transporte de mercancías – local y larga distancia, compañías de retiro y almacenaje, y servicios locales de entrega",
            code: "4214"
          },
          {
            description: "Compañía de cruceros",
            code: "4411"
          },
          {
            description: "Alquiler y arrendamiento de botes",
            code: "4457"
          },
          {
            description: "Muelles, servicios marítimos y suministros",
            code: "4468"
          },
          {
            description: "Líneas aéreas y compañías de tansporte aéreo",
            code: "4511"
          }
        ]
      },
      {
        name: "SERVICIOS LEGALES Y DE ENSEÑANZA",
        slug: "SGQqKyqxiWDMyivG",
        detail: [
          {
            description: "Servicios legales y abogados",
            code: "8111"
          },
          {
            description: "Institutos de estudios superiores o universidades",
            code: "8220"
          },
          {
            description: "Centros de enseñanza primaria y secundaria",
            code: "8211"
          },
          {
            description: "Escuelas a distancia",
            code: "8241"
          },
          {
            description: "Escuelas vocacionales y de oficio",
            code: "8249"
          },
          {
            description: "Otros servicios educacionales",
            code: "8299"
          }
        ]
      },
      {
        name: "SERVICIOS MEDICOS",
        slug: "Ig2lt3ra0gN4vEBQ",
        detail: [
          {
            description: "Doctores y médicos",
            code: "8011"
          },
          {
            description: "Dentistas y ortodontistas",
            code: "8021"
          },
          {
            description: "Quiroprácticos y servicios de rehabilitacion",
            code: "8041"
          },
          {
            description: "Optometristas y oftalmólogos",
            code: "8042"
          },
          {
            description: "Ópticas, gafas y artículos relacionados",
            code: "8043"
          },
          {
            description: "Podólogos y pedicuros",
            code: "8049"
          },
          {
            description:
              "Locales de enfermería y cuidado personal (casas de reposo)",
            code: "8050"
          },
          {
            description: "Hospitales (clinicas y centros medicos)",
            code: "8062"
          },
          {
            description: "Laboratorios médicos y dentales",
            code: "8071"
          },
          {
            description: "Otros servicios médicos",
            code: "8099"
          }
        ]
      },
      {
        name: "SERVICIOS NO PERSONALES",
        slug: "XW2FsJ1g3g0s2u4S",
        detail: [
          {
            description: "Servicios de publicidad",
            code: "7311"
          },
          {
            description: "Fotografía, arte y gráficos comerciales",
            code: "7333"
          },
          {
            description: "Copias, reproducción y servicios de ploteo.",
            code: "7338"
          },
          {
            description: "Servicios de exterminación y desinfección.",
            code: "7342"
          },
          {
            description: "Servicios de limpieza, mantenimiento y conserjería",
            code: "7349"
          },
          {
            description:
              "Agencias de empleos y servicios de trabajadores temporales",
            code: "7361"
          },
          {
            description: "Servicios de programación, desarrollo y diseño",
            code: "7372"
          },
          {
            description:
              "Servicios de administración, consultoría y relaciones públicas",
            code: "7392"
          },
          {
            description:
              "Agencias de detectives, servicios de protección, y servicios de seguridad, incluyendo vehículos blindados, y perros guardianes",
            code: "7393"
          },
          {
            description: "Mobiliario y menaje del hogar",
            code: "7394"
          },
          {
            description: "Otros servicios recreativos",
            code: "7399"
          }
        ]
      },
      {
        name: "SERVICIOS PERSONALES",
        slug: "n3akndvQY6Dls01Q",
        detail: [
          {
            description: "Salones de masajes",
            code: "7297"
          },
          {
            description: "Estudios fotograficos",
            code: "7221"
          },
          {
            description: "Peluquerías y barberías.",
            code: "7230"
          },
          {
            description: "Spas de salud y belleza, gimnasios",
            code: "7298"
          },
          {
            description:
              "Tiendas de reparación de zapatos, salas de lustrado de zapatos y tiendas de limpieza de sombreros (renovadora de calzado)",
            code: "7251"
          },
          {
            description: "Servicios funerarios y crematorios",
            code: "7261"
          },
          {
            description:
              "Alquiler de vestimenta – disfraces, uniformes, ropa formal",
            code: "7296"
          },
          {
            description: "Otros servicios personales",
            code: "7299"
          }
        ]
      },
      {
        name: "SERVICIOS PUBLICOS",
        slug: "TM0IkGjqN8xZn3t4",
        detail: [
          {
            description: "Servicios electricidad, agua, sanitarios",
            code: "4900"
          }
        ]
      },
      {
        name: "TIENDAS ESPECIALIZADAS",
        slug: "26FY4bdhDJ1AQK2N",
        detail: [
          {
            description: "Farmacéuticos y farmacias (droguerias y perfumerias)",
            code: "5912"
          },
          {
            description: "Licorerías – cerveza, vinos y bebidas alcohólicas",
            code: "5921"
          },
          {
            description: "Tiendas de mercaderías usadas y de segunda mano",
            code: "5931"
          },
          {
            description:
              "Tiendas de antigüedades – ventas, servicios de reparación y restauración.",
            code: "5932"
          },
          {
            description: "Reproducciones de antigüedades",
            code: "5937"
          },
          {
            description: "Tiendas de bicicletas – ventas y servicios",
            code: "5940"
          },
          {
            description: "Tiendas de mercancías deportivas",
            code: "5941"
          },
          {
            description:
              "Tiendas de artículos para escribir, tiendas de suministros para oficina y colegio",
            code: "5943"
          },
          {
            description:
              "Tiendas de joyas, relojes pequeños, relojes grandes y platería",
            code: "5944"
          },
          {
            description: "Tiendas de pasatiempos, juguetes y juegos",
            code: "5945"
          },
          {
            description: "Tiendas de suministros para cámaras y fotografía",
            code: "5946"
          },
          {
            description: "Tiendas de equipaje y mercancías de cuero",
            code: "5948"
          },
          {
            description:
              "Tiendas de pasamanería tienda de ventas de telas y pasamaneria",
            code: "5949"
          },
          {
            description: "Utensilios de cristal \/ cristalerías",
            code: "5950"
          },
          {
            description: "Venta de puerta en puerta",
            code: "5963"
          },
          {
            description: "Tiendas de suministros para artistas y artesanías",
            code: "5970"
          },
          {
            description:
              "Comerciantes de combustibles, gasolina, madera, carbon y petroleo licuado (venta y servicio de lubricantes)",
            code: "5983"
          },
          {
            description: "Tiendas y puestos de cigarros.",
            code: "5993"
          },
          {
            description:
              "Equipos y suministros médicos, dentales, oftalmológico y hospitales.",
            code: "5047"
          },
          {
            description: "Casas de empeño",
            code: "5933"
          },
          {
            description: "Ebooks y audiolibros",
            code: "5942"
          },
          {
            description: "Tienda de regalos, tarjetas, novedades y recuerdos",
            code: "5947"
          },
          {
            description:
              "Marketing directo – servicios de acuerdos relacionados con viajes",
            code: "5962"
          },
          {
            description: "Marketing directo – comercio por catálogo",
            code: "5964"
          },
          {
            description:
              "Marketing directo – comercios de telemarketing de salida",
            code: "5966"
          },
          {
            description:
              "Marketing directo – comercios de continuidad\/suscripción",
            code: "5968"
          },
          {
            description: "Marketing directo - otros comerciantes directos",
            code: "5969"
          },
          {
            description: "Negociantes de arte y galerías",
            code: "5971"
          },
          {
            description: "Tiendas de estampillas y monedas",
            code: "5972"
          },
          {
            description: "Tiendas de mercancías religiosas",
            code: "5973"
          },
          {
            description: "Ayuda auditiva – ventas, servicio y suministro.",
            code: "5975"
          },
          {
            description:
              "Mercancías ortopédicas – dispositivo protéticos (aparatos ortopedicos)",
            code: "5976"
          },
          {
            description: "Tiendas de cosméticos",
            code: "5977"
          },
          {
            description:
              "Tiendas de máquinas de escribir – ventas, alquiler, servicio",
            code: "5978"
          },
          {
            description: "Florerías",
            code: "5992"
          },
          {
            description: "Vendedores de periódicos y kioscos.",
            code: "5994"
          },
          {
            description:
              "Tiendas de mascotas, tienda de alimentos y suministros para mascotas.",
            code: "5995"
          },
          {
            description: "Piscinas – ventas y servicios",
            code: "5996"
          },
          {
            description:
              "Tiendas de máquinas eléctricas de afeitar – ventas y servicio",
            code: "5997"
          },
          {
            description: "Tiendas de carpas y toldos",
            code: "5998"
          },
          {
            description: "Tiendas minoristas misceláneas y especializadas",
            code: "5999"
          }
        ]
      },
      {
        name: "VEHICULOS",
        slug: "0JSu5oI4X8ojF041",
        detail: [
          {
            description:
              "Comerciantes automotrices de neumáticos (venta y servicio de llantas)",
            code: "5532"
          },
          {
            description: "Tiendas de partes y accesorios automotrices.",
            code: "5533"
          },
          {
            description:
              "Comerciantes de autos y camiones (nuevos y usados) ventas, servicio, reparaciones, partes y arrendamiento.",
            code: "5511"
          },
          {
            description:
              "Comerciantes de autos y camiones (sólo usados) ventas, servicio, reparaciones, partes y arrendamiento.",
            code: "5521"
          },
          {
            description:
              "Estaciones de servicio (con o sin servicios de asistencia) \/ grifos, servicio y expendio de gasolina",
            code: "5541"
          },
          {
            description: "Comerciantes de botes",
            code: "5551"
          },
          {
            description: "Tiendas y comerciantes de motocicletas",
            code: "5571"
          },
          {
            description: "Comerciantes de casas rodantes",
            code: "5592"
          },
          {
            description: "Repuestos y accesorios automotrices",
            code: "5599"
          }
        ]
      },
      {
        name: "VESTIMENTA E INDUMENTARIA",
        slug: "XBI2bnWN1gZIjPuD",
        detail: [
          {
            description: "Tiendas de ropa para hombres y niños y accesorios",
            code: "5611"
          },
          {
            description: "Tiendas de ropa para damas",
            code: "5621"
          },
          {
            description: "Tiendas de vestimenta para niños e infantes",
            code: "5641"
          },
          {
            description: "Zapaterias",
            code: "5661"
          },
          {
            description: "Tiendas de ropa lista para usar para damas",
            code: "5631"
          },
          {
            description: "Tiendas de ropa familiar",
            code: "5651"
          },
          {
            description: "Tiendas de ropa deportiva",
            code: "5655"
          },
          {
            description: "Peleterías y tiendas de pieles (ropa de cueros)",
            code: "5681"
          },
          {
            description: "Tiendas de ropa para hombres y damas",
            code: "5691"
          },
          {
            description: "Sastres, costureras, reparaciones y alteraciones",
            code: "5697"
          },
          {
            description: "Tiendas misceláneas de ropa y accesorios",
            code: "5699"
          }
        ]
      },
      {
        name: "VIVIENDA",
        slug: "6501ajWKbprpgu5y",
        detail: [
          {
            description: "Tiendas de vidrio, pintura y empapelado de paredes.",
            code: "5231"
          },
          {
            description: "Tiendas de madera y materiales de construcción",
            code: "5211"
          },
          {
            description: "Ferreterias",
            code: "5251"
          },
          {
            description: "Tiendas de suministros para viveros y patio y jardín",
            code: "5261"
          },
          {
            description: "Comerciantes de caravanas (casas pre-fabricadas)",
            code: "5271"
          }
        ]
      }
    ],
    countries: [
      "Algeria",
      "Argentina",
      "Brazil",
      "Canada",
      "Italy",
      "Japan",
      "United Kingdom",
      "United States"
    ],
    employees: [
      "Jim Halpert",
      "Dwight Schrute",
      "Michael Scott",
      "Pam Beesly",
      "Angela Martin",
      "Kelly Kapoor",
      "Ryan Howard",
      "Kevin Malone",
      "Creed Bratton",
      "Oscar Nunez",
      "Toby Flenderson",
      "Stanley Hudson",
      "Meredith Palmer",
      "Phyllis Lapin-Vance"
    ]
  }),
  methods: {
    prueba(dd) {
      console.log(
        "🚀 ~ file: AutocompleteStatic.vue ~ line 125 ~ prueba ~ dd",
        dd
      );
    }
  }
};
</script>
