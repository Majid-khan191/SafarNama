import { Link } from 'react-router-dom';

import './SideBar.css';

function SideBar() {
    return (
        <div className='main-div'>
            <div className='monumentname'>Monuments</div>

            <ul>
                <li className='monumentlist'><Link to="/TajMahal" className='monumentitem'>Taj Mahal</Link></li>

                <li className='monumentlist'><Link to="/IndiaGate" className='monumentitem'>India Gate</Link></li>

                <li className='monumentlist'><Link to="/RedFort" className='monumentitem'>Red Fort</Link></li>

                <li className='monumentlist'><Link to="/HumayunTomb" className='monumentitem'>Humayun Tomb</Link></li>

                <li className='monumentlist'><Link to="/CharMinar" className='monumentitem'>Char Minar</Link></li>

                <li className='monumentlist'><Link to="/QutubMinar" className='monumentitem'>Qutub Minar</Link></li>

                <li className='monumentlist'><Link to="/GatewayOfIndia" className='monumentitem'>Gateway of India</Link></li>

                <li className='monumentlist'><Link to="/HawaMahal" className='monumentitem'>Hawa Mahal</Link></li>

            </ul>

            

        </div>
        



    );


}

export default SideBar;