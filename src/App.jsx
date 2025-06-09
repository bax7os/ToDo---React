import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  // State - atualiza a tela/ componente
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }
  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function onAddTasksSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // chamar api para pegar os dados

  // useEffect(() => {
  //   async function fetchTasks() {
  //     //chamar API
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10"
  //     );
  //     // pegar o que ela retorna
  //     const data = await response.json();
  //     console.log(data);

  //     //armazenar esses dados
  //     setTasks(data);
  //   }
  //   fetchTasks();
  // }, []);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Manager Tasks</Title>

        <AddTask onAddTasksSubmit={onAddTasksSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
