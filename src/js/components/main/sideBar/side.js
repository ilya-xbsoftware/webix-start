import { SIDE_MENU } from "@js/constants/sideMenu";

const sideBar = {
  css: "sideBarColor",
  rows: [
    {
      view: "list",
      width: 200,
      autoheight: true,
      data: SIDE_MENU,
      css: "list",
    },
    {},
    {
      view: "label",
      label: "<span class='webix_icon wxi-check'></span> Connected",
      icon: "wxi-check",
      align: "center",
      css: "greenbutton",
    },
  ],
};

export { sideBar };