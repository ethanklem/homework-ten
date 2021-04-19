import * as MODEL from "../model/model.js";
// import {getName as MODEL} from "../model/model.js";



function init() {


    //   let currentHeroImage = "home";

   $("nav a").click(function(e) {
       let btnID = this.id;
       let contentID = btnID + "Content";
    
      if (btnID == "home") {
        //   $("nav").removeClass("navabout").addClass(".homenav");
            $("nav").css("position", "absolute");
            $("nav").removeClass("navabout").removeClass("nav").addClass("homeNav")


      } else {
        $("nav").css("position", "relative");
          $("nav").addClass("navabout").removeClass("homeNav")
      }

      

     


       MODEL.getPageContent(contentID, addPromoListeners);
      console.log(btnID)

      

     
   });
}

function addPromoListeners() {


$(".promo-tours a").click(function(e) {
    let btnID = this.id;
    let contentID = btnID + "Content";

    MODEL.getPageContent(contentID);
    
    console.log(btnID)

    if (btnID == "israel", "usa", "australia") {
        $("nav").removeClass("homeNav").addClass("navabout")
      $("nav").css("position", "relative");
    }
});

$(".tour a").click(function(e) {
    let btnID = this.id;
    let contentID = btnID + "Content";

    MODEL.getPageContent(contentID);
    
    console.log(btnID)
});



}




$(document).ready(function() {
    init();
    MODEL.getPageContent("homeContent");
   
})

