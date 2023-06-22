let celInput = document.querySelector("#celcius > input")
let fehrInput = document.querySelector("#fehrenheit > input")
let kelInput = document.querySelector("#kelvin > input")

let btn = document.querySelector(".clear button")

celInput.addEventListener('input',()=>{

    let celTemp = parseFloat(celInput.value);
    let fehTemp = (celTemp * (9/5)) + 32;
    let kelTemp = celTemp + 273.15;

    fehrInput.value = fehTemp.toFixed(2);
    kelInput.value = kelTemp.toFixed(2);
})
fehrInput.addEventListener('input',()=>{

    let fehTemp = parseFloat(fehrInput.value);
    let celTemp = (fehTemp - 32) / 1.8;
    let kelTemp = (fehTemp - 32) / 1.8 + 273.15;

    celInput.value = celTemp.toFixed(2);
    kelInput.value = kelTemp.toFixed(2);
})
kelInput.addEventListener('input',()=>{
    let kelTemp = parseFloat(kelInput.value);
    let celTemp = kelTemp - 273.15;
    let fehTemp = (kelTemp - 273.15) / 1.8 + 32;

    celInput.value = celTemp.toFixed(2);
    fehrInput.value = fehTemp.toFixed(2);
})

btn.addEventListener('click', ()=>{
    celInput.value = "";
    fehrInput.value = "";
    kelInput.value = "";
})