import { CATEGORIES } from "@js/constants/data/categories";
import { DATA_USERS } from "@js/constants/data/users";
const webix = require("webix/webix.js");

const categoriesCL = new webix.DataCollection({
  data:CATEGORIES
});

const usersCL = new webix.DataCollection({
  data:DATA_USERS
})


export {
  categoriesCL,
  usersCL
}