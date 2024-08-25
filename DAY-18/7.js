var scores = [4, 6, 8, 3, 45, 23], sum = 0, aver;

for (var i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
}

for (i = 0; i < scores.length; i++) {
     aver = sum / 6;
}

console.log("the sum " + sum);
console.log("the total aver " + aver.toFixed(2));


