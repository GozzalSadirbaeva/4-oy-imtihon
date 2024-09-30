const isTriangle = function(a,b,c){
    if(a+b>c && b+c>a && a+c>b){
        console.log("true");
    }
    else{
        console.log("false");   
    }
}
isTriangle(7,2,2)