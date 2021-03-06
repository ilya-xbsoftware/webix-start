import { DATA_PRODUCTS } from "@js/constants/data/products";

const webix = require("webix/webix.js");

const products = {
  view:"treetable",
  select:true,
  scrollX:false,
  editable:true,
  ready: function () {
    this.openAll();
  },
  columns:[
    { id:"id", header:"", fillspace:1},
    { id:"title", header:"Title", fillspace:3, template:"{common.treetable()} #title#", editor:"text" },
    { id:"price", header:"Prise", fillspace:3, editor:"text" }
  ],
  on: {
    onBeforeEditStop(values, editor){
      const title = editor.getValue();
      if(!title){
        webix.message({type:"error", text:"Title can't be empty"})
      }
      return false;
    },
    onValidationError: function() {
      webix.message({type:"error", text:"Please, correct data"});
      return false
    }
  },
  data:DATA_PRODUCTS,
  rules:{
    title: webix.rules.isNotEmpty,
    price: webix.rules.isNumber,
},
}

export { products };