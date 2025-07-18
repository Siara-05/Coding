<<<<<<< HEAD



const addBtn = document.querySelector("#add-btn");
      const newTaskInput = document.querySelector("#wrapper input");
      const tasksContainer = document.querySelector("#tasks");
      const error = document.getElementById("error");
      const countValue = document.querySelector(".count-value");
      let taskCount = 0;
      const displayCount = (taskCount) => {
        countValue.innerText = taskCount;
      };
      const addTask = () => {
        const taskName = newTaskInput.value.trim();
        error.style.display = "none";

        if (!taskName) {
          setTimeout(() => {
            error.style.display = "block";
          }, 200);
          return;
        }

        const task = `
<div class="task">
<input type="checkbox" class="task-check">
<span class="taskname">${taskName}</span>
<button class="edit"><i class="fas fa-edit"></i></button>
<button class="delete"><i class="far fa-trash-alt"></i></button>
</div>
`;

        tasksContainer.insertAdjacentHTML("beforeend", task);

        const deleteButtons = document.querySelectorAll(".delete");
        deleteButtons.forEach((button) => {
          button.onclick = () => {
            button.parentNode.remove();
            taskCount -= 1;
            displayCount(taskCount);
          };
        });
        const editButtons = document.querySelectorAll(".edit");
        editButtons.forEach((editBtn) => {
          editBtn.onclick = (e) => {
            let targetElement = e.target;
            if (!(e.target.className == "edit")) {
              targetElement = e.target.parentElement;
            }
            newTaskInput.value =
              targetElement.previousElementSibling?.innerText;
            targetElement.parentNode.remove();
            taskCount -= 1;
            displayCount(taskCount);
          };
        });
        const tasksCheck = document.querySelectorAll(".task-check");
        tasksCheck.forEach((checkBox) => {
          checkBox.onchange = () => {
            checkBox.nextElementSibling.classList.toggle("completed");
            if (checkBox.checked) {
              taskCount -= 1;
              console.log("checked");
            } else {
              taskCount += 1;
            }
            displayCount(taskCount);
          };
        });
        taskCount += 1;
        displayCount(taskCount);
        newTaskInput.value = "";
      };

      addBtn.addEventListener("click", addTask);
      window.onload = () => {
        taskCount = 0;
        displayCount(taskCount);
        newTaskInput.value = "";
=======



const addBtn = document.querySelector("#add-btn");
      const newTaskInput = document.querySelector("#wrapper input");
      const tasksContainer = document.querySelector("#tasks");
      const error = document.getElementById("error");
      const countValue = document.querySelector(".count-value");
      let taskCount = 0;
      const displayCount = (taskCount) => {
        countValue.innerText = taskCount;
      };
      const addTask = () => {
        const taskName = newTaskInput.value.trim();
        error.style.display = "none";

        if (!taskName) {
          setTimeout(() => {
            error.style.display = "block";
          }, 200);
          return;
        }

        const task = `
<div class="task">
<input type="checkbox" class="task-check">
<span class="taskname">${taskName}</span>
<button class="edit"><i class="fas fa-edit"></i></button>
<button class="delete"><i class="far fa-trash-alt"></i></button>
</div>
`;

        tasksContainer.insertAdjacentHTML("beforeend", task);

        const deleteButtons = document.querySelectorAll(".delete");
        deleteButtons.forEach((button) => {
          button.onclick = () => {
            button.parentNode.remove();
            taskCount -= 1;
            displayCount(taskCount);
          };
        });
        const editButtons = document.querySelectorAll(".edit");
        editButtons.forEach((editBtn) => {
          editBtn.onclick = (e) => {
            let targetElement = e.target;
            if (!(e.target.className == "edit")) {
              targetElement = e.target.parentElement;
            }
            newTaskInput.value =
              targetElement.previousElementSibling?.innerText;
            targetElement.parentNode.remove();
            taskCount -= 1;
            displayCount(taskCount);
          };
        });
        const tasksCheck = document.querySelectorAll(".task-check");
        tasksCheck.forEach((checkBox) => {
          checkBox.onchange = () => {
            checkBox.nextElementSibling.classList.toggle("completed");
            if (checkBox.checked) {
              taskCount -= 1;
              console.log("checked");
            } else {
              taskCount += 1;
            }
            displayCount(taskCount);
          };
        });
        taskCount += 1;
        displayCount(taskCount);
        newTaskInput.value = "";
      };

      addBtn.addEventListener("click", addTask);
      window.onload = () => {
        taskCount = 0;
        displayCount(taskCount);
        newTaskInput.value = "";
>>>>>>> 9695eed7db19cacf51e88bbc0c939c4a9ff3d82e
      };