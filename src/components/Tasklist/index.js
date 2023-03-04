import Task from '../Task/index'

import './index.css'

const Tasklist = () => (
    <div className="tasklist-container">
        <h1 className="tasklist-heading">
            Tasks:
        </h1>
        <Task taskName="Resume Builder" workingHours={6} workingDone="Completed"/>
        <Task taskName="Functionality" workingHours={7} workingDone="Completed"/>
        <Task taskName="React SPA" workingHours={5} workingDone="Completed" />
    </div>

)

export default Tasklist