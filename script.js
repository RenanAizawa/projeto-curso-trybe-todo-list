// Declaração de variaveis
let inputFiled = document.getElementById('texto-tarefa');
let buttonTask = document.getElementById('criar-tarefa');
let lisTask = document.getElementById('lista-tarefas');

// Chamada de funções
buttonTask.addEventListener('click', function(){
    let itemList = document.createElement('li');
    itemList.innerText = inputFiled.value;
    lisTask.appendChild(itemList)
    inputFiled.value = "";
    itemList.addEventListener('click', function(){
        itemList.style.backgroundColor = `rgb(128, 128, 128)`
    })
})