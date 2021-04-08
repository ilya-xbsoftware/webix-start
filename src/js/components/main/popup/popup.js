import  { POPUP_DATA } from '@js/constants/popupData';

const webix = require('webix/webix.js');

const popup = webix.ui({
  view:"popup",
  id:"first_pop",
  body:{
      view:"list", 
      data: POPUP_DATA,
      autoheight:true,
      select:true, 	
  }
}).hide();

export { popup };