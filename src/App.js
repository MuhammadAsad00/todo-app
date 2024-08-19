import "./App.css";
import AddToodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItems from "./Components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Task",
      dueDate: "3/8/2025",
    },
    {
      name: "Task",
      dueDate: "17/10/2025",
    },
    {
      name: "Task",
      dueDate: "20/11/2025",
    },
  ];

  return (
    <div>
      <center className="todo-content">
        <AppName />
        <AddToodo />
        <TodoItems todoItems={todoItems}/>
      </center>
    </div>
  );
}

export default App;
