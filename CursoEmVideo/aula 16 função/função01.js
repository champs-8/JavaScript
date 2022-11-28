function parimp(n,m){
    if (n&&m%2==0){
        return 'par'
    }else{
        return'ímpar'
    }
}
let res=parimp(10,14)
console.log(res);