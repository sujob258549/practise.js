function celseas(num){
    
    if(typeof num !== "number"){
        return `Please Input The Number`;

    }

    let fareanHight = (num * 9/5) + 32;
    return fareanHight;
}
const input =  celseas("50");
console.log(input);