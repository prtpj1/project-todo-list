function newTask() {
    let inputField = document.querySelector('#texto-tarefa');
    let inputBtn = document.querySelector('#criar-tarefa');
    let taskList = document.querySelector('#lista-tarefas');

    inputBtn.addEventListener('click', () => {
        if (inputField.value.length > 0) {
            let newLi = document.createElement('li');
            newLi.innerText = inputField.value;

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

            taskList.appendChild(newLi);
            inputField.value = '';
        }
    });
};

newTask();