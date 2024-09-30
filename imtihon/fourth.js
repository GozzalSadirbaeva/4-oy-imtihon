const firstNonConsecutive = function(a){
    for(let i= 1;  i<= a.length; i++){
        if(a[i] !== a[i-1] +1){
            return a[i]
        }
    }
    return null
}
console.log(firstNonConsecutive([1,2,3,4,5,7]));
