class Task {
constructor(owner, description){
  this.owner = owner;
  this.description = description;
  this.completed = true;
  this.date = `${new Date().getFullYear()} / ${new Date().getMonth()+1} / ${new Date().getDate()}`;
  }
}

const todo = new Task("Denerius", "Go to Class");
console.log(todo.owner);
