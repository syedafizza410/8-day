/* Q22 Intentional Error: Try to produce an array index error in one of
your programs. Correct the error before finishing.
Explain & TIP: Array index errors happen when you try to access a position in the array that doesn’t exist.
Experimenting with this helps you understand array boundaries.*/
let City = ["Karachi", "Lahore", "Daharki"];
console.log(City[3]);
City[2] = "Sukkur";
/* Q23 Conditional Tests: Write a series of conditional
tests. Predict the results of each test.
Explain & TIP: Conditional tests check if something is true or false. Writing different
tests helps you understand how conditions work in programming.*/
let Phone = `iphone 11promax`;
console.log("Is Phone == 'iphone 11promax'? I predict True.");
console.log(Phone == 'iphone 11promax');
console.log("Is Phone == 'Nokia'? I predict False.");
console.log(Phone == 'Nokia');
/* Q24 More Conditional Tests: Expand your conditional
tests to cover a wider range of comparisons.
Explain & TIP: Experiment with different types of conditions
to see how they work. This builds a deeper understanding of logic in programming.*/
let fruit = `apple`;
console.log("Testing with fruit names");
console.log(fruit == `apple`);
console.log(fruit == `mango`);
console.log("Numercial test");
console.log(11 > 9);
console.log(50 < 10);
console.log(100 <= 30);
console.log("Testing with lower case");
console.log("Fizza".toLowerCase() == "fizza");
console.log("huda".toLowerCase() == "Huda");
export {};
