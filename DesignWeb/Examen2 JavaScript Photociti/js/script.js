var word = ""; var col = 4; var i = 0; var done = 0;

    $('#Word').keyup(function () {
    word = $('#Word').val();
    word = word.replace("*","0");
    $('h1').text(word);
});

document.onkeypress = keyPress;

function keyPress(e){
    var x = e || window.event;
    var key = (x.keyCode || x.which);
    if(key === 13){
        e.preventDefault();  wordLength();

    }
}
$('#btn').click(wordLength);


function wordLength(){
    if (done !== 1){
        if (word.length === 3){
            col = 4;
        }else  if (word.length === 4){
            col = 3;
        }else if (word.length === 5 || word.length === 6){
            col = 2;
        }else if (word.length > 6 && word.length <= 12){
            col = 1;
        }else if (word.length < 3 || word.length > 12){
            col = 0;
        }
        if (col > 0){
            for(i=0; i<word.length; i++){
                $('#imgs').append("<img value='" + word[i].toUpperCase() + "'  src=\"img/Letters/" + word[i].toUpperCase() + "/" + word[i].toUpperCase() + "1.jpg\" class=\"img-fluid col-" + col + "\" id=\"img" + i + "\">\n");
            }   done++;
        }else {
            alert("Mot invalide");
        }

    }
}

let bgVal = 0;

$('#Type').click(function () {
    bgVal = $('#Type').val();
    switch (bgVal) {
        case "red":
            $('#imgs ').css("background-image", 'url("img/background/rouge.jpg")');
            break;
        case "blue":
            $('#imgs ').css("background-image", 'url("img/background/bleu.jpg")');
            break;
        case "white":
            $('#imgs ').css("background-image", 'url("img/background/blanc.jpg")');
            break;
        case "darkBlue":
            $('#imgs ').css("background-image", 'url("img/background/bleuFonce.jpg")');
            break;
        case "grey":
            $('#imgs ').css("background-image", 'url("img/background/gris.jpg")');
            break;
        case "black":
            $('#imgs ').css("background-image", 'url("img/background/noir.jpg")');
            break;
        case "pink":
            $('#imgs ').css("background-image", 'url("img/background/rose.jpg")');
            break;

    }
});

let letter = "A";
let number = 1;
let letterid = "";
let click = 0;
$('#modalbtn').hide();

$(document).on('click','.img-fluid', function(){
    if (click === 0){
        letter = $(this).attr("value");
        letterid = $(this).attr("id");
        $('#modalbtn').click();

        $('#carouselimg1').attr("src","img/Letters/"+letter+"/"+letter+"1.jpg");
        $('#carouselimg2').attr("src","img/Letters/"+letter+"/"+letter+"2.jpg");
        $('#carouselimg3').attr("src","img/Letters/"+letter+"/"+letter+"3.jpg");
        $('#carouselimg4').attr("src","img/Letters/"+letter+"/"+letter+"4.jpg");
        $('#carouselimg5').attr("src","img/Letters/"+letter+"/"+letter+"5.jpg");
        click++;
    }else {
        number = $(this).attr("alt");
        $('#modalbtn').click();
        $('#' + letterid).attr("src","img/Letters/"+letter+"/"+letter+number+".jpg");
        click--;
    }
});




