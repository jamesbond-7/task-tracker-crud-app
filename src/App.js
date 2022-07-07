import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Container } from "react-bootstrap";
import { TaskList } from "./components/TaskList/TaskList";
import { Header } from "./components/Header/Header.component";
import { TaskForm } from "./components/TaskForm/TaskForm.component";
import { DeleteInfo } from "./components/DeleteInfo/DeleteInfo.component";
import { TaskStat } from "./components/TaskStat/TaskStat.component";
import { NoTask } from "./components/No Task/NoTask.component";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalDeleteShow, setModalDeleteShow] = useState(false);
  const [editTask, setEditTask] = useState({});
  const [deleteToTask, setDeleteToTask] = useState("");

  const add = (task) => {
    setTasks([task, ...tasks]);
    localStorage.setItem("tasks", JSON.stringify([task, ...tasks]));
    toast.success("Hurray, Task added!!", {
      theme: "dark",
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const update = (task) => {
    const remainTasks = tasks.filter((t) => t.id !== task.id);
    setTasks([task, ...remainTasks]);
    localStorage.setItem("tasks", JSON.stringify([task, ...remainTasks]));
    toast.warn("Hurray, Task updated!!", {
      theme: "dark",
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const findTask = (id) => tasks.filter((task) => task.id === id);

  const deleteTask = (id) => {
    const tasksAfterDelete = tasks.filter((task) => task.id !== id);
    setTasks(tasksAfterDelete);
    localStorage.setItem("tasks", JSON.stringify(tasksAfterDelete));
    toast.error("Hurray, Task deleted!!", {
      theme: "dark",
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    const getTasks = JSON.parse(localStorage.getItem("tasks"));
    getTasks && setTasks(getTasks);
  }, []);

  return (
    <Container className="wrap-container">
      <ToastContainer />
      <Header showModal={setModalShow} anyTask={setEditTask} />
      <TaskStat tasks={tasks} />
      {tasks.length > 0 ? (
        <TaskList
          tasks={tasks}
          onDelete={findTask}
          onEdit={findTask}
          showModal={setModalShow}
          showDeleteModal={setModalDeleteShow}
          newTask={(task) => setEditTask(task)}
          removeTask={(task) => setDeleteToTask(task)}
        />
      ) : (
        <NoTask />
      )}
      <TaskForm
        show={modalShow}
        onHide={setModalShow}
        onSave={(task) => add(task)}
        onUpdate={(task) => update(task)}
        task={editTask}
      />
      <DeleteInfo
        show={modalDeleteShow}
        onHide={setModalDeleteShow}
        delete={deleteTask}
        deleteTaskDetails={deleteToTask}
      />
    </Container>
  );
};

export default App;
