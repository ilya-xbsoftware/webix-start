const tabBar = {
  view:"tabbar", 
  autoheight:true,
    options:[
      { id:"all", value:"All",},
      { id:"old", value:"Old" },
      { id:"modern", value:"Modern" },
      { id:"three", value:"Three"},
    ],
    on: {
      onAfterTabClick(){
        $$("filmsTable").filterbyAll();
      }
    }
}

export { tabBar };
