import './HawaMahal.css';
import SideBar from '../Bars/SideBar';



function HawaMahal() {
    return (

        <div>
            <SideBar />
            <div className='container-fluid'>

                <div className='row justify-content-center HawaMahal-main-row'>
                    <div className='col-8 HawaMahal-sub-row'>
                        <div className='row HawaMahal-heading'><h1>Hawa Mahal</h1></div>
                        <div className='row HawaMahal-image'></div>
                        <div className='row HawaMahal-para'>
                            <div className='col-8 HawaMahal-main-para'> The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.

                                The structure was built in 1799 by the Maharaja Sawai Pratap Singh, grandson of Maharaja Sawai Jai Singh, the founder of the city of Jaipur, India.[1] He was so inspired by the unique structure of Khetri Mahal that he built this grand and historical palace.

                                It was designed by Lal Chand Ustad. Its five-floor exterior is akin to a honeycomb with its 953 small windows called Jharokhas decorated with intricate latticework.[2] The original intent of the lattice design was to allow royal ladies to observe everyday life and festivals celebrated in the street below without being seen. This architectural feature also allowed cool air from the Venturi effect to pass through, thus making the whole area more pleasant during the high temperatures in summer.</div>
                            <div className='col-4 HawaMahal-sub-para'><h4>Online Bookings open !</h4>
                                <h6>Ticket Price - 120/Person</h6>
                                <button className='btn btn-success button1'>Book Now</button></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );

}



export default HawaMahal;


