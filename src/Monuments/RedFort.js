import './RedFort.css';
import SideBar from '../Bars/SideBar';



function RedFort() {
    return (
        <div>
            <SideBar />
            <div className='container-fluid'>

                <div className='row justify-content-center RedFort-main-row'>
                    <div className='col-8 RedFort-sub-row'>
                        <div className='row RedFort-heading'><h1>Red Fort</h1></div>
                        <div className='row RedFort-image'></div>
                        <div className='row RedFort-para'>
                            <div className='col-8 RedFort-main-para'> The Red Fort or Lal Qila (Hindustani: [laːlqiːlaː]) is a historic fort in Old Delhi, Delhi in India that served as the main residence of the Mughal Emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1638, when he decided to shift his capital from Agra to Delhi. Originally red and white, its design is credited to architect Ustad Ahmad Lahori, who also constructed the Taj Mahal. The fort represents the peak in Mughal architecture under Shah Jahan and combines Persianate palace architecture with Indian traditions.

                                The fort was plundered of its artwork and jewels during Nader Shah's invasion of the Mughal Empire in 1739. Most of the fort's marble structures were subsequently demolished by the British following the Indian Rebellion of 1857. The fort's defensive walls were largely undamaged, and the fortress was subsequently used as a garrison.</div>
                            <div className='col-4 RedFort-sub-para'><h4>Online Bookings open !</h4>
                                <h6>Ticket Price - 135/Person</h6>
                                <button className='btn btn-success button1'>Book Now</button></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );

}



export default RedFort;