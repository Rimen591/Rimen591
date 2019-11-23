$('#hiddenelem1').hide();   var elem1 = 0;
$('#hiddenelem2').hide();   var elem2 = 0;
$('#hiddenelem3').hide();   var elem3 = 0;

var nom = $('#Name').val();
var mdp = $('#pwd').val();
var confMdp = $('#ConfirmerMdp').val();
var allGood = [0,0];
var email = $('#Email').val();

$('#Radios1').click(function(){
    if (elem1 === 0){
        $('#hiddenelem1').show("slow");
        $('#hiddenelem2').hide("slow");  elem2 = 0;
        $('#hiddenelem3').hide("slow");  elem3 = 0;
        elem1++;
    }
});
$('#Radios2').click(function(){
    if (elem2 === 0){
        $('#hiddenelem2').show("slow");
        $('#hiddenelem1').hide("slow");  elem1 = 0;
        $('#hiddenelem3').hide("slow");  elem3 = 0;
        elem2++;
    }
});
$('#Radios3').click(function(){
    if (elem3 === 0){
        $('#hiddenelem3').show("slow");
        $('#hiddenelem2').hide("slow");  elem2 = 0;
        $('#hiddenelem1').hide("slow");  elem1 = 0;
        elem3++;
    }
});



$('#Name').keyup(function () {
    nom = $('#Name').val();

    if (nom === "SLAY" || nom === "Test"){
        $('#nameMatch').css("color","red").text("This username is already taken");
    }else if (nom === ""){
        $('#nameMatch').css("color","red").text("");
    }else {
        $('#nameMatch').css("color","green").text("Username available");
    }
});

$('#pwd').keyup(function () {
    mdp = $('#pwd').val();
    if (mdp.length > 9 && hasUpperCase(mdp) && hasSPChar(mdp)){
        $('#pwdStrength').css("color","green").text("Strong");
    }else if (mdp.length < 6 && mdp.length > 0){
        $('#pwdStrength').css("color","red").text("Weak");
    }else if (mdp.length >= 6){
        $('#pwdStrength').css("color","orange").text("Intermediate");
    }else  if (mdp === ""){
        $('#pwdStrength').text("");
    }
});

$('#ConfirmerMdp').keyup(function () {
    mdp = $('#pwd').val();
    confMdp = $('#ConfirmerMdp').val();

    if (mdp === confMdp){
        $('#pwdMatch').text("");
        allGood[0]=1;
    }else {
        $('#pwdMatch').text("Passwords do not match");
        allGood[0]=0;
    }
    if (allGood[0] === 1 && allGood[1] === 1){
        $('#submit').removeAttr("disabled");
    }else {
        $('#submit').attr("disabled","");
    }
});

$('#Email').keyup(function () {
    email = $('#Email').val();

    if (isEmail(email)){
        allGood[1]=1;
    }else {
        allGood[1]=0;
    }
    if (allGood[0] === 1 && allGood[1] === 1){
        $('#submit').removeAttr("disabled");
    }else {
        $('#submit').attr("disabled","");
    }
});

setInterval(Selects, 100);

function Selects() {
    if ($("#exampleFormControlSelect1").val() === 1){
        $("#hiddenelem1 img").attr("src","https://www.starwars-universe.com/images/encyclopedie/personnages/images_v6/yoda_imv6.jpg");
    }else if ($("#exampleFormControlSelect1").val() === 2){
        $("#hiddenelem1 img").attr("src","https://www.sideshow.com/storage/product-images/903476/obi-wan-kenobi_star-wars_silo.png");
    }
}



function hasUpperCase(str) {
     return (/[A-Z]/.test(str));
}

function hasSPChar(str) {
    return (/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str));
}

function isEmail(str) {
    return (/[@]/.test(str) && /[.]/.test(str));
}