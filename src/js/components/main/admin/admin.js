import { categoriesCL } from "@js/collections/collections";

const webix = require("webix/webix.js");

const addCategory = {
  view:"form",
  id:"categoryController",
  cols:[
    { view:"text", id:"controllerId"},
    { view: "button",  value:"Add category", css: "webix_primary", autowidth:true, click:newCategory},
  ],
}

const categoryList = {
  view: "datatable",
  id:"categorieasTable",
  editable:true,
  select:"row",
  columns:[
    { id:"id", header:"#", adjust: "data", css:{"background":"#f4f5f9"}},
    { id:"value", editor:"text", header:"Category", fillspace:1, sort:"string"},
    { template:"<span class='webix_icon wxi-close deleteCategory upperListBtn'></span>",}
  ],
  data:categoriesCL,
  rules:{
    value:webix.rules.isNotEmpty,
  },
  on:{
    onBeforeEditStop(values, editor){
      const title = editor.getValue();
      if(!title){
        webix.message({type:"error", text:"Title can't be empty"})
        return false;
      }
    },
  },
  ready:function(){
    this.validate();
  },
  onClick:{
    "deleteCategory": function (e, id) {
      webix.confirm("Delete category?", "confirm-warning")
      .then(() => { 
        categoriesCL.remove(id);
        return false;
      });
    } 
  }  
}

const admin = {
  rows:[
    addCategory,
    categoryList,
  ]
}

function newCategory() {
  const list = $$("categorieasTable");
  const name = $$("controllerId").getValue();
  const listLength = Object.keys(list.data.pull).length;
  const newCategory = {id:listLength+1, value:name}

  if(!name){
    webix.message({type:"error", text:"Title can't be empty"})
        return false;
  }

  categoriesCL.add(newCategory);
}

export { admin };