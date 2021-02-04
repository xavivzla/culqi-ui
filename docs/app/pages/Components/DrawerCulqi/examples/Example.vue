<template>
  <div style="min-height: 70vh; position: relative;">
    <md-drawer-culqi
      :mdMenus="menus"
      :merchants="merchants"
      :support="support"
      notificacionVisible
      :notification="notification"
      @closeMerchant="_handleClickCloseMerchant"
      @myAccount="_handleMyAccount"
      @logout="_handleLogout"
      :adminName="adminName"
      :adminRole="adminRole"
      :currentMerchantImg="currentMerchantImg"
      :currentMerchant="currentMerchant"
      :adminNameInitials="adminNameInitials"
      :numberPhoneCulqi="numberPhoneCulqi"
      :imgNotificationNone="imgNotificationNone"
      @changeMerchant="_handeChangeMerchant"
    />
  </div>
</template>

<script>
export default {
  name: "Example",
  data: () => ({
    adminName: "Jaime Chiarella casdsad  asdad asda d",
    adminNameInitials: "JC",
    adminRole: "Administrador",
    currentMerchantImg: "/assets/examples/card-weather.png",
    currentMerchant: "Industrias San Miguel",
    numberPhoneCulqi: "+51 947891087",
    imgNotificationNone: '/assets/notifications.png',
    menus: [
      {
        items: [
          {
            icon: "/assets/shape.svg",
            title: "Resumen",
            patch: "/components/button",
          },
          {
            icon: "/assets/examples/card-weather.png",
            title: "Ventas",
            patch: "/components/drawer-culqi",
          },
          {
            icon: "/assets/examples/card-weather.png",
            title: "Depósitos",
            patch: "#",
          },
          {
            icon: "/assets/examples/card-weather.png",
            title: "Mis herramientas",
            patch: "#",
            children: [
              {
                icon: "/assets/examples/card-weather.png",
                title: "Links de pago",
                patch: "#",
              },
              {
                icon: "/assets/examples/card-weather.png",
                title: "Mis CulqiPoint",
                patch: "#",
              },
            ],
          },
          {
            icon: "/assets/examples/card-weather.png",
            title: "Seguridad",
            patch: "#",
            children: [
              {
                icon: "/assets/examples/card-weather.png",
                title: "Sub menu",
                patch: "#",
              },
              {
                icon: "/assets/examples/card-weather.png",
                title: "Sub menu2",
                patch: "#",
              },
            ],
          },
        ],
      },
    ],
    merchants: [
      {
        section: "Movistar Mobile",
        items: [
          {
            name: "Industrias José Carlos Mariat...",
            path: "https://www.culqi.com",
            img: "/assets/examples/avatar.jpg",
          },
          {
            name: "dasdsadasd.",
            path: "https://www.culqi.com",
            img: "/assets/examples/avatar.jpg",
          }
        ],
      },
    ],
    support: [
      {
        img: '/assets/switch.png',
        alt: 'jaja',
        path: 'https://www.google.com',
        title: 'Documentación',
        paragraph: 'Texto de prueba asdf'
      },
      {
        img: "/assets/switch.png",
        path: '/',
        title: 'Preguntas frecuentes',
        paragraph: 'Texto de prueba asdf'
      },
      {
        img: '/assets/switch.png',
        path: '/',
        title: 'Documentación',
        paragraph: 'Texto de prueba asdf'
      }
    ],
    notification: [
      {
        img: '/assets/switch.png',
        alt: 'jaja',
        path: 'https://www.google.com',
        title: 'Documentación',
        paragraph: 'Texto de prueba asdf'
      },
    ]
  }),
  methods: {
    _handleClickCloseMerchant() {
      alert("Cerrando negocio");
    },
    _handleMyAccount() {
      alert("Mi cuenta");
    },
    _handeChangeMerchant (data) {
      console.log("change merchant:", data)
    },
    _handleLogout() {
      window.localStorage.clear();
      console.log("Logout");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
