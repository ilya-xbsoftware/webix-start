const tabBar = {
  view:"tabbar", 
  id:"tabbar",
  autoheight:true,
  options:[
    { id:1, value:"All",},
    { id:2, value:"Old" },
    { id:3, value:"Modern" },
    { id:4, value:"New"},
  ],
  on: {
    onChange:function(){
      $$("filmsTable").filterByAll();
    }
  },
}

export { tabBar };
