/*
Når siden er loadet: sidenVises
*/
$(window).on("load", sidenVises);

/*
elementer:
surfer_container
surfer_sprite
skildpadde_container
skildpadde_sprite

anim:
position_in_surfer
position_in_skildpadde
surfer_stand
surfer_move_in
surfer_swim_in
swim
looking
falling
fallen
surfer_move_right


lyd:
surfer_musik
hav_lyd
skrig_bobler

*/

$("#sidenVises").on("click", sidenVises);
$("#stopperOp").on("click", stopperOp);
$("#surferVidere").on("click", surferVidere);
$("#falderIVandet").on("click", falderIVandet);
$("#druknetSurfer").on("click", druknetSurfer);


function sidenVises() {
    console.log("sidenVises");


    $("#surfer_container").toggleClass("surfer_move_in");


    $("#surfer_sprite").addClass("surfer_stand");


    $("#skildpadde_container").toggleClass("swim_in_skildpadde");


    $("#skildpadde_sprite").addClass("swim");


    $("#hav_lyd")[0].play();
    $("#hav_lyd")[0].volume = 0.1;


    $("#surfermusic1_lyd")[0].play();
    $("#surfermusic1_lyd")[0].volume = 0.1;
}



function stopperOp() {
    console.log("stopperOp");


    $("#surfer_container").addClass("position_in_surfer");


    $("#skildpadde_container").addClass("position_in_skildpadde");


    $("#surfer_sprite").addClass("looking");


    $("#surfermucsic1_lyd").off("ended");

    $("#skrald_lyd")[0].play();

}


function surferVidere() {
    console.log("surferVidere");


    $("#surfer_container").addClass("surfer_move_right");


    $("#surfermucsic2_lyd")[0].play();
    $("#surfermucsic2_lyd")[0].volume = 0.1;
}




function falderIVandet() {
    console.log("falderIVandet");


    $("#surfer_sprite").addClass("falling");


    $("#surfermucsic2_lyd").off("ended");


    $("#splash_lyd")[0].play();
    $("#splash_lyd")[0].volume = 0.1;



    $("#ohh_lyd")[0].play();
}

function druknetSurfer() {
    console.log("druknetSurfer");


    $("#surfer_sprite").addClass("fallen");


    $("#slash_lyd").off("ended");

    $("#ohh_lyd").off("ended");

    $("#hav_lyd").off("ended");

}
