//fatorial 5!==5*4*3*2*1
function factorial(x){
    let fat=1
    for(let cont=x;cont>1;cont--){
        fat*=cont
    }
    return fat;
}
console.log(factorial(9));