window.onload = function () {
  let inputField = document.querySelector('#texto-tarefa');
  let inputBtn = document.querySelector('#criar-tarefa');
  let taskList = document.querySelector('#lista-tarefas');

  function newTask() {
    inputBtn.addEventListener('click', () => {
      if (inputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = inputField.value;
        newLi.className = 'task';

        taskList.appendChild(newLi);
        inputField.value = '';
      } else {
        alert('Você não digitou nenhuma tarefa!');
      }
    });

    inputField.addEventListener('keyup', (event) => {
      if (event.key === 'Enter' && inputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = inputField.value;
        newLi.className = 'task';

        taskList.appendChild(newLi);
        inputField.value = '';
      }
    });
  }

  newTask();
  function taskSelect() {
    taskList.addEventListener('click', function (event) {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
  taskSelect();
};
