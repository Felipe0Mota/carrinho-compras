let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar() {
    //recuperar valores; nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split(' -')[0];
    let valorUnitario = parseInt(produto.split('R$')[1]);
    let quantidade = document.getElementById('quantidade').value;
    let carrinho = document.getElementById('lista-produtos');

    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Adicione a QUANTIDADE desejada do produto!');
        return;
    } else {
         //calcular o preço, subtotal
        let subtotal = valorUnitario * quantidade;

        //adicionar no carrinho
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`;

        //atualizar total
        totalGeral = totalGeral + subtotal;
        let total = document.getElementById('valor-total');
        total.textContent = `R$ ${totalGeral}`;

        document.getElementById('quantidade').value = '';
    }
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    totalGeral = 0;
}