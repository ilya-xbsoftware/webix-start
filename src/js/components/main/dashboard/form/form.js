import { CONFIRM_TEXT } from "@js/constants/webixConfirm";
import { VALID_RULES } from "@js/constants/validRules";

const webix = require("webix/webix.js");

const form = {
  view: "form",
  width: 280,
  id: "editFilmsForm",
  elements: [
    { template: "edit films", type: "section" },
    { view: "text", label: "Title", name: "title", invalidMessage: VALID_RULES.title},
    { view: "text", label: "Rating", name: "rating", invalidMessage: VALID_RULES.rating},
    { view: "text", label: "Votes", name: "votes", invalidMessage: VALID_RULES.votes},
    { view: "text", label: "Year", name: "year", invalidMessage: VALID_RULES.year},
    { margin: 10,
      cols: [
        { view: "button", value: "Save", click: saveItem},
        { view: "button", value: "Clear", click: clearForm}
      ],
    },
    {},
  ],
  rules:{
    title: webix.rules.isNotEmpty,
    year: (value) => value > 1900,
    votes: (value) => value < 100000 && value > 0,
    rating: (value) => value != 0,
  },
  elementsConfig:{
    bottomPadding:15
  }
};

function saveItem(){
  const form = $$("editFilmsForm");
  const table = $$("filmsTable");
  const itemData = form.getValues();
  const validateFlag = validateForm(form);

  if(validateFlag){
    if (itemData.id){
      form.save();
    } else {
      table.add(itemData);
    }
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

function validateForm(form) {
  const validationFlag = form.validate();
  
  if (validationFlag){
    webix.message({ type:"success", text:"Film added"});
  } else{
    webix.message({ type:"error", text:"Form data are invalid"});
  }

  return validationFlag;
}

export { form };



