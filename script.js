// Area das variaveis globais
let olCount = document.querySelector('lista-container');
const buttomCont = document.querySelector('add-tarefa');
// Funções
function createLi (){
    var addLi = document.createElement('li');
    addLi.innerHTML = 'oi';
    olCount.appendChild(addLi);
    console.log('oi')
}
createLi()