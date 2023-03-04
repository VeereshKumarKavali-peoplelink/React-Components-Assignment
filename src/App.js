import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar/index';
import Home from './components/Home/index'
import Employee from './components/Employee/index';


import './App.css';

const App = () => (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/employee" element={<Employee/>}/>

    </Routes>
   </BrowserRouter>
)





export default App;
