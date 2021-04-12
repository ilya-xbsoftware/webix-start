import { header } from "./components/header/header";
import { footer } from "./components/footer/footer";
import { main } from "./components/main/main";
import { sideBar } from "./components/main/sideBar/side";
import popup from "./components/header/popup/popup";

const webix = require("webix/webix.js");

const App = webix.ready(() => {
  webix.ui({
    view: "layout",
    rows: [
      header,
      {cols:[ sideBar, {view: "resizer"}, main ]},
      footer,
    ],
  });
  
});