const form = {
  view: 'form',
  width: 300,
  elements: [
    { template: 'edit films', type: 'section' },
    { view: 'text', label: 'Title' },
    { view: 'text', label: 'Year', type:'number' },
    { view: 'text', label: 'Date', type:'number' },
    { view: 'text', label: 'Votes', type:'number' },
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
