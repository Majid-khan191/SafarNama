import './QutubMinar.css';
import SideBar from '../Bars/SideBar';




function QutubMinar() {
    return (

        <div>
            <SideBar />
            <div className='container-fluid'>

                <div className='row justify-content-center Qutub-main-row'>
                    <div className='col-8 Qutub-sub-row'>
                        <div className='row Qutub-heading'><h1>Qutub Minar</h1></div>
                        <div className='row Qutub-image'></div>
                        <div className='row Qutub-para'>
                            <div className='col-8 Qutub-main-para'> The Qutb Minar, also spelled Qutub Minar and Qutab Minar, is a minaret and "victory tower" that forms part of the Qutb complex, which lies at the site of Delhi’s oldest fortified city, Lal Kot, founded by the Tomar Rajputs.[3] It is a UNESCO World Heritage Site in the Mehrauli area of South Delhi, India.[4][5] It is one of the most visited tourist spots in the city, mostly built between 1199 and 1220.[6][7][4]

                                It can be compared to the 62-metre all-brick Minaret of Jam in Afghanistan, of c. 1190, which was constructed a decade or so before the probable start of the Delhi tower.[8] The surfaces of both are elaborately decorated with inscriptions and geometric patterns. The Qutb Minar has a shaft that is fluted with "superb stalactite bracketing under the balconies" at the top of each stage.[9][10][11] In general, minarets were slow to be used in India and are often detached from the main mosque where they exist.[</div>
                            <div className='col-4 Qutub-sub-para'><h4>Online Bookings open !</h4>
                                <h6>Ticket Price - 125/Person</h6>
                                <button className='btn btn-success button1'>Book Now</button></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );

}



export default QutubMinar;