let canvas = document.getElementById("tela");
let ctx = canvas.getContext("2d");

// ctx.fillStyle="#FF0000";
// ctx.fillRect(20, 30, 50, 1000);

mapa.carregar(canvas);
mapa.desenhar(ctx);
jogador.desenhar(ctx);