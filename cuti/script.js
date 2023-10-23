let numbers = [100, 55, 15, 300, 20];

let sum = 0;

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers.slice(0, i + 1));

    if (i > 0) {
        console.log(sum + " + " + numbers[i] + " = " + (sum + numbers[i]) + ";");
    }

    sum += numbers[i];
}

console.log("Итоговая сумма: " + sum);