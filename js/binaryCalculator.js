let res = document.getElementById("res"); //

let btn0 = document.getElementById("btn0"); //
let btn1 = document.getElementById("btn1"); //

let btnClr = document.getElementById("btnClr"); //
let btnEql = document.getElementById("btnEql"); //

let btnSum = document.getElementById("btnSum"); //
let btnSub = document.getElementById("btnSub"); //
let btnMul = document.getElementById("btnMul"); //
let btnDiv = document.getElementById("btnDiv"); //

let screenNumber;
let number;

let operador;

let bin1;
let bin2;

let array = [];

btn0.addEventListener('click', function(){
    res.innerHTML += 0;
});
btn1.addEventListener('click', function(){
    res.innerHTML += 1;
});

btnSum.addEventListener('click', function(){
    operador = "+"
    bin1 = parseInt(res.innerHTML,2)
    res.innerHTML = "";
});
btnSub.addEventListener('click', function(){
    operador = "-"
    bin1 = parseInt(res.innerHTML,2)
    res.innerHTML = "";
});
btnMul.addEventListener('click', function(){
    operador = "*"
    bin1 = parseInt(res.innerHTML,2)
    res.innerHTML = "";
});
btnDiv.addEventListener('click', function(){
    operador = "/"
    bin1 = parseInt(res.innerHTML,2)
    res.innerHTML = "";
});

btnClr.addEventListener('click', function(){
    res.innerHTML = "";
    operador = "";
    screenNumber = "";
    number = "";
    bin1 = "";
    bin2 = "";
});


btnEql.addEventListener('click', function(){
    bin2 = parseInt(res.innerHTML,2)
    
    switch(operador){
        case "+":
            number = bin1 + bin2;
            break;
        case "-":
            number = bin1 - bin2;
            break;
        case "*":
            number = bin1 * bin2;
            break;
        case "/":
            number = bin1 / bin2;
            break;
         default:
            console.log('ERROR')
    };
    
    conversion()
});


function conversion(){
    
    while(number > 2){
        let cos = number / 2
        let reminder = number % 2
        array.push(parseInt(reminder))
        number = cos
        if(number < 2){
            array.push(1)
        }
    }
    
    array.reverse()
    res.innerHTML = array.join('')
    array = []
    
};

