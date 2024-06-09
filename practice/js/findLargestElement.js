const numbers = [3, 6, 9, 14, 1, 5]
function findLargestElement(numbers) {
    let highest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (highest < numbers[i]) {
            highest = numbers[i];
        }
    }
    console.log(highest);
}
findLargestElement(numbers);