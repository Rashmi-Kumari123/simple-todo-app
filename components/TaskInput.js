"use client"
import React, { useState } from 'react'
import styles from '@/components/TaskInput.module.css'
import TaskItems from './TaskItems'
import { v4 as uuidv4 } from 'uuid';

const TaskInput = () => {
  const [task, setTask] = useState([]); // array of tasks
  const [title, setTitle] = useState(""); // individual input field
  const [desc, setDesc] = useState("");  // individual input field

  const changeHandler = (e) => {
    setTitle(e.target.value);
    e.preventDefault();
  }

  const changeHandlerdesc = (e) => {
    setDesc(e.target.value);
    e.preventDefault();
  }

  const addhandlerTask = () => {
    if (title.trim() !== '' && desc.trim() !== '') {
      setTask([...task, { id: uuidv4(), title, desc ,isDone:false}]);
      setTitle('');
      setDesc('');
    }
  }

  const deleteHandler = (idToRemove) => {
    setTask(prev => prev.filter(task=> task.id !== idToRemove));
  }
 
  // object ya array ke case me key ki value change krne pr koi actual change nhi hota hai kuki address uska same hi rhta hai isliye copy create krte hai
  const markHandler = (idToMark) => {
    setTask((prevTask)=>
          prevTask.map((task)=>{
                if(task.id===idToMark){
               return {
                ...task,
                isDone:true,
               }
                }
                else {
                  return task;
                }
          })
        )
  }
  const markAllHandler = () => {
    setTask((prevTask)=>
          prevTask.map((task)=>{
               return {
                ...task,
                isDone:true,
               }
          })
        )
  }


  return (
    <>
      <div className={styles.container}>
        <div className={styles.add}>
          <input className={styles.input1} onChange={changeHandler} value={title} placeholder='Title of Task' />
          <input className={styles.input1} onChange={changeHandlerdesc} value={desc} placeholder='Write description of task' />
          <button className={styles.button} onClick={addhandlerTask}>Add task</button>
        </div>
      </div>
      {task.length === 0 ? (
        <h2 style={{ textAlign: 'center', color: 'black' }}>No Task Available</h2>
      ) : (
        <TaskItems val={task} onRemove={deleteHandler} onMark={markHandler} onMarkAll={markAllHandler} />
      )}
    </>
  )
}

export default TaskInput


