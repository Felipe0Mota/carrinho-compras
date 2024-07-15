let carrinho = document.getElementById('lista-produtos');

function limpar() {
}

function adicionar() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let produtoSelecionado = document.getElementById('produto').value.split(' - R$');
    let produto = produtoSelecionado[0];
    let valor = parseFloat(produtoSelecionado[1]);
    let itemCarrinho = `<span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${valor}</span>`;
}