//array of todos
const todoList = [
    {
        id: "Date.now()",
        content: "Do Dishes",
        completed: "false",
    },
    {
        id: "Date.now()",
        content: "Grocery Shopping",
        completed: "false",
    },
    {
        id: "Date.now()",
        content: "Fold Laundry",
        completed: "false",
    },
    {
        id: "Date.now()",
        content: "Sweep Floors",
        completed: "false",
    },
    {
        id: "Date.now()",
        content: "Make the bed",
        completed: "false",
    },
];



export default class Todos {
    constructor(elementId) {
        this.parent = document.getElementById(elementId);
        this.addTodoItem = this.addTodo();

    }
    
     getAllTodos() {
        return todoList;
    }
    
    
    showList() {
        const listElement = document.getElementById("todoListElement");
        listElement.innerHMTL = "";
        this.renderList(todoList, listElement);
        this.addRemoveListener(listElement);
        this.addCheckedListener(listElement);
        this.allTasks(listElement);
        this.completedTasks(listElement);
        this.activeTasks(listElement);
    }
    
    renderList(todos, parent) {
        todos.forEach(todo => {
        parent.appendChild(showOneTodo(todo));
        });
    }    

    
    //ADD TODOS
    addTodo() {
        const listElement = document.getElementById("todoListElement");
       const form = document.getElementById("addTodoForm");
       form.addEventListener('submit', event => {
            event.preventDefault();
            const input = document.getElementById("addInput");

            const content = input.value;
           
            this.renderTodo(content);
           this.addRemoveListener(listElement);
           this.addCheckedListener(listElement);
           this.allTasks(listElement);
           this.completedTasks(listElement);
           this.activeTasks(listElement);
       });
    }
    
    renderTodo(content) {
        const todoI = {
            id: "Date.now()",
            content,
            completed: false,
        };
        todoList.push(todoI);
        
        const listElement = document.getElementById("todoListElement");
        const item = document.createElement('li');
        listElement.appendChild(item);
        item.innerHTML = ` <div id="todoItem">
                <input id="checkbox" type="checkbox" value:"false">
                <p>${todoI.content}</p>
                <button id="removeButton">Remove</button>
            </div> `
        
        this.allTasks(listElement);
        this.completedTasks(listElement);
        this.activeTasks(listElement);
        return item;
    }
    
    //add listeners
    //REMOVE TODOS
  addRemoveListener(item) {
      const todoItem = item.children;
      const buttonR = document.querySelectorAll("button");
      let i = 0;
      for (i = 0; i < todoList.length; i++) {
          const tItem = todoItem[i];
          buttonR[i].addEventListener('click', event => {
              tItem.remove();
        });
      }
  }
    
   //COMPLETED TODOS 
  addCheckedListener(item) {
      const todoItem = item.children;
      const checkbox = document.querySelectorAll("input");
      const divEl = document.querySelectorAll("div");
      let i = 0;
      for (i = 0; i < todoList.length; i++) {
          const tItem = todoItem[i];
          const divI = divEl[i];
          const checkboxI = checkbox[i];
          checkboxI.addEventListener('click', event => {
              divI.style.backgroundColor = "black";
              divI.style.color = "white";
              tItem.completed = "true";
        });   
          tItem.completed = "false";
      } 
      
  }
    
    //FILTER TODOS
    allTasks(todo) {
        const allTasksButton = document.getElementById("allTasksButton");
        const todoItem = todo.children;
        
        allTasksButton.addEventListener('click', event => {
                this.allTasksFilter(todoItem);
        });
    }
    
    allTasksFilter(item) {
        let i = 0;
        for (i = 0; i < todoList.length; i++) {
            const tItem = item[i];
            if (tItem.completed == "false") {
                tItem.style.display = "block";
            }   
            else if (tItem.completed == "true") {
                tItem.style.display = "block";
            }   
        }
    }
    
    completedTasks(todo) {
        const completedTasksButton = document.getElementById("completedTasksButton");
        const todoItem = todo.children;
        
        completedTasksButton.addEventListener('click', event => {
                this.completedTaskFilter(todoItem);
        });
        
    }
    
    completedTaskFilter(item) {
        let i = 0;
        for (i = 0; i < todoList.length; i++) {
            const tItem = item[i];
            if (tItem.completed == "false") {
                tItem.style.display = "none";
            }   
            else if (tItem.completed == "true") {
                tItem.style.display = "block";
            }   
        }
    }
    
    activeTasks(todo) {
        const activeTasksButton = document.getElementById("activeTasksButton");
        const todoItem = todo.children;
        
        activeTasksButton.addEventListener('click', event => {
                this.activeTaskFilter(todoItem);
        });
        
    }
    
    activeTaskFilter(item) {
        let i = 0;
        for (i = 0; i < todoList.length; i++) {
            const tItem = item[i];
            if (tItem.completed == "false") {
                tItem.style.display = "block";
            }   
            else if (tItem.completed == "true") {
                tItem.style.display = "none";
            }   
        }
    }
    
    
}

function showOneTodo(todo) {
        const item = document.createElement('li');
        item.innerHTML = ` <div id="todoItem">
                <input id="checkbox" type="checkbox" value:"false">
                <p>${todo.content}</p>
                <button id="removeButton">Remove</button>
            </div> `
        
        
        return item;
    }
    
