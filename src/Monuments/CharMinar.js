import './CharMinar.css';
import SideBar from '../Bars/SideBar';




function CharMinar() {
    return (
        <div>
            <SideBar />
            <div className='container-fluid'>

                <div className='row justify-content-center main-row'>
                    <div className='col-8 sub-row'>
                        <div className='row heading'><h1>Char Minar</h1></div>
                        <div className='row image'></div>
                        <div className='row para'>
                            <div className='col-8'> The Charminar (lit. 'four minarets') is a mosque and monument located in Hyderabad, Telangana, India. Constructed in 1591, the landmark is a symbol of Hyderabad and officially incorporated in the emblem of Telangana[3] The Charminar's long history includes the existence of a mosque on its top floor for more than 425 years. While both historically and religiously significant, it is also known for its popular and busy local markets surrounding the structure, and has become one of the most frequented tourist attractions in Hyderabad.</div>
                            <div className='col-4'><h4>Online Bookings open !</h4>
                                <h6>Ticket Price - 150/Person</h6>
                                <button className='btn btn-success button1'>Book Now</button></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );

}



export default CharMinar;