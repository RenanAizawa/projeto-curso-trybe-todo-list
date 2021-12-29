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
    itemList.addEventListener('click', function(){
        itemList.style.backgroundColor = `rgb(128, 128, 128)`
    })
})