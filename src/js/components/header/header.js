const header = {
  view: 'toolbar',
  id: 'header',
  css: 'webix_dark',
  elements: [
    { view: 'label', label: 'My App' },
    {},
    {
      view: 'button',
      label: 'profile',
      type: 'icon',
      icon: 'wxi-user',
      css: 'webix_transparent',
      autowidth: true,
    },
  ],
};

export { header };