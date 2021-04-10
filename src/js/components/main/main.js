import { $$ } from "webix/webix";
import { dataTable } from "./dataTable/dataTable";
import { form } from "./form/form";

const dashboard = {
  id: "Dashboard",
  cols: [
    dataTable,
    form,
  ],
}

const users  = {
  id: "Users",
  template: "Users",
}

const products   = {
  id: "Products",
  template: "Products",
}

const admin   = {
  id: "Admin",
  template: "Admin",
}

const main = {
  cells:[
    dashboard,
    users,
    products,
    admin,
  ]
};

export { main };
