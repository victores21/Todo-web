class Product {
  constructor(name) {
    this.name = name;
  }
}

class UI {
  addTask(product) {
    const taskList = document.getElementById("task-list");
    const element = document.createElement("div");
    element.innerHTML = `
     <div class="card animated zoomIn text-center mt-4 mb-4">
        <div class="card-body">
            ${product.name}
            <a class="btn button-delete ml-3 ">Done</a>
        </div>
     </div>
    `;
    taskList.appendChild(element);
  }

  error() {
    const error = document.getElementById("error");
    const element1 = document.createElement("div");
    const errorText = document.getElementById("text-error");

    element1.innerHTML = `
    <p id="text-error" class=" text-danger text-center">Debes ingresar al menos una tarea</p>
    `;

    if (errorText) {
    } else {
      error.appendChild(element1);
    }
  }
  clearError() {
    const errorText = document.getElementById("text-error");
    if (errorText) {
      errorText.remove();
    } else {
    }
  }

  resetForm() {
    const form = document.getElementById("task-form").reset();
  }

  deleteTask(element) {
    if (element.innerText === "Done") {
      const removeParent = element.parentNode;
      const removeParentParent = removeParent.parentNode;
      removeParentParent.remove();
      removeParent.remove();
    }
  }
}

//DOM EVENTS
document.getElementById("task-form").addEventListener("submit", function(e) {
  const name = document.getElementById("name").value;
  const product = new Product(name); //objeto product
  const ui = new UI(); //objeto UI

  if (name == "") {
    ui.error();
    e.preventDefault();
  }

  if (!name == "") {
    ui.addTask(product); //product es el objeto name price year
    ui.resetForm();
    ui.clearError();
    e.preventDefault();
  }
});

document.getElementById("body").addEventListener("click", function(e) {
  const ui = new UI();
  console.log(ui.deleteTask(e.target));
});
