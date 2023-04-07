import './IndiaGate.css';
import SideBar from '../Bars/SideBar';


function IndiaGate() {
    return (
        <div>
            <SideBar />
            <div className='container-fluid'>

                <div className='row justify-content-center IndiaGate-main-row'>
                    <div className='col-8 IndiaGate-sub-row'>
                        <div className='row IndiaGate-heading'><h1>India Gate</h1></div>
                        <div className='row IndiaGate-image'></div>
                        <div className='row IndiaGate-para'>
                            <div className='col-8 IndiaGate-main-para'>The India Gate (formerly known as the All India War Memorial) is a war memorial located near the Kartavya path on the eastern edge of the "ceremonial axis" of New Delhi, formerly called duty path. It stands as a memorial to 84,000 soldiers of the British Indian Army who died between 1914 and 1921 in the First World War, in France, Flanders, Mesopotamia, Persia, East Africa, Gallipoli and elsewhere in the Near and the Far East, and the Third Anglo-Afghan War. 13,300 servicemen's names, including some soldiers and officers from the United Kingdom, are inscribed on the gate.[2] Designed by Sir Edwin Lutyens, the gate evokes the architectural style of the memorial arch such as the Arch of Constantine, in Rome, and is often compared to the Arc de Triomphe in Paris, and the Gateway of India in Mumbai.</div>
                            <div className='col-4 IndiaGate-sub-para'><h4>Online Bookings open !</h4>
                                <h6>Ticket Price - 130/Person</h6>
                                <button className='btn btn-success button1'>Book Now</button></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );


}

export default IndiaGate;