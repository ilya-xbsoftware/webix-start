import { DATA_DASHBOARD } from "@js/constants/data/dataPath";
import { categoriesCL } from "@js/collections/collections";

const admin = {
  view: "datatable",
  id:"richselectData",
  select:"row",
  columns:[
    { id:"id", header:"#", adjust: "data", css:{"background":"#f4f5f9"}},
    { id:"title", header:["Film title", {content: "textFilter"}], adjust: "data", sort:"text"},
    { id:"id", header:["Category", {content: "selectFilter"}], collection:categoriesCL, fillspace:1, sort:"string"},
  ],
  url:DATA_DASHBOARD,
}

export { admin };