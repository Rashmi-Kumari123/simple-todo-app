"use client"
import React from 'react'
import styles from '@/components/TaskItems.module.css'

const TaskItems = (props) => {

  return (
    <div>
        <h1 className={styles.h}>Tasks</h1>
        <button onClick={props.onMarkAll} className={`${styles.btn} ${styles.btnmark}`} >Mark All Task Done</button>
        <div>
           { props.val.map(function({id,title,desc,isDone}){
                return <div key={id} className={styles.task}>
                    <p style={{textDecoration: isDone?'line-through':'none'}} className={styles.p} >{title}</p>
                    <p style={{textDecoration: isDone?'line-through':'none'}} className={styles.p}>{desc}</p>
                   <div className={styles.btnclass}>
                    <button className={styles.btn} onClick={() => props.onRemove(id)}>Remove task</button>
                   <button className={styles.btn} onClick={()=>props.onMark(id)}>Mark as done</button>
                </div>
                </div>
            })}
        </div>
        
    </div>
  )
}
export default TaskItems

