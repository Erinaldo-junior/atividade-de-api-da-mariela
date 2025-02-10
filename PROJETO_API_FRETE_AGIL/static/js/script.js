let fretes = [];
function criarFrete() {
    let origem = document.getElementById('origem').value;
    let destino = document.getElementById('destino').value;
    if (origem && destino) {
        let novoFrete = { id: fretes.length + 1, origem, destino, status: 'pendente' };
        fretes.push(novoFrete);
        exibirFretes();
    }
}

function aceitarFrete(id) {
    fretes = fretes.map(frete => frete.id === id ? { ...frete, status: 'em andamento' } : frete);
    exibirFretes();
}

function exibirFretes() {
    let lista = document.getElementById('listaFretes');
    lista.innerHTML = '';
    fretes.forEach(frete => {
        lista.innerHTML += `
            <div class="frete-card">
                <p><strong>Origem:</strong> ${frete.origem}</p>
                <p><strong>Destino:</strong> ${frete.destino}</p>
                <p><strong>Status:</strong> ${frete.status}</p>
                ${frete.status === 'pendente' ? `<button onclick="aceitarFrete(${frete.id})">Aceitar</button>` : ''}
            </div>`;
    });
}