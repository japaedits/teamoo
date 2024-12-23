// Inicia a animação de queda das imagens após 3 segundos
window.onload = function() {
    setTimeout(function() {
        document.getElementById('img1').style.animationPlayState = 'running';
        setTimeout(function() {
            document.getElementById('img2').style.animationPlayState = 'running';
        }, 2000); // Atraso de 2 segundos para a próxima imagem

        setTimeout(function() {
            document.getElementById('img3').style.animationPlayState = 'running';
        }, 4000); // Atraso de 2 segundos para a próxima imagem

        setTimeout(function() {
            document.getElementById('img4').style.animationPlayState = 'running';
        }, 6000); // Atraso de 2 segundos para a próxima imagem

        setTimeout(function() {
            document.getElementById('img5').style.animationPlayState = 'running';
        }, 8000); // Atraso de 2 segundos para a próxima imagem
    }, 3000); // Atraso inicial de 3 segundos
};
