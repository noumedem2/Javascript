function factorialize(num) {
    let fact = 1;
    for (let i = 0; i < num; i++) {
        fact *= (i + 1);
    }
    return (fact <= 0) ? 1 : fact;
}

console.log(factorialize(5));