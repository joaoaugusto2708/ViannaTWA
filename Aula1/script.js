let a, b;
function somar() {
    return a + b;
}
function subtrair() {
    return a - b;
}
function multiplicar() {
    return a * b;
}
function dividir() {
    return a / b;
}

function operacao(funcao, numA, numB) {
    a = numA;
    b = numB;
    console.log(funcao());
}

operacao(somar, 1, 2);