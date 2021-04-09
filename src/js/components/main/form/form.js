import { CONFIRM_TEXT } from "@js/constants/webixConfirm";
import { VALID_RULES } from "@js/constants/validRules";

const webix = require("webix/webix.js");

const form = {
  view: "form",
  width: 300,
  id: "editFilmsForm",
  elements: [
    { template: "edit films", type: "section" },
    { view: "text", label: "Title", name: "title", invalidMessage: VALID_RULES.title},
    { view: "text", label: "Year", type:"number", name: "year", invalidMessage: VALID_RULES.year},
    { view: "text", label: "Votes", type:"number", name: "votes", invalidMessage: VALID_RULES.votes},
    { view: "text", label: "Rating", type:"number", name: "rating", invalidMessage: VALID_RULES.rating},
    { margin: 10,
      cols: [
        { view: "button", value: "Add new", css: "webix_primary",  click: addNewFilm},
        { view: "button", value: "Clear", click: clearForm}
      ],
    },
    {},
  ],
  rules:{
    title: webix.rules.isNotEmpty,
    year: (value) => value > 1970,
    votes: (value) => value < 100000 && value > 0,
    rating: (value) => value != 0,
  },
  elementsConfig:{
    bottomPadding:15
  }
};

function clearForm(){
  const form = $$("editFilmsForm");
  webix.confirm({
    text: CONFIRM_TEXT,
  }).then(() => {
      form.clear();
      form.clearValidation();
    }
  )
}

function addNewFilm() {
  const form = $$("editFilmsForm");
  const table = $$("filmsTable");
  const newFilmsInfo = form.getValues();
  const validationFlag = validateForm(form);
  
  if (validationFlag) table.add(newFilmsInfo);
}

function validateForm(form) {
  const validationFlag = form.validate();
  
  if (validationFlag){
    webix.message({text:"Film added", css:"validTrueText"});
  } else{
    webix.message({ type:"error", text:"Form data are invalid"});
  }

  return validationFlag
}

export { form };



