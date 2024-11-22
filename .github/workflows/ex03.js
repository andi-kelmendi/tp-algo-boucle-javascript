// ex03.js

function multiplyArray(arr, multiplier) {
    // Utilise la méthode map pour multiplier chaque élément par le multiplier
    return arr.map(num => num * multiplier);
}

console.log(multiplyArray([1, 2, 3], 2)); // Résultat attendu : [2, 4, 6]
console.log(multiplyArray([4, 0, -3], 3)); // Résultat attendu : [12, 0, -9]
console.log(multiplyArray([], 5)); // Résultat attendu : []