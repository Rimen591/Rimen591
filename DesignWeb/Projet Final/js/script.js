let hoodie = [0,2]; let hover = "";

$('#color-picker-pink').click( function () {
    hoodie[1] = 0;
    if (hoodie[0] === 0){
        $('#hoodie').attr("src","img/Hoodie_Pink.jpg");
    }else {
        $('#hoodie-back').attr("src","img/Hoodie_Pink.jpg");
    }
});
$('#color-picker-purple').click( function () {
    hoodie[1] = 1;
    if (hoodie[0] === 0){
        $('#hoodie').attr("src","img/Hoodie_Purple.jpg");
    }else {
        $('#hoodie-back').attr("src","img/Hoodie_Purple.jpg");
    }
});
$('#color-picker-orange').click( function () {
    hoodie[1] = 2;
    if (hoodie[0] === 0){
        $('#hoodie').attr("src","img/Hoodie_Orange.jpg");
    }else {
        $('#hoodie-back').attr("src","img/Hoodie_Orange.jpg");
    }
});

$('#hoodie-back').click( function () {
    if (hoodie[0] === 0){
        hoodie[0] = 1;
        $('#hoodie').attr("src","img/Hoodie_Back.jpeg");
        if (hoodie[1] === 0){
            $('#hoodie-back').attr("src","img/Hoodie_Pink.jpg");
        }else if (hoodie[1] === 1){
            $('#hoodie-back').attr("src","img/Hoodie_Purple.jpg");
        }else if (hoodie[1] === 2){
            $('#hoodie-back').attr("src","img/Hoodie_Orange.jpg");
        }
    }else {
        hoodie[0] = 0;
        if (hoodie[1] === 0){
            $('#hoodie').attr("src","img/Hoodie_Pink.jpg");
        }else if (hoodie[1] === 1){
            $('#hoodie').attr("src","img/Hoodie_Purple.jpg");
        }else if (hoodie[1] === 2){
            $('#hoodie').attr("src","img/Hoodie_Orange.jpg");
        }
        $('#hoodie-back').attr("src","img/Hoodie_Back.jpeg");
    }
});







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

