const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.9,
    desconto: 0.05
}

function clone(obj) {
    return { ...obj }
}

const newProduct = clone(produto)
newProduct.nome = "Caneta Bic Azul"

console.log(produto, newProduct)