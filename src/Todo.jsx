import React, { useState } from 'react'

const Todo = () => {
    const [task, settask] = useState("")
    const [alltask, setalltask] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        let obj = {
            uid: Date.now(),
            task,
            status: "Pending"
        }
        let newrecord = [...alltask, obj]
        setalltask(newrecord)
        alert("Task Add")
        settask("")
    }

    const completetodo = (id) => {
        let updatestatus = alltask.map((com) => {
            if (com.uid === id) {
                com.status = "Completed"
            }
            return com
        })
        setalltask(updatestatus)
        alert("Status successfully changed")
    }

    const deletetask = (id) => {
        setalltask(alltask.filter(item => item.uid != id))
        alert("delete task")
    }

    return (
        <div align="center" className='container'>
            <h2 className='pb-4 mt-5 text-success'>Simple Todo List</h2>
            <form onSubmit={handleSubmit}>
                Name : <input type="text" onChange={(e) => settask(e.target.value)} value={task} />
                <input type="submit" className='m-4 d-block bg-primary border-0 py-1 px-4 rounded-pill fs-5'/>
            </form>
            <br></br>
            <table class="table table-striped-columns table-primary">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Task Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Task</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alltask.map((t) => {
                            const { uid, task, status } = t;
                            return (
                                <tr key={uid}>
                                    <th scope="row">{uid}</th>
                                    <td>{task}</td>
                                    <td>{status}</td>
                                    <td>
                                        <button disabled={status == "completed"} onClick={() => completetodo(uid)} className='me-3 border-0 rounded-pill bg-success'>Complete</button>
                                        <button onClick={() => deletetask(uid)} className='me-3 border-0 rounded-pill bg-danger px-3'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

        </div>
    )
}

export default Todo