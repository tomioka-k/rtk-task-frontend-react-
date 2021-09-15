import React from "react";
import styles from "./TaskItem.module.css";

import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { fetchAsyncDelete, selectTask, editTask } from "./taskSlice";

const TaskItem = ({ task }) => {
  const dispath = useDispatch();
  return (
    <li className={styles.listItem}>
      <span className={styles.cursof} onClick={() => dispath(selectTask(task))}>
        {task.title}
      </span>
      <div>
        <button onClick={() => dispath(fetchAsyncDelete(task.id))} className={styles.taskIcon}>
          <BsTrash />
        </button>
        <button onClick={() => dispath(editTask(task))} className={styles.taskIcon}>
          <FaEdit />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
