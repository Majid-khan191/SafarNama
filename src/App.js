
import './App.css';
import Header from './Bars/Header';
import Home from './Bars/Home';
import { Routes, Route } from "react-router-dom";
import SideBar from './Bars/SideBar';
import TajMahal from './Monuments/TajMahal';
import IndiaGate from './Monuments/IndiaGate';
import RedFort from './Monuments/RedFort';
import HumayunTomb from './Monuments/HumayunTomb';
import CharMinar from './Monuments/CharMinar';
import QutubMinar from './Monuments/QutubMinar';
import GatewayOfIndia from './Monuments/GatewayOfIndia';
import HawaMahal from './Monuments/HawaMahal';
import Login from './Forms/Login';
import Register from './Forms/Register';
import MonumentHome from './Monuments/MonumentHome';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



const App = () => {
  return (
    <div className='d1'>

      <Header /><br /><br />
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="MonumentHome" element={<MonumentHome />} />

      </Routes>

      <Routes>
        <Route path="TajMahal" element={<TajMahal />} />
        <Route path="IndiaGate" element={<IndiaGate />} />
        <Route path="RedFort" element={<RedFort />} />
        <Route path="HumayunTomb" element={<HumayunTomb />} />
        <Route path="CharMinar" element={<CharMinar />} />
        <Route path="QutubMinar" element={<QutubMinar />} />
        <Route path="GatewayOfIndia" element={<GatewayOfIndia />} />
        <Route path="HawaMahal" element={<HawaMahal />} />

        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />



      </Routes>

    </div>
  );
}

export default App;