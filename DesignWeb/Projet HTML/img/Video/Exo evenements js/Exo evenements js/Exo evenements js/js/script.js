
$('#text1').hide();
$('#text2').hide();
$('#text3').hide();


$("#btn1").click(function() {
    $('#text1').toggle("slow");
});

$("#btn2").click(function() {
    $('#text2').toggle("slow");
});

$("#btn3").click(function() {
    $('#text3').toggle("slow");
});


$(".box1").hover(function() {
    $('#text1').toggle();
});

$(".box3").hover(function() {
    $('#text3').toggle();
});

$(".box2").hover(function() {
    document.getElementById("overlay").style.display = "block";
});
$(".box2").mouseleave(function() {
    document.getElementById("overlay").style.display = "none";
});

