
$('#text1').hide();
$('#text2').hide();
$('#text3').hide();

let first = 0;  let second = 0; let third = 0;

$("#btn1").click(function(){
    if (first !== 1){
        $('#text1').show("slow");
        first++;
        if (second === 1){
            $('#text2').hide("slow");
            second--;
        }else if (third === 1){
            $('#text3').hide("slow");
            third--;
        }
    }else if(first === 1){
        $('#text1').hide("slow");
        first--;
    }
});

$("#btn2").click(function(){
    if (second !== 1){
        $('#text2').show("slow");
        second++;
        if (first === 1){
            $('#text1').hide("slow");
            first--;
        }else if (third === 1){
            $('#text3').hide("slow");
            third--;
        }
    }else if(second === 1){
        $('#text2').hide("slow");
        second--;
    }
});

$("#btn3").click(function(){
    if (third !== 1){
        $('#text3').show("slow");
        third++;
        if (first === 1){
            $('#text1').hide("slow");
            first--;
        }else if (second === 1){
            $('#text2').hide("slow");
            second--;
        }
    }else if(third === 1){
        $('#text3').hide("slow");
        third--;
    }
});







