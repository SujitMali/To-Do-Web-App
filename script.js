function addTask() {
    const taskTitleInput = document.getElementById('taskTitle');
    const taskDescriptionInput = document.getElementById('taskDescription');
    const taskDueDateInput = document.getElementById('taskDueDate');
    const taskTitle = taskTitleInput.value.trim();
    const taskDescription = taskDescriptionInput.value.trim();
    const taskDueDate = taskDueDateInput.value;
  
    if (taskTitle === '' || taskDescription === '') {
      alert('Please enter both task title and description.');
      return;
    }
  
    const taskItem = createTaskElement(taskTitle, taskDescription, taskDueDate);
    document.getElementById('taskTable').appendChild(taskItem);
    taskTitleInput.value = '';
    taskDescriptionInput.value = '';
    taskDueDateInput.value = '';
  }
  
  function createTaskElement(taskTitle, taskDescription, taskDueDate) {
    const currentDate = new Date().toLocaleString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${taskTitle}</td>
      <td>${taskDescription}</td>
      <td><input type="checkbox" onchange="toggleTaskCompletion(this)"></td>
      <td>${currentDate}</td>
      <td><input type="date" value="${taskDueDate}" onchange="updateDueDate(this)"></td>
      <td><button onclick="removeTask(this)">Delete</button></td>
    `;
  
    return tableRow;
  }
  
  function toggleTaskCompletion(checkbox) {
    const taskRow = checkbox.parentElement.parentElement;
    if (checkbox.checked) {
      taskRow.classList.add('completed-task'); // Add the completed-task class to the whole row
    } else {
      taskRow.classList.remove('completed-task'); // Remove the completed-task class to remove strikethrough
    }
  }
  
  function removeTask(button) {
    const taskRow = button.parentElement.parentElement;
    taskRow.remove();
  }
  
  function updateDueDate(input) {
    const taskRow = input.parentElement.parentElement;
    const taskDueDate = input.value;
    taskRow.cells[4].innerHTML = taskDueDate;
  }
  