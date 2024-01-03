function jogador() {
}
jogador.x = -1;
jogador.y = -1;
jogador.desenhar = function (ctx) {
    ctx.fillStyle = "#00BBBB";
    ctx.fillRect(jogador.x * mapa.largura + 2, jogador.y * 
    mapa.largura + 2, mapa.largura - 4, mapa.largura - 4);
};
