
// fast 100 prise = 1000;
//  secend 100 prise = 900;
// last all prise is a = 700;

function sereal(number) {

    if (typeof number !== "number") {
        return `Pleas Input The --Number`
    }

    let fast100 = 0;
    let secand100 = 0;
    let last = 0;
    let ses = 0;
    let total = 0;

    if (number <= 100) {
        fast100 = number * 1000;
        return fast100;
    }
    else if (number <= 200) {
        fast100 = 100 * 1000;
        secand100 = (number - 100) * 900;
        total = fast100 + secand100;
        return total;
    }
    else if (number <= 300) {
        fast100 = 100 * 1000;
        secand100 = 100 * 900;
        last = (number - 200) * 700;
        total = fast100 + secand100 + last;
        return total;
    }

    else if (number >= 300) {
        fast100 = 100 * 1000;
        secand100 = 100 * 900;
        last = 100 * 700;
        ses = (number - 300) * 500;
        total = fast100 + secand100 + last + ses;
        return total;

    }

}



let input = sereal(500);
console.log(`Total amount is  :  ${input}`);