import { DATA_DASHBOARD } from "@js/constants/data/dataPath";
import addingZeros from "@js/utils/addingZeros";

const dataTable = {
  view: "datatable",
  id: "filmsTable",
  columns:[
    { id:"id", header:"", width:45, adjust: "data", css:{"background":"#f4f5f9"}},
    { id:"title", header:["Film title", {content: "textFilter"}], adjust: "data", sort:"text"},
    { id:"year", header:["Released", {content: "selectFilter"}] , fillspace:1, sort:"int"},
    { id:"votes", header:["Votes", {content: "numberFilter"}], fillspace:1, sort:sortVotesByParam},
    { id:"rating", header:["Rating", {content: "selectFilter"}], fillspace:1, sort:"string"},
    { template: "<span class='webix_icon wxi-trash delBtn'></span>", css:"deleteBtn"}
  ],
  url: DATA_DASHBOARD,
  scrollX: false,
  hover:"tableHover",
  on:{
    onAfterLoad: function () {
      const table = this; 

      this.on_click.delBtn = (e, id) => {
        this.remove(id);
      }
    }
  }
};

function sortVotesByParam(a,b){
  const regex = /(\,|\.)/g;
  const firstItem = a.votes;
  const secondItem = b.votes;

  a = +addingZeros(firstItem).replace(regex, '');
  b = +addingZeros(secondItem).replace(regex, '');

  return a>b?1:(a<b?-1:0);
};

export { dataTable };
