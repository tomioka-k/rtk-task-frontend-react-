import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TaskList.module.css";
import TaskItem from "./TaskItem";

import { fetchAsyncProf } from "../login/loginSlice";
import { selectTasks, fetchAsyncGet } from "../task/taskSlice";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTaskProf = async () => {
      await dispatch(fetchAsyncGet());
      await dispatch(fetchAsyncProf());
    };
    fetchTaskProf();
  }, [dispatch]);

  return (
    <div>
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
