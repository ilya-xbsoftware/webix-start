import { DATA_DASHBOARD } from "@js/constants/data/dataPath";
import addingZeros from "@js/utils/addingZeros";
import { $$ } from "webix/webix";

const webix = require("webix/webix.js");

const dataTable = {
  view: "datatable",
  id: "filmsTable",
  select:"row",
  columns:[
    { id:"id", header:"", width:45, adjust: "data", css:{"background":"#f4f5f9"}},
    { id:"title", header:["Film title", {content: "textFilter"}], adjust: "data", sort:"text"},
    { id:"year", header:["Released", {content: "selectFilter"}] , fillspace:1, sort:"int"},
    { id:"votes", header:["Votes", {content: "numberFilter"}], fillspace:1, sort:"int"},
    { id:"rating", header:["Rating", {content: "selectFilter"}], fillspace:1, sort:"string"},
    { template: "<span class='webix_icon wxi-trash deleteBtn'></span>", css:"deleteBtn"}
  ],
  scheme:{
    $init: function(data){
     data.votes = addingZeros(data.votes);
    }
  },
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
    onAfterSelect:function(id){
      const item = this.getItem(id);
      $$("editFilmsForm").setValues(item);
    }
  }
};

export { dataTable };
