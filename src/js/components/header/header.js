import popup from '../main/popup/popup';

const header = {
  view: 'toolbar',
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
      popup: "first_pop",
    },
  ],
};

export { header };
