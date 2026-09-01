const input = document.getElementById("input");
const output = document.getElementById("output");
const btnEvaluer = document.getElementById("btnEvaluer");

if(!input) //application du thruty/falsy
    throw Error("input absent");

if(!output) //application du thruty/falsy
    throw Error("output absent");

if(!btnEvaluer) //application du thruty/falsy
    throw Error("btnEvaluer absent");

btnEvaluer.addEventListener('click', function() {
    const result = input.valueAsNumber;
    
    if(!result)
    {
        output.innerText = "Pas de point, pas d'évaluation!"
        return;
    }

    if(result < 0 || result > 20)
    {
        output.innerText = 'Tricheur!'
        return;
    }    
    
    const evaluation = result >= 18 ? 'Excellent' :
        result >= 14 ? 'Bien' :
        result >= 10 ? 'Suffisant' : 'Insuffisant';

    output.innerText = evaluation;
    output.className = evaluation;
});
