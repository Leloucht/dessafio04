const teste1 = document.getElementById('teste1');
const teste2 = document.getElementById('teste2');
const teste3 = document.getElementById('teste3');
const teste4 = document.getElementById('teste4');
const teste5 = document.getElementById('teste5');
const teste6 = document.getElementById('teste6');
const teste7 = document.getElementById('teste7');
const teste8 = document.getElementById('teste8');
const teste9 = document.getElementById('teste9');
const teste10 = document.getElementById('teste10');

teste1.addEventListener('click', () => {alert('hello world')});

teste2.addEventListener('click', () => {
    let numberOne = Number(prompt('escolha o primeiro numero'));
    let numberTwo = Number(prompt('escolha o segundo numero'));

    alert(`a soma de ${numberOne} e ${numberTwo} é ${numberOne + numberTwo}`)
})

teste3.addEventListener('click', () => {
    let something = 13616
    console.log(typeof something)
    if(typeof something == 'number') {
        alert('a variavel pre estabelecida é um numero')
    } else alert('a variavel pre estabelecida nao é um numero')
})

teste4.addEventListener('click', () => {
    let algumaCoisa = '4324fsf'
    if(typeof algumaCoisa == 'string') {
        alert('a variavel pre estabelecida é uma string')
    } else alert('a variavel pre estabelecida nao é uma string')
})

teste5.addEventListener('click', () => {
    let tipoBoolean = true
    if(typeof tipoBoolean == 'boolean') {
        alert('a variavel pre estabelecida é um boolean')
    } else alert('a variavel pre estabelecida nao é um boolean')
})

teste6.addEventListener('click', () => {
    let numberFirst = Number(prompt('escolha o primeiro numero'))
    let numberSecund = Number(prompt('escolha o segundo numero'))

    alert(`a subtracao de ${numberFirst} e ${numberSecund} é ${numberFirst - numberSecund}`)
})

teste7.addEventListener('click', () => {
    let firstNumber = Number(prompt('escolha o primeiro numero'))
    let secondNumber = Number(prompt('escolha o segundo numero'))

    alert(`a multiplicacao de ${firstNumber} e ${secondNumber} é ${firstNumber * secondNumber}`)
})

teste8.addEventListener('click', () => {
    let oneNumber = Number(prompt('escolha o primeiro numero'))
    let twoNumber = Number(prompt('escolha o segundo numero'))

    alert(`a divisao de ${oneNumber} e ${twoNumber} é ${oneNumber / twoNumber}`)
})

teste9.addEventListener('click', () => {
    let variable = Number(prompt('escolha o primeiro numero'))
   
    if(variable % 2 == 0){
        alert('o numero escolhido é um numero par')
    } else alert('o numero escolhido nao é par')
})


teste10.addEventListener('click', () => {
    let unvariable = Number(prompt('escolha o primeiro numero'))
   
    if(unvariable % 2 == 1){
        alert('o numero escolhido é um numero impar')
    } else alert('o numero escolhido nao é impar')
})