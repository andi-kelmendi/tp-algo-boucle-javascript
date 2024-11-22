// ex02.js

function countEvenNumbers(arr) {
    // Utilise la méthode filter pour sélectionner les nombres pairs et retourne leur nombre
    return arr.filter(num => num % 2 === 0).length;
}

// Exemples de test :
console.log(countEvenNumbers([1, 2, 3, 4])); // Résultat attendu : 2
console.log(countEvenNumbers([7, 11, 19])); // Résultat attendu : 0
console.log(countEvenNumbers([0, -2, 4, 5, 6])); // Résultat attendu : 4
