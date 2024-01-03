function mapa() {
    //sem elementos estáticos
}
//Compreensão do conteúdo do mapa
mapa.LIVRE = 0;
mapa.PAREDE = 1;
mapa.JOGADOR = 2;
mapa.TIJOLO = 3;
mapa.INIMIGO = 4;
mapa.BOMBA = 5;

//Linhas e colunas existentes no mapa atual
mapa.colunas = 0;
mapa.linhas = 0;

//Lartura e altura de cada linha/coluna em pixels
mapa.largura = 40;

//Mantém e carrega o mapa atual
mapa.atual = null;
mapa.carregar = function(canvas) {
    mapa.atual = new Array();
    let x, y;

    for(y = 0; y < mapaMascara.length; y++) {
        mapa.atual.push(mapaMascara[y].slice(0));        
    }
    for (x = 0; x < mapa.atual[y].length; x++) {
        switch (mapa.atual[y][x]) {
            case mapa.JOGADOR:
            jogador.x = x;
            Jogador.y = y;
            break;
        }
    }
        

    mapa.linhas = mapa.atual.length;
    mapa.colunas = mapa.atual[0].length;
    canvas.width = mapa.colunas * mapa.largura;
    canvas.height = mapa.linhas * mapa.largura;
}

//Carrega textura e desenha
mapa.imgTijolo = new Image();
mapa.imgTijolo.src = "img/tijolo.png";
mapa.desenhar = function(ctx) {
    if(mapa.atual != null) {
        var x, y;
        for(y = 0; y < mapa.linhas; y++) {
            if(mapa.atual[x][y] == mapa.PAREDE) {
                ctx.fillStyle = "#BBBBBB";
                ctx.fillRect(x * mapa.largura, y * mapa.largura, mapa.largura, mapa.largura);                
            } else if(mapa.atual[y][x] == mapa.TIJOLO) {
                ctx.drawImage(mapa.imgTijolo, x * mapa.largura, y * mapa.largura, mapa.largura, mapa.largura);
            }
        }
    }
}
