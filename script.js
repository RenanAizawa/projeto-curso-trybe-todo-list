// Declaração de variaveis
const inputFiled = document.getElementById('texto-tarefa');
const buttonTask = document.getElementById('criar-tarefa');
const lisTask = document.getElementById('lista-tarefas');

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