import { DATA_USERS } from "@js/constants/data/users";

const sortControler = {
  view:"form",
  cols:[
    { view:"text", on:{ onTimedKeyPress:filterList }},
    { view: "button",  value:"Sort asc", name:"asc", css: "webix_primary", autowidth:true, click:sortList},
    { view: "button",  value:"Sort desc", name:"desc", css: "webix_primary", autowidth:true, click:sortList},
  ]
}

const list = {
  view:"list",
  id:"userList", 
  autoheight:true,
  css:"upperList",
  template:"#name# <span class='webix_icon wxi-close closeBtn upperListBtn'></span>",
  align:"center",
  select:"multiselect",
  on:{
    onAfterLoad: function () {
      const table = this; 

      table.on_click.closeBtn = (e, id) => {
        this.remove(id);
      }
    }
  },
  data:DATA_USERS,
}

const chart = {
  view:"chart",
  type: "bar",
  minHeight:300,
  value:"#age#",
  xAxis:{
    template:"#age#"
  },
  data:DATA_USERS,
}

const users = {
  rows:[
    sortControler,
    list,
    chart,    
  ],
};

function sortList() {
  const btn = this;
  const sortingDirection = btn.config.name;
  const btnParent = this.getParentView().getParentView();
  const list = btnParent.getChildViews()[1];

  list.sort("name", sortingDirection);
}

function filterList() {
  const value = this.getValue().toLowerCase();
  const listParent = this.getParentView().getParentView();
  const list = listParent.getChildViews()[1];

  list.filter(function(obj){
    return obj.name.toLowerCase().indexOf(value) !== -1;
  });
}

export { users };