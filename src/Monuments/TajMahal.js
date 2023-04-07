import SideBar from '../Bars/SideBar.js';
import './TajMahal.css';





function TajMahal() {
    return (
        <div>
            <SideBar />
            <div className='container-fluid'>

                <div className='row justify-content-center taj-main-row'>
                    <div className='col-8 taj-sub-row'>
                        <div className='row taj-heading'><h1>Taj Mahal</h1></div>
                        <div className='row taj-image'></div>
                        <div className='row taj-para'>
                            <div className='col-8 taj-main-para'>The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ-/; lit. 'Crown of the Palace')[4][5][6] is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor Shah Jahan (r. 1628–1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.

                                Construction of the mausoleum was essentially completed in 1643, but work continued on other phases of the project for another 10 years. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around ₹32 million, which in 2020 would be approximately ₹70 billion (about US $1 billion). </div>
                            <div className='col-4 taj-sub-para'>
                                <h4>Online Bookings open !</h4>
                                <h6>Ticket Price - 120/Person</h6>
                                <button className='btn btn-success button1'>Book Now</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>




    );
}

export default TajMahal;