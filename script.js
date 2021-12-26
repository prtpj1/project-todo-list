window.onload = function () {
  //DOM Selection

  let inputField = document.querySelector('#texto-tarefa');
  let inputBtn = document.querySelector('#criar-tarefa');
  let taskList = document.querySelector('#lista-tarefas');
  let task = document.getElementsByClassName('task');

  //Event Listeners
  inputBtn.addEventListener('click', newTask);
  inputField.addEventListener('keyup', newTaskKeyUp);
  taskList.addEventListener('click', taskSelect);

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
    for (i=0; i < task.length; i+=1) {
      let taskColor = task[i].style.backgroundColor = '';
    }
    
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
};
