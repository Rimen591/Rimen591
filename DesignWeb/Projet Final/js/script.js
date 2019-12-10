let item = "hoodie";
let itemState = [0,2];
let functCallState = [0,0,0];

$('#hoodie-preview').click( function () {
    item = "hoodie";
    console.log(item)
    itemState = [0,2];
    if (functCallState[0] === 0){
        switchImg();
        functCallState[0] = 1;
    }
});
$('#tee-half-alive-preview').click( function () {
    item = "tee_half_alive";
    console.log(item)
    itemState = [0,2];
    if (functCallState[1] === 0){
        switchImg();
        functCallState[1] = 1;
    }
});
$('#tee-half-dead-preview').click( function () {
    item = "tee_half_dead";
    itemState = [0,2];
    if (functCallState[2] === 0){
        switchImg();
        functCallState[2] = 1;
    }
});


function switchImg() {
    $('#' + item + '-color-1').click( function () {
        itemState[1] = 0;
        if (itemState[0] === 0){
            $('#' + item).attr("src","img/" + item + (itemState[1] + 1) + ".jpeg");
        }else {
            $('#' + item + '-back').attr("src","img/" + item + (itemState[1] + 1) + ".jpeg");
        }
    });
    $('#' + item + '-color-2').click( function () {
        itemState[1] = 1;
        if (itemState[0] === 0){
            $('#' + item).attr("src","img/" + item + (itemState[1] + 1) + ".jpeg");
        }else {
            $('#' + item + '-back').attr("src","img/" + item + (itemState[1] + 1) + ".jpeg");
        }
    });
    $('#' + item + '-color-3').click( function () {
        itemState[1] = 2;
        if (itemState[0] === 0){
            $('#' + item).attr("src","img/" + item + (itemState[1] + 1) + ".jpeg");
        }else {
            $('#' + item + '-back').attr("src","img/" + item + (itemState[1] + 1) + ".jpeg");
        }
    });

    $('#' + item + '-back').click( function () {
        console.log("click " + itemState[0])
        if (itemState[0] === 0){
            itemState[0] = 1;
            $('#' + item).attr("src","img/" + item + "_Back.jpeg");
            $('#' + item + '-back').attr("src","img/" + item + (itemState[1] + 1) + ".jpeg");
        }else {
            itemState[0] = 0;
            $('#' + item).attr("src","img/" + item + (itemState[1] + 1) + ".jpeg");
            $('#' + item + '-back').attr("src","img/" + item + "_Back.jpeg");
        }
    });
}


var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};

