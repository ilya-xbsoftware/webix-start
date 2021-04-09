import { sideBar } from "./sideBar/side";
import { dataTable } from "./dataTable/dataTable";
import { form } from "./form/form";

const resizer = {
  view: "resizer",
};

const main = {
  cols: [
    sideBar,
    resizer,
    dataTable,
    form,
  ],
};

export { main };
