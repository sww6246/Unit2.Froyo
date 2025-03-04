let flavorOrder = prompt("Enter your ice cream flavor orders from the options vanilla, strawberry and coffee. Separate your order by commas");
console.log(flavorOrder);

let flavorArr = flavorOrder.split(",");
console.log(flavorArr)

function frequency (array, item) {
    let count = 0;
    for (let i=0; i< array.length; i++) {
        if (array[i] === item) {
            count++;
        }
    }
    return count;
}

const flavor1 = "vanilla";
const flavor2 = "coffee";
const flavor3 = "strawberry";

let vanillaFreq = (frequency(flavorArr, flavor1));
let coffeeFreq = (frequency(flavorArr, flavor2));
let strawberryFreq = (frequency(flavorArr, flavor3));

const orderFreq = {
    vanilla: vanillaFreq,
    coffee: coffeeFreq,
    strawberry: strawberryFreq
}


console.table(orderFreq)