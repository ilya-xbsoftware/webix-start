const form = {
  view: 'form',
  scroll: false,
  width: 250,
  autoHeight: true,
  elements: [
    { template: 'EDIT FILMS', type: 'section' },
    { view: 'text', name: 'title', label: 'Title' },
    { view: 'text', name: 'year', label: 'Year' },
    { view: 'text', name: 'rating', label: 'Date' },
    { view: 'text', name: 'rating', label: 'Votes' },
    {
      cols: [
        { view: 'button', value: 'Add new', inputWidth: 100 },
        {
          view: 'button', value: 'Clear', inputWidth: 100, align: 'right',
        },
      ],
    },
    {},
  ],
};

export { form };
