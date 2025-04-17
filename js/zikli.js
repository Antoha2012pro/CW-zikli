const name = "David";
console.log(name[0]); // Значення по індексу
const number = 100;
for (let i = 0; i <= number; i += 1) {
    console.log(i);
}

// let i = 0; Локальна змінна i, = 0 з якого індекса починаешь перебирати.
// i < 10 // Умову до куди ми перебираємо наш цикл
// i += 1 // На кожній ітерації додати лічільника 1


const nameJs = "JavaScript";
for (let i = 0; i < nameJs.length; i += 1) {
    // console.log(name[i]);
    console.log(`Індекс елемента ${i}, а значення цього індекса ${nameJs[i]}`);
}

for (let index = 0; index < 20; index += 1) {
    // console.log(index);
    if (index === 7) {
        console.log(index);
        continue; // Пропустити
        // break; // Припинити
    }
    // console.log(index);
}

for (let i = 0; i <= 10; i += 1) {
    console.log(`Таблиця множення числа ${8} x ${i} = ${8 * i}`);
}

// Сума чисел від 1 до 100:
let sum = 0;
for (let i = 0; i <= 100; i += 1) {
    sum += i;
}
console.log(sum);

for (let i = 10; i >= 1; i -= 1) {
    console.log(i);
}

const fullName ="Artem Diachok";
for (let i = 0; i < fullName.length; i +=1) {
    console.log(fullName[i]);  
}

// let sumTwo = 0;
// for (let i = 0; i < 50; i += 0) {
//     if (sumTwo % 2 === 0) {

//     }
// }