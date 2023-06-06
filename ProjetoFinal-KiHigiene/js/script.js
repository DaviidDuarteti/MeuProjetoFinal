
var resolucao_progrmaacao = 1920;
var resolucao_minima = 992;

window.onresize = function () {
    redimensionar();
};

function redimensionar() {
    var largura = window.innerWidth;
    if (largura >= resolucao_minima && resolucao_progrmaacao > largura) {
        var proporcao = (largura / resolucao_progrmaacao);
        $('body').css('zoom', proporcao);
    } else {
        $('body').css('zoom', 'unset');
    }
}

redimensionar();

