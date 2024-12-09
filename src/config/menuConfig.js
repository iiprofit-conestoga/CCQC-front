// menuConfig.js
const menuConfig = [
    {
      name: "Dashboard",
      url: "/app/dashboard",
    },
    {
      name: "User",
      submenu: [
        {
          name: "User Profile",
          url: "/app/user-profile",
        },
        {
          name: "Role",
          url: "/app/user-role",
        },
        {
          name: "Permission",
          url: "/app/user-permission",
        },
      ],
    },
    {
        name: "Car",
        submenu: [
          {
            name: "Model",
            url: "/app/model",
          },
          {
            name: "Maker",
            url: "/app/maker",
          },
          {
            name: "Parts",
            url: "/app/parts",
          },
        ],
      },
    {
      name: "Customer",
      url: "/app/customer",
    },
    {
        name: "History",
        url: "/app/history",
      },
  ];
  
  export default menuConfig;