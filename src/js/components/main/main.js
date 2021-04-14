import { dataTable } from "./dashboard/dataTable/dataTable";
import { form } from "./dashboard/form/form";
import { users } from "./users/users";
import { products } from "./products/products";
import { tabBar } from "./dashboard/tabBar/tabBar";
import { admin } from "./admin/admin";

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
  rows:[
    admin,
  ]
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
