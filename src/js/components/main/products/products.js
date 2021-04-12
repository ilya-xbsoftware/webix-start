import { DATA_PRODUCTS } from "@js/constants/data/products";

const products = {
  view:"treetable",
  select:true,
  scrollX:false,
  ready: function () {
    this.openAll();
  },
  columns:[
    { id:"id", header:"", fillspace:1},
    { id:"title", header:"Title", fillspace:3, open:true, template:"{common.treetable()} #title#"},
    { id:"price", header:"Prise", open:true, fillspace:3, }
  ],
  data:DATA_PRODUCTS,
}

export { products };