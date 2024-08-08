const taskForm = document.querySelector<HTMLFormElement>(".form");

const formInput = document.querySelector<HTMLInputElement>(".form-input");

const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isCompleted: boolean;
};

const addTask = (task: Task): void => {
  tasks.push(task);
  console.log(tasks);
};

const renderTask = (task: Task): void => {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;

  //   checkbox
  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = task.isCompleted;

  //   Toggle checkbox
  taskCheckbox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });
  taskElement.appendChild(taskCheckbox);
  taskListElement?.appendChild(taskElement);
};

const updateStorage = (): void => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
const loadTasks = (): Task[] => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

const tasks: Task[] = loadTasks();

tasks.forEach(renderTask);

const createTask = (e: SubmitEvent) => {
  e.preventDefault();
  const taskDescription = formInput?.value;

  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };
    // add task to list
    addTask(task);
    // render tasks
    renderTask(task);
    // update local storage
    updateStorage();
    formInput.value = "";
    return;
  }

  alert("Please enter a task description");
};

taskForm?.addEventListener("submit", createTask);
