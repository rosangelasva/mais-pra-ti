
let produtos = [
    { nome:"Telefone", preco: 2000,},
    { nome:"apple watch", preco: 6300,},
    { nome:"Armario", preco: 1500, }
]

produtos.forEach(produto => {
    produto.precoComDesconto = produto.preco *0.9;
    console.log(`Produto: ${produto.nome}, Preço com desconto: R$${produto.precoComDesconto.toFixed(2)}`)
 });


///8-

let filmes = [
    { titulo :"Milagres do Paraíso", diretor:"Patricia Riggen", anoLancamento: 2016 },
    { titulo :"A Garota de Miller", diretor:"Jade Bartlett", anoLancamento: 2024},
    {titulo :"Os Observadores",diretor:"Ishana Night Shyamalan",anoLancamento: 2024},
    {titulo :"Mistério em Paris",diretor:"Jeremy Garelick",anoLancamento: 2023}
]

filmes.forEach(filme => {
    let nomeFilmes = filme.titulo
    console.log(`O nome do Filme é ${nomeFilmes}`);
});


//9

let clientes = [
    { nome:"Nina", idade: 50,cidade: "Ingá" },
    {nome:"Nino", idade: 22,cidade: "Campina Grande" },
    {nome:"Nini",idade: 35,cidade: "Ingá" },
    { nome:"Nuno",idade: 58,cidade: "Campina Grande"}
]


let contarClientes = 0
clientes.forEach(cliente => {
    if (cliente.idade > 30) {
         contarClientes ++ 
    }  
});
console.log(` A quantidade de clientes que tem acima de 30 anos é de : ${contarClientes}`);

//10-

let vendas =[
    {produto:"Televisão", quantidade: 2, valor: 3000 },
    { produto:"Cama Box soleiro", quantidade: 5, valor: 20000 },
    {produto:"Telefone", quantidade: 3,valor: 2100 },
    {produto:"Cobertores",quantidade: 500, valor: 15000 } 
]

let produtosVendidos = 0
vendas.forEach(venda => {
    produtosVendidos+= venda.valor
});
console.log(` A soma de todos os produtos vendidos é de R$ ${produtosVendidos.toFixed(2)}`);


//11-
let pedidos = [
    { cliente: "Nina", produto:"Televisão", quantidade: 2 },
    {cliente: "Nino", produto:"Cama Box soleiro", quantidade: 5},
    {cliente: "Nini", produto:"Telefone", quantidade: 3 },
    {cliente: "Nuno", produto:"Cobertores", quantidade: 500,} 

]

let quantidadeTotal = []

pedidos.forEach(pedido => {
quantidadeTotal.push({
    cliente: pedido.cliente,
    quantidade: pedido.quantidade
})
   
});
console.log(quantidadeTotal); 
//12- 

let estoque =[
    {produto:"Armario", quantidade: 14, minimo:15},
    {produto:"Rack", quantidade: 26, minimo:25},
    {produto:"Telefone", quantidade: 25, minimo:50}
]


estoque.forEach(product => {
    if (product.quantidade < product.minimo) {
         product.quantidade *=  2
    }
    
});
console.log(estoque);

//13- 

let carrinho = {

    item1: {nome: "Arroz",  quantidadesItem: 5,  precoUnitario: 5 },
    item2: {nome: "Feijão", quantidadesItem: 9,  precoUnitario: 10},
    item3: {nome: "Cuscuz", quantidadesItem: 30, precoUnitario: 1.50},
    item4: {nome: "Açucar", quantidadesItem: 3,  precoUnitario: 4 }
}


let carrinhoArray = Object.values(carrinho)
carrinhoArray.forEach(item => {

   let valorTotal = (item.quantidadesItem * item.precoUnitario)
   item.valorTotal = valorTotal
    console.log(`O  valor total do produto ${item.nome} pela quantidade ${item.quantidadesItem} é de : ${item.quantidadesItem*item.precoUnitario}`);

});
console.log(carrinho);

//14-

let empresa = {
    nome: "Tech Solutions",
    departamentos: [
        {nome: "TI", funcionarios: ["Maria ", "Carlos ", "Ana Paula"]},
        {nome: "RH", funcionarios: ["Felipe ", "Juliana ", "José Roberto "]},
        {nome: "Financeiro", funcionarios: ["Leticia Maria", "Marcos Vinicius", "Julia "]}
    ]
}


for (let propriedade in empresa) {
    
    if (propriedade === "departamentos") {
       
        empresa[propriedade].forEach(departamento => {
            console.log(`Departamento: ${departamento.nome}`);
            for (let funcionario of departamento.funcionarios) {
                console.log(`Funcionário: ${funcionario}`);
            }
        });
    }
}


//15-

let transacoes = [

    {tipo:"entrada", valor: 100},
    {tipo:"entrada", valor: 1350},
    {tipo:"saida", valor: 2000},
    {tipo:"entrada", valor: 2550},
    {tipo:"saida", valor: 250 }
]

let transacaoEntrada  = 0 
let transacaoSaida  = 0 

transacoes.forEach(transacao => {
   if (transacao.tipo === "entrada") {
      transacaoEntrada += transacao.valor
    } else if(transacao.tipo === "saida") {
         transacaoSaida += transacao.valor;
    }
   
});

let valorFinal = transacaoEntrada - transacaoSaida

console.log(`Total de entradas: R$ ${transacaoEntrada}`);
console.log(`Total de saida: R$ ${transacaoSaida}`);
console.log(`O valor final é ${transacaoEntrada} - ${transacaoSaida} =  R$ ${valorFinal}`);
