class Attack {
    constructor(name,power,description,type,cost){
        this.name = name;
        this.power = power;
        this.description = description;
        this.type = type;
        this.cost = cost;
    }
}

class Pokemon {
    constructor(name,hp,type,imgSrc,attribute,length,attack1,attack2,attack3,weigth,weakness,resistance,retraitCost,description){
        this.name = name;
        this.hp = hp;
        this.type = type;
        this.imgSrc = imgSrc;
        this.attribute = attribute;
        this.length = length;
        this.attack1 = attack1;
        this.attack2 = attack2;
        this.attack3 = attack3;
        this.weigth = weigth;
        this.weakness = weakness;
        this.resistance = resistance;
        this.retraitCost = retraitCost;
        this.description = description;
    }

}

function keyPress(e){
    var x = e || window.event;
    var key = (x.keyCode || x.which);
    if(key === 13){
        e.preventDefault();  create();

    }
}
$('#btn').click(function (){
    let pokemon = create();
    alert("Pokemon has been successfully created");

});

function create(){
    let pokemon = new Pokemon(
        $('#Name').val(),
        $('#HP').val(),
        $('#image').val(),
        $('#attribute').val(),
        $('#length').val(),
        $('#weigth').val(),
        new Attack($('#attack').val(),$('#attackpw').val(),$('#attackdesc').val(),$('#Attacktype').val(),$('#AttackCost').val()),
        new Attack($('#attack2').val(),$('#attackpw2').val(),$('#attackdesc2').val(),$('#Attacktype2').val(),$('#AttackCost2').val()),
        new Attack($('#attack3').val(),$('#attackpw3').val(),$('#attackdesc3').val(),$('#Attacktype3').val(),$('#AttackCost3').val()),
        $('#weakness').val(),
        $('#resistance').val(),
        $('#retraitCost').val(),
        $('#description').val()
    );
    return(pokemon);
}

