let carro = {
    marca:'Peugeot',
    modelo:2008,
    ano:2024,
    cor: 'preto'
}

for (let key in carro) {
console.log(carro[key]);
}

//2-
let livro= {
titulo:"Verity",
autor:" Colleen Hoover",
anoPublicado: 2018,
genero: 'Suspense psicológico'
}

for (const key in livro) {
console.log(`${key} : ${livro[key]}`);

}
livro.editora = 'Record '
console.log(livro);


//3-

let produtos = {
produto1:{
    categoria: 'moveis',
    nome: 'Guarda-roupas',
    quantidadeDisponivel: 50,
    valorProduto: 799
},
produto2:{
    categoria: 'eletrônicos',
    nome: 'Impressora',
    quantidadeDisponivel: 20,
    valorProduto: 810
},
produto3:{
    categoria: 'eletrônicos',
    nome: 'Alexa',
    quantidadeDisponivel: 500,
    valorProduto: 1900
},
produto4:{
    categoria: 'Cama',
    nome: 'Colcha casal queen',
    quantidadeDisponivel: 5,
    valorProduto: 140
},
}

function produtoFiltradoMaior(produtos, valorLimite) {

for (const key in produtos) {
 
  if (produtos[key].valorProduto > valorLimite) {
    console.log(`Produto com valor acima do limite de ${valorLimite}: ${produtos[key].nome}`);
    console.log(produtos[key]);
  }
}

}

let valorLimite = 700
produtoFiltradoMaior(produtos, valorLimite);

//4-

let pessoas = [
{nome: "Nina", idade: 4, cidade:"Campina Grande"},
{nome: "Sulivana", idade: 16, cidade:"Ingá"},
{ nome: "Joaquim", idade: 22, cidade:"Campina Grande"},
{nome: "Damião", idade: 10, cidade:"Ingá"}

]
for (const pessoa of pessoas) {
console.log(pessoa);
}


///5-

let alunos = [
{nome:"Nina", nota1: 9, nota2:6},
{nome:"Nino", nota1: 5.5, nota2:8},
{nome:"Nini", nota1: 10, nota2: 4},
{nome:"Nuno", nota1: 7.5, nota2: 8.5}
]


let mediaAluno 
for (const aluno of alunos) {
mediaAluno = (aluno.nota1 + aluno.nota2) / 2
console.log(` A média do aluno(a) ${aluno.nome} é : ${mediaAluno}`);  
}

//6-

let funcionarios = [
{nome: "Nina", cargo: "Recepcionista",  salario: 1420},
{nome: "Nino", cargo: "Zelador", salario: 2500},
{nome: "Nini", cargo: "Dentistas", salario: 4500},
{nome: "Nina", cargo: "Assistente de dentista",salario: 2100}
]




for (const funcionario of funcionarios) {

let salarioCondicao = 2000
if(funcionario.salario > salarioCondicao){
console.log(`O funcionário : ${funcionario.nome} com cargo ${funcionario.cargo} recebe R$ ${funcionario.salario}`);
}
}
