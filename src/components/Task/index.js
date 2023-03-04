import './index.css'

const Task = (props) => {
    const {taskName, workingHours, workingDone} = props

    return (
    <div className="task-container">
        <table lclassName="table-styling" style={{width: '100%'}}>
            <tr><th>Task name</th><th>Total Working Hours</th><th>Total Working Done</th></tr>
            <tr><td>{taskName}</td><td>{workingHours}</td><td>{workingDone}</td></tr>
        </table>
        <br/>
        <h1 className="project-progress-heading">Project progress</h1>
        <progress id="file" value="100" max="100" className="progress-bar"> 50% </progress>
        <div className="task-sub-container">
            <p className="para">Report Work Done</p>
            <input type="text" className="input-styling"></input>
            <button type="button" className="button">Submit</button>
        </div>
    </div>
    )

}

export default Task