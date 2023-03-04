import '../Coworkers/index'
import Coworkers from '../Coworkers/index'


import './index.css'

const Sidebar = () => (
    <div className="sidebar-container">
        <div className="employee-details-container ">
            <h1 className="employee-name">Veeresh Kumar Kavali</h1>
            <span className="username">veereshppl</span>
            <br/>
            <img src="https://tse1.mm.bing.net/th?id=OIP.57GoEyWvSK7ipmJFtlw1gAAAAA&pid=Api&P=0" alt="employee pic" className="employee-pic" />
        </div>
        <h1 className="manager">Manager: Ravi Ranjan</h1>
        <Coworkers/>
    </div>

)

export default Sidebar