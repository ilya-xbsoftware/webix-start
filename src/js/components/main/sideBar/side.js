import { SIDE_MENU } from "@js/constants/sideMenu";

const sideBar = {
  css: "sideBarColor",
  rows: [
    {
      view: "list",
      id: "listMenu",
      width: 200,
      autoheight: true,
      data: SIDE_MENU,
      css: "sideBar",
      select:true,
      on:{
        onAfterLoad: function() {
          this.select("Dashboard");
          this.attachEvent("onAfterSelect", (id) => $$(id).show());
         },
      }
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