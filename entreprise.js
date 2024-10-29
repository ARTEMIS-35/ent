function salaire (){
    const x = parseFloat(document.getElementById('hours').value);
    const u = parseFloat(document.getElementById('rate').value);
    let t;

if(x>50){
             t=39*u+(x-39)*u*(1.5)+(x-45)*u*(1.75)+(x-50)*u*(2)}
else if(x>45){
             t=39*u+(x-39)*u*(1.5)+(x-45)*u*(1.75)
}
else if(x>40){
             t=39*u+(x-39)*u*(1.5)
}
else if(x<39){
           t=x*u
}
document.getElementById('result').value=t.toFixed(2)
}
