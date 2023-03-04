import {FcBusinesswoman} from 'react-icons/fc'

import {FcBusinessman} from 'react-icons/fc'

import './index.css'

const Coworkers = () => (
    <div className="coworkers-container">
        <h1 className="coworker-heading">
            Coworkers
        </h1>
        <ul className="coworkers-unordered-list">
            <li className="coworker-item"><FcBusinesswoman className='icon'/>Farzana SK</li>
            <li className="coworker-item"><FcBusinessman className='icon'/>Mallikarjuna</li>
            <li className="coworker-item"><FcBusinessman className='icon'/>Srinath</li>
            <li className="coworker-item"><FcBusinessman className='icon'/>Asif</li>
             
        </ul>
        

    </div>

)


export default Coworkers