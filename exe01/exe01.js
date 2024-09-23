//1

let num = 27
 ehprimo = true
if (num <= 1) {
    ehPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            ehPrimo = false;
            break;
        }
    }
}
var resultado = ehprimo? "É primo": "Não é primo";
console.log(resultado);

//2-


let idade  = 10
if (idade >= 1  && idade <= 12) {
    console.log(` Sua idade é ${idade} dessa forma, é criança`);
    
} else if (idade > 12 && idade <= 18) {
    console.log(` Sua idade é ${idade} dessa forma, é Adolescente`);
} else if (idade > 18 && idade <= 64) {
    console.log(` Sua idade é ${idade} dessa forma, é Adulto`);
} else{
    console.log(` Sua idade é ${idade} dessa forma, é Idoso`);
}

//3 -

let nota  =  8
if (nota >= 0 && nota <= 4) {
    console.log(`Sua nota foi ${nota} e dessa forma, está Reprovado.`);
    
} else  if(nota > 4 && nota <= 6){
    console.log(`Sua nota foi ${nota}, dessa forma está em recuperação.`);
    
} else{
    console.log(` Sua nota foi ${nota}, está Aprovado.`);
    
}

// 4

// const prompt= require('prompt-sync')() 
const menu = Number(prompt('Informe um numero de 1 - 4 : '))
switch (menu) {
    case 1:
        console.log(` O menu ${menu} informado contém o seguinte prato: Frango a passarinho, Arroz refolgado, salada de verdura e Fritas. `);
        
        break;
    case 2:
        console.log(` O menu ${menu} informado contém o seguinte prato: Parmegiana de frango, Arroz branco e Fritas. `);
    break;
    case 3:
        console.log(` O menu ${menu} informado contém o seguinte prato: Strogonoff de carne, Arroz branco e Batata palha. `);
    break;
    case 4:
        console.log(` O menu ${menu} informado contém o seguinte prato: Tagine de legumes com cuscuz marroquino. `);
    break;
    default:
        console.log(` ERRO! A opção informada ${menu} : Não está disponivel`);
        
        break;
}

//5-

let peso = 60
let altura= 1.62
let imc = peso /(altura*altura)
if (imc < 18.4) {
    console.log(`Voce está Abaixo peso em sua classificação.`);
    
} else if(imc > 18.4 && imc <= 24.9){
    console.log(`Voce está no peso Ideal em sua classificação.`);
} else if(imc > 24.9 && imc <= 29.9){
    console.log(`Voce está Acima do peso em sua classificação`);
} else if(imc > 29.9 && imc <= 34.9){ 
    console.log(`Voce está na Obesidade grau I em sua classificação.`);
} else if(imc > 34.9 && imc <= 40){
    console.log(`Voce está na Obesidade grau II em sua classificação.`);
} else{
    console.log(`Voce está na Obesidade grau III do peso em sua classificação.`);
}

// 6 -
let A = 33
let B = 50
let C = 33
 if ((A < B + C) && (B < A + C )&&( C < A + B)) {
       if (A == B || A == C || B == C) {
        console.log('Triângulo isósceles: possui dois lados iguais');
        
       } else if(A!==B && B!==C) {
        console.log('Triângulo escaleno: possui todos os lados diferentes ');
        
       } else{
        console.log('Triângulo eqüilátero: possui todos os lados iguais');
        
       }
    } else{
        console.log(' Não é um Triângulo');
        
    } 

//7-

let maca = 20
let preco
if (maca < 11) {
    preco = 0.30
} else {
    preco = 0.25
}
let total = maca*preco
console.log(`O valor da compra é de R$${total.toFixed(2)} reais relativo à ${maca} unidades de Maças`);

//8 - 
//const prompt = require('prompt-sync')();
let numero1 = parseInt(prompt('Digite um número : '));
let numero2 = parseInt(prompt('Digite outro número : '));

while (numero1 ===  numero2) {
         console.log("Informe um número diferente!"); 
         numero2 = parseInt(prompt('Digite outro número : '));
       
    
}

if( numero1 < numero2){
    console.log(`Os valores em ordem crescente são: ${numero1}, ${numero2}`)
} else{
    console.log(`Os valores em ordem crescente são: ${numero2}, ${numero1}`);
}

//09

for (let i = 10; i > 0 ; i--) {
    console.log(i);

}

//10-

//const prompt = require('prompt-sync')();
const numero = parseInt(prompt('Digite um número inteiro: '));
for (let i = 0; i < 10; i++) {
    console.log(numero);}

//11- 

//const prompt= require('prompt-sync')() 
let resultado = 0
for (let i = 1; i <= 5; i++) {
    const n = Number(prompt(`Informe um numero ${i}: `))
    resultado += n
    
}
console.log(`A soma total dos números é: ${resultado}`)

//12-

 for (let i = 1; i <= 10 ; i++) {
   for (let j = 1; j <= 10; j++) {
    console.log(` ${i} * ${j} = ${i*j}`);
   }
    
 }
 
 console.log(soma);


//13
//const prompt= require('prompt-sync')() 
let sum = 0
contador = 0
for (let i = 1; ;i++) {
    const n = Number(prompt(`Informe um numero ${i}: `))
    if (n === 0) {
       break;
    }
    sum += n; 
    contador ++
}
if (contador > 0) {
    let media = sum/contador
    console.log(`A média aritmética dos números é: ${media}`)
}else{
    console.log('Não foi informado nenhum número');
    
}

//14-

const prompt= require('prompt-sync')() 
const n = Number(prompt('Informe um numero : '));
let soma = n;


for (let i = soma; i > 2; i--) {
 soma = soma *(i-1)

}
console.log(soma);

//15-

let arr =[0,1]

for (let i = 2; i < 10; i++) {
    arr[i] = arr[i-1] + arr[i-2]
    console.log(arr);
}

