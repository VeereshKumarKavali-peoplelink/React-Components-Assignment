import Sidebar from '../Sidebar/index'

import ProjectsList from '../ProjectsList/index'

import './index.css'

const Employee = () => (
    <div class="employee-bg-container">
      {/* <Navbar/> */}
        <div className="sidebar-projectsList-container">
            <Sidebar/>
            <ProjectsList/>
        </div>
    </div>
)

export default Employee