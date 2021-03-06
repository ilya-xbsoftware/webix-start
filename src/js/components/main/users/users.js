import { usersCL } from "@js/collections/collections";
import randomNumber from "@js/utils/randomNumber";

const webix = require("webix/webix.js");

webix.protoUI({
  name:"editlist"
}, webix.EditAbility, webix.ui.list);

const sortControler = {
  view:"form",
  id:"newUser",
  cols:[
    { view:"text", id:"inputValue", on:{ onTimedKeyPress:filterList }},
    { view: "button",  value:"Sort asc", name:"asc", css: "webix_primary", autowidth:true, click:() => sortList("asc")},
    { view: "button",  value:"Sort desc", name:"desc", css: "webix_primary", autowidth:true, click:() => sortList("desc")},
    { view: "button",  value:"Add new", css: "webix_primary", autowidth:true, click: createRandomPerson},
  ],
}

const list = {
  view:"editlist",
  id:"userList", 
  minHeight: 280,
  css:"upperList",
  template:"#name#, #age#, #country# <span class='webix_icon wxi-close closeBtn upperListBtn'></span>",
  select:"multiselect",
  editable:true,
  editor:"text",
  editValue:"name",
  ready: function () {
    $$("userChart").sync(usersCL, function () {
      this.group({
        by: "country",
        map: {
          name:["country", "count"]
        }
      })
    })
  },

  onClick:{
    "closeBtn": function (e, id) {
      webix.confirm("Delete selected row?", "confirm-warning")
      .then(() => { 
        usersCL.remove(id);
      });
      return false;
    }
  },
  on:{
    onBeforeEditStop:validate,
  },
  rules:{
    name: webix.rules.isNotEmpty,
  },
  data:usersCL,
}

const chart = {
  view:"chart",
  id:"userChart",
  type: "bar",
  value:"#name#",
  xAxis:{
    template:"#country#",
    title:"Country",
  },
  yAxis:{
    start:0,
  },
}

const users = {
  rows:[
    sortControler,
    list,
    chart,    
  ],
};

function sortList(type) {
  const list = $$("userList");

  list.sort("name", type);
}

function filterList() {
  const value = $$("inputValue").getValue().toLowerCase();
  const list = $$("userList");

  list.filter(function(obj){
    return obj.name.toLowerCase().indexOf(value) !== -1;
  });
}

function validate(item, obj) {
  const name = item.value;
  
  if(!name){
    webix.message({type: "error", text:" The name must not be empty"});
    return false;
  }
}

function createRandomPerson() {
  const list = $$("userList");
  const listLength = Object.keys(list.data.pull).length;
  const name = $$("inputValue").getValue();
  const randomId = listLength + 1;
  const randomName = list.getItem(randomNumber(1, listLength - 1)).name;
  const randomCountry = list.getItem(randomNumber(1, listLength - 1)).country;
  const randomAge = randomNumber(18, 70);

  if(name){
    createNewPerson(randomId, name, randomCountry, randomAge);
    filterList();
  }else{
    createNewPerson(randomId, randomName, randomCountry, randomAge);
  }
}

function createNewPerson(id, name, country, age) {
  const inputValue = $$("inputValue");
  const person = {id, name, age, country};

  usersCL.add(person);
  inputValue.setValue("");
  webix.message({type:"success", text:"New usser added"});
}

export { users };