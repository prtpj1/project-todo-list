window.onload = function () {
  //DOM Selection

  let inputField = document.querySelector('#texto-tarefa');
  let btnInput = document.querySelector('#criar-tarefa');
  let taskList = document.getElementById('lista-tarefas');
  let task = document.getElementsByClassName('task');
  let btnClear = document.querySelector('#apaga-tudo');
  let btnClearCompleted = document.querySelector('#remover-finalizados');

  //Event Listeners
  btnInput.addEventListener('click', newTask);
  btnClear.addEventListener('click', clearAll);
  btnClearCompleted.addEventListener('click', clearCompleted);
  inputField.addEventListener('keyup', newTaskKeyUp);
  taskList.addEventListener('click', taskSelect);
  taskList.addEventListener('dblclick', taskComplete);

  //Functions
  function newTask() {
    if (inputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = inputField.value;
      newLi.className = 'task';

      taskList.appendChild(newLi);
      inputField.value = '';
    } else {
      alert('Você não digitou nenhuma tarefa!');
    }
  }
  function newTaskKeyUp(event) {
    if (event.key === 'Enter' && inputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = inputField.value;
      newLi.className = 'task';

      taskList.appendChild(newLi);
      inputField.value = '';
    }
  }
  function taskSelect(event) {
    for (i = 0; i < task.length; i += 1) {
      task[i].style.backgroundColor = '';
    }

    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
  function taskComplete(event) {
    let item = event.target;

    if (item.classList[0] === 'task') {
      item.classList.toggle('completed');
    }
  }
  function clearAll() {
    taskList.innerHTML = '';
  }

  function clearCompleted() {
    for (let i = task.length - 1; i >= 0; i -= 1) {
      if (task[i].className === 'task completed') {
        task[i].remove();
      }
    }
  }
};
