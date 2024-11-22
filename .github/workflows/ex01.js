// ex01.js

function findMax(arr) {
  
    let max = -Infinity;

    // Utiliser une boucle for sans condition
    for (let i = 0; i < arr.length; i++) {
        max = (arr[i] > max) * arr[i] + !(arr[i] > max) * max;
    }

    return max;
}

// Exemples de test :
console.log(findMax([1, 3, 7, 2])); // Résultat attendu : 7
console.log(findMax([-5, -1, -10])); // Résultat attendu : -1
console.log(findMax([10])); // Résultat attendu : 10
