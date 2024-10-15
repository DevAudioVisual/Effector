function lowerThird() {
    var cs = new CSInterface;
    var escola = document.getElementById("escola").value;
    cs.evalScript('var escolaSel = "' + escola + '";')
    cs.evalScript('$.runScript.importarLT()')
}

function palavraChave() {
    var cs = new CSInterface;
    var escola = document.getElementById("escola").value;
    cs.evalScript('var escolaSel = "' + escola + '";')
    cs.evalScript('$.runScript.importarPC()')
}

function Lista() {
    var cs = new CSInterface;
    var escola = document.getElementById("escola").value;
    cs.evalScript('var escolaSel = "' + escola + '";')
    cs.evalScript('$.runScript.importarLista()')
}

function transicaoCurta() {
    var cs = new CSInterface;
    var escola = document.getElementById("escola").value;
    cs.evalScript('var escolaSel = "' + escola + '";')
    cs.evalScript('$.runScript.transicaoCurta()')
}

function transicaoLonga() {
    var cs = new CSInterface;
    var escola = document.getElementById("escola").value;
    cs.evalScript('var escolaSel = "' + escola + '";')
    cs.evalScript('$.runScript.transicaoLonga()')
}

function transicaoAudio() {
    var cs = new CSInterface;
    var escola = document.getElementById("escola").value;
    cs.evalScript('var escolaSel = "' + escola + '";')
    cs.evalScript('$.runScript.transicaoAudio()')
}

function transicaoLatam() {
    var cs = new CSInterface;
    var escola = document.getElementById("escola").value;
    cs.evalScript('var escolaSel = "' + escola + '";')
    cs.evalScript('$.runScript.transicaoLatam()')
}

function acessibilidade() {
    var cs = new CSInterface;
    var escola = document.getElementById("escola").value;
    cs.evalScript('var escolaSel = "' + escola + '";')
    cs.evalScript('$.runScript.acessibilidade()')
}

function vinhetaFinal() {
    var cs = new CSInterface;
    cs.evalScript('$.runScript.vinhetaFinal()')
}

function effectGaussianBlur() {
    var cs = new CSInterface;
    cs.evalScript('$.runScript.effectGaussianBlur()')
}

function effectCrop() {
    var cs = new CSInterface;
    cs.evalScript('$.runScript.effectCrop()')
}

function effectHorizontalFlip() {
    var cs = new CSInterface;
    cs.evalScript('$.runScript.effectHorizontalFlip()')
}

function effectDeNoise() {
    var cs = new CSInterface;
    cs.evalScript('$.runScript.effectDeNoise()')
}

function effectDeEsser() {
    var cs = new CSInterface;
    cs.evalScript('$.runScript.effectDeEsser()')
}

function effectDeReverb() {
    var cs = new CSInterface;
    cs.evalScript('$.runScript.effectDeReverb()')
}

function effectParametricEq() {
    var cs = new CSInterface;
    cs.evalScript('$.runScript.effectParametricEq()')
}

function effectTransition() {
    var cs = new CSInterface;
    var nomeTransition = document.getElementById("videoTransitions").value;
    cs.evalScript('var nomeTransition = "' + nomeTransition + '";')
    cs.evalScript('$.runScript.effectTransition()')
}


