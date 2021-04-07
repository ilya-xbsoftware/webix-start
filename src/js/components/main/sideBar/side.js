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
      template: '<span class="webix_icon wxi-check">Connected</span>',
      autoheight: true,
      id: 'connect',
      css: 'greenbutton',
    },
  ],
};

export { sideBar };