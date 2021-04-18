import * as MODEL from "../model/model.js";
// import {getName as MODEL} from "../model/model.js";



function init() {


    //   let currentHeroImage = "home";

   $("nav a").click(function(e) {
       let btnID = this.id;
       let contentID = btnID + "Content";
    
      if (btnID == "home") {
          $(".nav").removeClass("navabout").addClass("nav")
      }


       MODEL.getPageContent(contentID, addPromoListeners);
      console.log('clicked')

      

     
   });
}

function addPromoListeners() {
console.log("page is loaded")

$(".promo-tours a").click(function(e) {
    let btnID = this.id;
    let contentID = btnID + "Content";

    MODEL.getPageContent(contentID);
    
    console.log('clicked promo')
});

$(".tour a").click(function(e) {
    let btnID = this.id;
    let contentID = btnID + "Content";

    MODEL.getPageContent(contentID);
    
    console.log('clicked promo')
});

}




$(document).ready(function() {
    init();
    MODEL.getPageContent("homeContent");
   
})

