import { useState } from "react"
import Task from './Task'


const tasksApi = [
    {
        id: 1,
        text: 'Learn PriotyQue',
        day: '15th 11 2021',
        reminder: false
    },
    {
        id: 2,
        text: 'Learn TreeSet',
        day: '16th 11 2021',
        reminder: false
    },
    {
        id: 3,
        text: 'Learn Ansible',
        day: '19th 11 2021',
        reminder: false
    }
]



const Tasks =()=>{
    const [tasks, setTasks] = useState(tasksApi)
    const  deleteTask = (taskId)=>{
        setTasks(tasks.filter((task)=>task.id !== taskId))
        console.log(taskId)
    }
    return (
       <div>
           {
               tasks.map((task)=>(
                   <Task key={task.id} task={task} deleteTask = {deleteTask} />
               ))
           }
       </div>
    )

}
export default Tasks