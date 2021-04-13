import { DATA_DASHBOARD } from "@js/constants/data/dataPath";
import { CATEGORIES } from "@js/constants/data/categories";
import addingZeros from "@js/utils/addingZeros";
import randomNumber from "@js/utils/randomNumber";
import { $$ } from "webix/webix";

const webix = require("webix/webix.js");

const dataTable = {
  view: "datatable",
  id: "filmsTable",
  select:"row",
  scheme:{
    $init: function(data){
     data.votes = addingZeros(data.votes);
     data.category = randomNumber(1, 4);
    }
  },
  columns:[
    { id:"id", header:"#", width:45, adjust: "data", css:{"background":"#f4f5f9"}},
    { id:"title", header:["Film title", {content: "textFilter"}], adjust: "data", sort:"text"},
    { id:"category", header:["Category", {content: "selectFilter"}], collection:CATEGORIES, fillspace:1, sort:"string"},
    { id:"rating", header:["Rating", {content: "selectFilter"}], fillspace:1, sort:"string"},
    { id:"votes", header:["Votes", {content: "numberFilter"}], fillspace:1, sort:"int"},
    { id:"year", header:"Year", fillspace:1, sort:"int"},
    { template: "<span class='webix_icon wxi-trash deleteBtn'></span>", css:"deleteBtn"}
  ],
  url: DATA_DASHBOARD,
  scrollX: false,
  hover:"tableHover",
  onClick:{
    "deleteBtn": function (e, id) {
      webix.confirm("Delete selected row?", "confirm-warning")
      .then(() => {this.remove(id)});

      return false;
    }
  },
  on: {
    onAfterSelect:function(){
      $$("editFilmsForm").bind($$("filmsTable"))
    }
  }
};

export { dataTable };
