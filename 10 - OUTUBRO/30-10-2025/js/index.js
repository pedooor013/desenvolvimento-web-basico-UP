var ehAcendida = false;

function duplicarParagrafos() 
{
    const paragrafoOriginal = document.getElementById("paragrafo-original").innerHTML;
    document.getElementById("paragrafo-duplicado").innerHTML = paragrafoOriginal;
}

function ligarLampada()
{
    document.getElementById('lamp').src = 'img/pic_bulbon.gif'
    
}
function desligarLampada()
{
    document.getElementById('lamp').src = 'img/pic_bulboff.gif'
}

function ligaDesligaLampada(){
    ehAcendida === true 
    ? ((document.getElementById('lampadaAcesaOuDesligada').src =  'img/pic_bulboff.gif'),
    (ehAcendida = false),
    (document.getElementById("btnLigarLampada").innerHTML = 'Ligar'))
    : ((document.getElementById('lampadaAcesaOuDesligada').src =  'img/pic_bulbon.gif'), 
    (ehAcendida = true),
    (document.getElementById("btnLigarLampada").innerHTML = 'Desligar'));
    
}