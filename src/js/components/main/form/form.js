const form = {
  view: 'form',
  width: 300,
  id: "editFilmsForm",
  elements: [
    { template: 'edit films', type: 'section' },
    { view: 'text', label: 'Title', name: "title" },
    { view: 'text', label: 'Year', type:'number', name: "year" },
    { view: 'text', label: 'Date', type:'number', name: "date" },
    { view: 'text', label: 'Votes', type:'number', name: "votes" },
    { view: 'text', label: 'Rating', type:'number', name: "rating" },
    { margin: 10,
      cols: [
        { view: 'button', value: 'Add new', css: 'webix_primary', },
        {view: 'button', value: 'Clear', click: clearForm, }
      ],
    },
    {},
  ],
};


function clearForm(){
  console.log(this);
  $$("editFilmsForm").clear();
}



export { form };
