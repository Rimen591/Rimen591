
var nom = $('#Name').val();
var mdp = $('#pwd').val();
var confMdp = $('#ConfirmerMdp').val();
var allGood = [0,0];
var email = $('#Email').val();


$('#Name').keyup(function () {
    nom = $('#Name').val();

    if (nom === "Zomen" || nom === "Rimen59"){
        $('#nameMatch').css("color","lightcoral").text("Ce nom d'utillisateur est déjà pris");
    }else if (nom === ""){
        $('#nameMatch').css("color","lightcoral").text("");
    }else {
        $('#nameMatch').css("color","lightgreen").text("Nom d'utillisateur disponibe");
    }
});

$('#pwd').keyup(function () {
    mdp = $('#pwd').val();
    if (mdp.length > 9 && hasUpperCase(mdp) && hasSPChar(mdp)){
        $('#pwdStrength').css("color","lightgreen").text("Fort");
    }else if (mdp.length < 6 && mdp.length > 0){
        $('#pwdStrength').css("color","lightcoral").text("Faible");
    }else if (mdp.length >= 6){
        $('#pwdStrength').css("color","lightsalmon").text("Intermediaire");
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
        $('#pwdMatch').text("Les mots de passe ne sont pas identiques");
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



function hasUpperCase(str) {
    return (/[A-Z]/.test(str));
}

function hasSPChar(str) {
    return (/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str));
}

function isEmail(str) {
    return (/[@]/.test(str) && /[.]/.test(str));
}