import './GatewayOfIndia.css';
import SideBar from '../Bars/SideBar';




function GatewayOfIndia() {
    return (

        <div>
            <SideBar />
            <div className='container-fluid'>

                <div className='row justify-content-center Gateway-main-row'>
                    <div className='col-8 Gateway-sub-row'>
                        <div className='row Gateway-heading'><h1>Gateway of India</h1></div>
                        <div className='row Gateway-image'></div>
                        <div className='row Gateway-para'>
                            <div className='col-8 Gateway-main-para'> The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai (Bombay), India. It was erected to commemorate the landing of King-Emperor George V, the first British monarch to visit India, in December 1911 at Strand Road near Wellington Fountain.

                                The foundation stone was laid in March 1913 for a monument built in the Indo-Islamic style, inspired by elements of 16th-century Gujarati architecture. The final design of the monument by architect George Wittet was sanctioned only in 1914, and construction was completed in 1924. The structure is a memorial arch made of basalt, which is 26 metres (85 feet) high, with an architectural resemblance to a triumphial arch as well as Gujarati architecture of the time.</div>
                            <div className='col-4 Gateway-sub-para'><h4>Online Bookings open !</h4>
                                <h6>Ticket Price - 140/Person</h6>
                                <button className='btn btn-success button1'>Book Now</button></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    );

}



export default GatewayOfIndia;