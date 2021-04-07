import { SIDE_MENU } from '@js/constants/sideMenu';

const sideBar = {
  css: 'sideBarColor',
  rows: [
    {
      view: 'list',
      id: 'mylist',
      width: 200,
      autoheight: true,
      scroll: false,
      data: SIDE_MENU,
    },
    {},
    {
      view: 'button',
      label: 'Connected',
      type: 'icon',
      icon: 'wxi-check',
      css: ' webix_transparent greenbutton',
      autowidth: true,
      align: 'center',
    },
  ],
};

export { sideBar };