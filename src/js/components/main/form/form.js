import { validate } from "@babel/types";
const webix = require('webix/webix.js');

const form = {
  view: 'form',
  width: 300,
  id: "editFilmsForm",
  elements: [
    { template: 'edit films', type: 'section' },
    { view: 'text', label: 'Title', name: "title" },
    { view: 'text', label: 'Year', type:'number', name: "year" },
    { view: 'text', label: 'Votes', type:'number', name: "votes" },
    { view: 'text', label: 'Rating', type:'number', name: "rating" },
    { margin: 10,
      cols: [
        { view: 'button', value: 'Add new', css: 'webix_primary',  click: addNewFilm},
        { view: 'button', value: 'Clear', click: clearForm}
      ],
    },
    {},
  ],
  rules:{
    title: webix.rules.isNotEmpty,
    year: function(value){return value > 1970},
    votes: function(value){return value < 100000},
    rating: function(value){return value != 0}
  }
};

function clearForm(){
  $$("editFilmsForm").clear();
}

function addNewFilm() {
  const form = $$("editFilmsForm");
  const table = $$('filmsTable');
  const newFilmsInfo = form.getValues();
 
  if ( validateForm(form) ){
    table.add(newFilmsInfo);
  }else{
    console.log('false');
  }
}

function validateForm(form) {
  if (form.validate()){
    webix.message({text:"Film added", css:'validTrueText'});
    return true;
  } else{
    webix.message({ type:"error", text:"Form data are invalid" });
    return false;
  }
}


export { form };



