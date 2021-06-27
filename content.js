let link = document.createElement('link')
link.rel = "stylesheet"
link.href = './styles.css'

document.querySelector('body').appendChild(link)

document.querySelector('#Grid2ContainerTbl').classList = 'personalWidth100'

let table = document.querySelector('#Grid2ContainerTbl')

let tableAll = table.children[0].children

for(linha of tableAll){
    if(linha.id){
        linha.classList = 'bg-success'
        for(coluna of linha.children){
            for(textColuna of coluna.children){
                textColuna.classList = 'text-dark'
            }
        }
    }else {
        linha.classList = 'bg-info'
        for(colunaInfos of linha.children){

            for(textoColunaInfos of colunaInfos.children){
                textoColunaInfos.classList = 'text-white'

                if(textoColunaInfos.id.indexOf('Grid1ContainerDiv') == 0){
                    textoColunaInfos.classList = 'center'

                    for(tabelaDeAvaliacao of textoColunaInfos.children){
                        tabelaDeAvaliacao.classList = 'bg-warning tableAvaliacao'

                        for(corpoTabelaDeAvaliacao of tabelaDeAvaliacao.children){
                            
                            for(linhaTabelaDeAvaliacao of corpoTabelaDeAvaliacao.children){
                                linhaTabelaDeAvaliacao.classList = 'bg-warning text-info'
                                
                                for(textoTabelaAvaliacao of linhaTabelaDeAvaliacao.children){
                                    textoTabelaAvaliacao.classList = 'text-dark'

                                    textoTabelaAvaliacao.style = ''
                                    textoTabelaAvaliacao.classList = 'text-center'

                                    for(notas of textoTabelaAvaliacao.children){
                                        let notasSemEspacos = notas.textContent.trim()
                                        notas.classList = 'text-dark'

                                        if(notasSemEspacos.indexOf('/') == -1){

                                            if(parseFloat(notasSemEspacos) < 6){
                                                notas.classList = 'text-danger'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                
            }
        }
    }
}

let tr = document.createElement('tr')
let td = document.createElement('td')

td.innerText = 'Criado por Wil-Rs'
td.classList = 'text-dark personalTable'
td.setAttribute('colspan', 2)

tr.appendChild(td)
tr.classList = 'bg-info'

table.insertBefore(tr, table.childNodes[0])