

function add(number, number2){

    if(typeof number !== "number" || typeof number2 !== "number"){
        return "please input the : number "
    }
    
    let total = number + number2;
    return total;

}

const input = add(10,"20");
console.log(input);