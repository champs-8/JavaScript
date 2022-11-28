//RECURSIVIDADE
function factorial(x){
    if(x==1){
        return 1;
    }else{
        return x*factorial(x-1)
        console.log(x);
    }
}
console.log(factorial(5))
