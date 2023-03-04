import '../Tasklist/index'
import Tasklist from '../Tasklist/index'

import './index.css'

const Project = () => (
    <div className="project-container">
        <div>
        <h1 className="project-heading">Project Name: <span className="project-name">React Components Assignment</span></h1>
        <p className="project-progress">Project Progress</p>
        <progress id="file" value="50" max="100" className="progress-bar"> 50% </progress>
        <p className="project-description">React Js is an open source, frontend JavaScript library and is mainly used to build user interfaces . A component is a js function that returns JSX element and component name should start with capital letter. Components are of two types Functional componnt and Class component </p>
        </div>
        <Tasklist/>
    </div>

)

export default Project