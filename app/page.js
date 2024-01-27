"use client"
import React, { useState } from "react";

const page = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [mainTask, setMainTask] = useState([]);
    const submitHandler = (e) => {
        e.preventDefault()
        setMainTask([...mainTask, { title, desc }]);
        setTitle("");
        setDesc("");
    }

    const deleteHandler = (ind) => {
        let copyTask = [...mainTask];
        copyTask.splice(ind, 1);
        setMainTask(copyTask);
    }
    const editHandler = (ind) => {
        value.title(title);
        value.desc(desc);
    }

    let renderTask = <h2>No Task Available</h2>

    if(mainTask.length>0){
        renderTask = mainTask.map((task, ind) => {
            return (
                <li key={ind} className="flex items-center justify-between mb-8">
                    <div className="flex items-center justify-between w-2/3">
                        <h5 className="text-2xl font-semibold">{task.title}</h5>
                        <h6 className="text-lg font-medium">{task.desc}</h6>
                    </div>
                    <button onClick={() => {
                        deleteHandler(ind)
                    }}
                    className="bg-red-400 text-white px-4 py-2 rounded font-bold mx-0">
                        Delete
                    </button>
                    <button onClick={() => {
                        editHandler(ind)
                    }}
                    className="bg-red-400 text-white px-4 py-2 rounded font-bold">
                        Edit
                    </button>
                </li>
            );
        })
    }

    return (
        <>
            <h1 className="bg-black text-white p-5 text-2xl font-bold text-center">My Todo List</h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Enter Title Here..." value={title} className="text-2xl border-zinc-800 border-2 m-8 px-4 py-2" onChange={(e) => {
                    setTitle(e.target.value);
                }} />
                <input type="text" placeholder="Enter Description Here..." className="text-2xl border-zinc-800 border-2 m-8 px-4 py-2" value={desc} onChange={(e) => {
                    setDesc(e.target.value);
                }} />
                <button className="bg-black text-white m-5 px-4 py-3 text-2xl text-bold rounded">Add Task</button>
            </form>
            <hr />
            <div className="p-8 bg-slate-200">
                {renderTask}
            </div>
        </>
    )
}
export default page