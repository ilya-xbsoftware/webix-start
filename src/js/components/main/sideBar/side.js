import { SIDE_MENU } from '@js/constants/sideMenu';

const sideBar = {
  css: 'sideBarColor',
  rows: [
    {
      view: 'list',
      type: 'clear',
      id: 'mylist',
      width: 200,
      autoheight: true,
      data: SIDE_MENU,
      css: 'list',
    },
    {},
    {
      view: 'button',
      label: 'Connected',
      type: 'icon',
      icon: 'wxi-check',
      align: 'center',
      autoheight: true,
      id: 'connect',
      css: 'greenbutton webix_transparent',
    },
  ],
};

export { sideBar };