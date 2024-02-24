function colocarPontoVirgula() {
    var inputTextContent = document.getElementById('input-text').value;
    var lista_linhas = inputTextContent.split('\n');
    var lista_linhas_clean = lista_linhas.map(function (linha) {
        return linha.trim();
    });

    for(var i = 0; i < lista_linhas_clean.length; i++) {
        linha = lista_linhas_clean[i]
        if ((linha.charAt(0) == '#' || linha.includes(';') || linha.includes('//') || linha.includes('{') || linha.includes('}')) && linha.endsWith(';')) {
            lista_linhas[i] = lista_linhas[i].slice(0, -1);
            while(lista_linhas[i].charAt(lista_linhas[i].length-1) == ';') {
                lista_linhas[i] = lista_linhas[i].slice(0, -1);
            }
            linha = lista_linhas[i];
        }
        if (linha.charAt(0) != '#' && !linha.includes('//') && !linha.includes('{') && !linha.includes('}') && linha != '') {
            lista_linhas[i] += ';';
            while(lista_linhas[i].charAt(lista_linhas[i].length-2) == ';') {
                lista_linhas[i] = lista_linhas[i].slice(0, -1);
            }
        }
    }

    document.getElementById('output-text').value = lista_linhas.join('\n');
}

function copiarTexto() {
    var textoParaCopiar = document.getElementById('output-text');
    textoParaCopiar.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Texto copiado!");
}