import { header } from '../components/header/header';
import { footer } from '../components/footer/footer';
const webix = require('webix/webix.js');


const App = webix.ui({
  view:'layout',
  rows: [
    header,
    { type:'main', template: 'View 2' },
    footer
  ],
});


export {App};