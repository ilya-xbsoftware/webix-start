const form = {
  view: 'form',
  width: 300,
  elements: [
    { template: 'EDIT FILMS', type: 'section' },
    { view: 'text', name: 'title', label: 'Title' },
    { view: 'text', name: 'year', label: 'Year', type:'number' },
    { view: 'text', name: 'rating', label: 'Date', type:'date' },
    { view: 'text', name: 'rating', label: 'Votes', type:'number' },
    { margin: 10,
      cols: [
        { view: 'button', value: 'Add new', css: 'webix_primary' },
        {
          view: 'button', value: 'Clear',
        },
      ],
    },
    {},
  ],
};

export { form };
