import SideBar from '../Bars/SideBar';
import './MonumentHome.css';



function MonumentHome(){
    return(
        <div>
            <div className='container-fluid'>
                <div classname='row monument-main-row'>
                    <div classname='col-3'><SideBar /></div>
                    <div className='col-9'>
                        <div className='row justify-content-center heading-row'>Monuments</div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default MonumentHome;