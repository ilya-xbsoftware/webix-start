import { DATA_DASHBOARD } from "@js/constants/data/dataPath";
import addingZeros from "@js/utils/addingZeros";
import randomNumber from "@js/utils/randomNumber";
import { categoriesCL } from "@js/collections/collections";

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
        { id:"category", header:["Category", {content: "selectFilter"}], collection:categoriesCL, fillspace:1, sort:"string"},
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
          .then(() => {
            this.remove(id);
            return false;
          });

        }
      },
      on: {
        onAfterSelect:function(){
          $$("editFilmsForm").bind($$("filmsTable"))
        }
      },
      ready: function () {
        $$("filmsTable").registerFilter(
          $$("tabbar"),
          {columnId:"year", compare:function(value, filter, item) {
              if (filter == 1) return +value;
              if (filter == 2) return +value < 2000;
              if (filter == 3) return +value >= 2000;
              if (filter == 4) return +value == 2011; 
          }},
          {
              getValue:function(node){
                  return node.getValue();
                },
              setValue:function(node, value){
                  node.setValue(value);
              }
          }
        )
      }
};


export { dataTable };
