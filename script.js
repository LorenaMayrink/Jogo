const lista1 = ['ATENÇÃO', 'DORMIR', 'SONHO', 'DESPERTAR', 'CAMA', 'FOLGA', 'ACORDAR', 'PREGUIÇA', 'REPOUSO', 'INSÔNIA', 'FADIGA', 'DEITAR', 'SOSSEGO', 'RELAXAR', 'CANSADO', 'COBERTA',  'AGORA ESCREVA TODAS AS PALVARAS DA LISTA' ]
const lista2 = ['TÍTULO', 'LEITURA', 'PÁGINA', 'CONTO', 'EDIÇÃO', 'RESUMO', 'CADERNO', 'ESCRITOR', 'TEXTO', 'HISTÓRIA', 'AUTOR', 'FÁBULA', 'FOLHA', 'NARRAÇÃO', 'ROMANCE', 'AGORA ESCREVA TODAS AS PALVARAS DA LISTA' ]
const lista3 = ['SOM', 'RITMO', 'MAESTRO', 'PIANO', 'REFRÃO', 'CONCERTO', 'TOM', 'CANÇÃO', 'NOTA', 'BANDA', 'TIMBRE', 'ORQUESTRA', 'VIOLÃO', 'ÓPERA', 'ÁUDIO', 'AGORA ESCREVA TODAS AS PALVARAS DA LISTA']
let contador = 0;
let listaAtual

const listasTotais = [lista1, lista2, lista3]

function play(){
    const divPalavras = document.getElementById("palavras")

    listaAtual = listasTotais[contador]
    
    for (let i = 0; i < listaAtual.length; i++) {
        setTimeout(() => {
            divPalavras.innerText = listaAtual[i]
        },2000*(i + 1))
    }
    setTimeout(() => {
        divPalavras.innerText = '';
    }, 2000*(listaAtual.length + 1))
}

function next() {
    contador++
    play()
}