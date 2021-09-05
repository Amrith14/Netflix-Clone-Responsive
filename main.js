const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item 
function selectItem(e){
  removeBorder();
  removeShow();

  //Add border to current tab
  this.classList.add('tab-border');

  //Grab content item from DOM
  //console.log(this.id); - ans: when we click according it shows , tab-1,tab-2,tab-3
  // we simply put the - content with the template literals , thus like a hack, it grabs the
  //right one

  const tabContentItem = document.querySelector(`#${this.id}-content`);

   //Add show class
  tabContentItem.classList.add('show');

}

function removeBorder(){
  tabItems.forEach(item=> item.classList.remove('tab-border'));
}

function removeShow(){
  tabContentItems.forEach(item=>item.classList.remove('show'));
}



// Listen for tab click
tabItems.forEach(Item=> Item.addEventListener('click',selectItem));

