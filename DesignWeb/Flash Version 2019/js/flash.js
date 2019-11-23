//On positionne Flash en relative pour accéder aux déplacements X et Y
//Par défaut un élément est statique
$('#flashID').css("position","relative");
$('#eclair').css("position","relative");
$('#eclair').hide();

$('#boutonGauche').click(function(){
    console.log("bouton gauche pressé");
    $('#flashID').css({left: '-=15px'});
});

$('#boutonDroite').click(function(){
    console.log("bouton droite pressé");
    $('#flashID').css({left: '+=15px'});
});

$('#boutonChangerImage').click(function(){
    if($('#flashID').attr("src")==="img/Flash1.png"){
            console.log("bouton changer img pressé");
            $('#flashID').attr("src","img/Flash2.png");

    }else if($('#flashID').attr("src")==="img/Flash2.png"){
            console.log("bouton changer img pressé");
            $('#flashID').attr("src","img/Flash1.png");

    }
});

$('#boutonEnleverImage').click(function(){
    console.log("bouton enlever image pressé");
    $('#flashID').hide("slow");
});

$('#boutonAjouterImage').click(function(){
    console.log("bouton ajouter image pressé");
    $('#flashID').show("slow");
});

$('#boutonAjouterAttribut').click(function(){
    console.log("bouton ajouter attribut pressé");
    $('#flashID').attr("alt","photo de flash");
});

var k=0;

$('#boutonAjouterTitre').click(function(){
    if(k===0){
        console.log("bouton ajouter titre pressé");
        $( "#flashID" ).before( "<h1>Justice League</h1>" );
        k++;
        $( "h1" ).attr( "class","text-white" );
    }
});

var nombreFlash=0;
var flashleft=$('#flashID').css('left');
$('#boutonDupliquer').click(function(){
    console.log("bouton dupliquer pressé");
    $('#flashID').after("<img id='flashID" + nombreFlash + "' class=\"flashClass\" src=\"img/Flash1.png\" width=\"200px\"/>");
    $('#flashID' + nombreFlash).css({left: flashleft});
    nombreFlash++;
});

$('#boutonRalentir').click(function(){
    nombreFlash--;
    console.log("bouton ralentir pressé");
    $('#flashID' + nombreFlash).remove();

});

var TP=0;

$('#boutonTeleport').click(function(){
    if(TP===0){
        console.log("bouton changer img pressé");
        $("#flashID").insertAfter("#boutonTeleport");
        TP++;
    }else if(TP===1){
        console.log("bouton changer img pressé");
        $("#flashID").insertAfter("h1");
        TP--;
    }
});

var myvar;

$('#boutonVitesseSupreme').click(function(){
    console.log("bouton vitesse supreme pressé");
    myvar = setInterval(timer, 50);
});

$('#boutonFinVitesseSupreme').click(function(){
    console.log("bouton vitesse normale pressé");
    clearInterval(myvar);
    $('#flashID').show();
});

function timer(){
    $("#flashID").toggle();
}


$('#boutonPerso1').click(function(){
    console.log("bouton gauche pressé");
    $('#flashID').css("z-index","999");
    $("#flashID").animate({left: '1250px'});
    $("#flashID").animate({top: '450px'});
    $("#flashID").animate({left: '0px'});
    $("#flashID").animate({width: '500px', top: '100px'});
    $('#eclair').delay(2000).show("fast");
    $('#eclair').animate({left: '1000px', width: '1000px', position: 'absolute'});

});

var snd = new Audio("sound/Lightning Storm Sound Effect.wav");


$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
            $("#flashID").css({left: '-=50px'});
            $("#eclair").css({left: '-=50px'});
            break;

        case 38: // up
            $("#flashID").css({top: '-=50px'});
            $("#eclair").css({top: '-=50px'});
            break;

        case 39: // right
            $("#flashID").css({left: '+=50px'});
            $("#eclair").css({left: '+=50px'});
            break;

        case 40: // down
            $("#flashID").css({top: '+=50px'});
            $("#eclair").css({top: '+=50px'});
            break;

        case 32: // spacebar
            snd.play();
            $('#eclair').show("fast");
            $('#eclair').hide("fast");

            break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});