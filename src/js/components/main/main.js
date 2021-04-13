import { dataTable } from "./dashboard/dataTable/dataTable";
import { form } from "./dashboard/form/form";
import { users } from "./users/users";
import { products } from "./products/products";
import { tabBar } from "./dashboard/tabBar/tabBar";

const dashboardSection = {
  id: "Dashboard",
  cols: [
    {
      rows:[
        tabBar,
        dataTable
      ]
    },
    form,
  ],
}

const usersSection  = {
  id: "Users",
  rows:[
    users,
  ]
}

const productsSection   = {
  id: "Products",
  rows:[
    products,
  ]
}

const adminSection   = {
  id: "Admin",
  template: "Admin",
}

const main = {
  cells:[
    dashboardSection,
    usersSection,
    productsSection,
    adminSection,
  ]
};


export { main };
