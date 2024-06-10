function identity<T> (args: T[]): T {
    return args[0];
}

const output1 = identity<string>(["Soumya"]);
const output2 = identity<number>([1, 2, 3])
console.log(output1);
console.log(output2);
console.log(output1.toUpperCase);
console.log(output1.lastIndexOf('u'))