import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/taskSLice/taskSlice";
import "./Task.css";
const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [onUpdate, setOnUpdate] = useState(false);
  const [newTask, setNewTask] = useState(task);
  return (
    <div      className= {task.isDone ? 'done' : 'notdone'} 
    onClick={()=>{ dispatch(editTask({...newTask,isDone:!Task.isDone}))}} >
      {onUpdate ? (
        <>
          <input
            type={"text"}
            defaultValue={task.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <button onClick={() => dispatch(editTask(newTask))}>Confirm </button>
          <button onClick={() => setOnUpdate(false)}>Cancel </button>
        </>
      ) : (
        <h4 id="taskTitle">{task.title}</h4>
      )}

      <div className="btnTask">
        <button onClick={() => setOnUpdate(true)}>Update</button>
        <button onClick={() => dispatch(deleteTask(task))}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
