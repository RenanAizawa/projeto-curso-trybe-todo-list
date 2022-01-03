// Declaração de variaveis
const inputFiled = document.getElementById('texto-tarefa');
const buttonTask = document.getElementById('criar-tarefa');
const lisTask = document.getElementById('lista-tarefas');
const apagarTudoButton = document.getElementById('apaga-tudo');
const ApagarFinalizadosButton = document.getElementById('remover-finalizados');
// Chamada de funções
buttonTask.addEventListener('click', function(){
    const itemList = document.createElement('li');
    itemList.innerText = inputFiled.value;
    lisTask.appendChild(itemList)
    inputFiled.value = "";
    itemList.addEventListener('click', function(event){
        let itensLi = document.querySelectorAll('li');
        for (var i = 0; i < itensLi.length; i++) {
            var selectLi = document.querySelectorAll('li')[i];
            selectLi.classList.remove('selected-item')
        }
        var alvo = event.target;
        alvo.classList.add('selected-item')
    })
    itemList.addEventListener('dblclick', function (event) {
        var alvo = event.target;
        if (alvo.classList.contains('completed')) {
            alvo.classList.remove('completed')
        } else {
            alvo.classList.add('completed')
        } // Agracedimento à : https://github.com/lalanametala pela dica do contains
    })
})
apagarTudoButton.addEventListener('click', function () {
    var liElements = document.querySelectorAll('li');
    for (var i = 0; i < liElements.length; i++) {
        var liDaVez = document.querySelectorAll('li')[i];
        liDaVez.removeChild(liDaVez.childNodes[0])
    }
    var textLo = document.getElementById('lista-tarefas');
    // textLo.innerText = "";
})
ApagarFinalizadosButton.addEventListener('click', function () {
    var completados = document.querySelectorAll('.completed')
    for (var i = 0; i < completados.length; i++) {
        var deleteCompletados = document.querySelectorAll('.completed')[i];
        deleteCompletados.removeChild(deleteCompletados)
    }
})