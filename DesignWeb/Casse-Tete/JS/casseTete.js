var imgID1; var imgID2; var imgSrc1; var imgSrc2; var click=1; var image; var victoire=0; var random=0;  var temp;
var randomTab=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg"];


$(".img-fluid").click(function(){
    if (click === 1){
            imgID1 = $(this).attr("id");
            imgSrc1 = $(this).attr("src");
        click = 0;
    }else if (click === 0){

            imgID2 = $(this).attr("id");
            imgSrc2 = $(this).attr("src");

            $('#'+imgID1).attr("src",imgSrc2);
            $('#'+imgID2).attr("src",imgSrc1);

        click = 1;

        verifierVictoire();
        victoire = 0;
    }
});

function verifierVictoire() {
    for (var i = 1; i < 10; i++) {
        image = [$("#image" + i).attr("id"), $("#image" + i).attr("src")];
        if (image[0] === "image" + i && image[1] === "images/" + i + ".jpg") {
            victoire++;

        }
        if (victoire === 9) {
            for (var k = 1; k < 10; k++) {
                $('#image' + k).attr("src", "images/victoire.jpg");
            }
        }
    }
}

$("#boutonRecommencer").click(function() {
    recommencer();
    for (var l = 1; l<=9; l++){
        $('#image' + l).attr("src",randomTab[(l-1)]);
    }
});

function recommencer() {
    for (var j = 0; j<9; j++){
        random = Math.floor((Math.random() * 8));
        temp = randomTab[j];
        randomTab[j] = randomTab[random];
        randomTab[random] = temp;
    }console.log(randomTab);
}
