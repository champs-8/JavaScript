const func = function(){
    console.log(this);
}

const arrowFunc = () => console.log(this);

func() //tem um documento
arrowFunc() //nao tem seu proprio this
