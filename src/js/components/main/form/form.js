const form = {
  view: 'form',
  scroll: false,
  width: 250,
  elements: [
    { template: 'EDIT FILMS', type: 'section' },
    { view: 'text', name: 'title', label: 'Title' },
    { view: 'text', name: 'year', label: 'Year' },
    { view: 'text', name: 'rating', label: 'Date' },
    { view: 'text', name: 'rating', label: 'Votes' },
    {
      cols: [
        { view: 'button', value: 'Add new', autowidth: true },
        {},
        { view: 'button', value: 'Clear', autowidth: true },
      ],
    },
  ],
};

export { form };
