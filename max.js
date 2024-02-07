
function arrayNumber(number) {

    if (!Array.isArray(number)) {
        return "please input the Array input input---------------number";
    }


    let subNum = number[0];
    for (let num of number) {

        if (typeof num !== "number") {
            return "plese input the : -------number,"
        }

        if (num > subNum) {
            subNum = num;

        }

    }
    return subNum;
}

let a = [10, 12, 15, 47, 84, 57, 54, 21, 48, 65, 84, 75, 47, 11, 25, 52, 54, 56, 568, 5, 8, 2, 2000];

let input = arrayNumber(a);
console.log(input);