import './HumayunTomb.css';
import SideBar from '../Bars/SideBar';

function HumayunTomb() {
    return (
        <div>
            <SideBar />
            <div className='container-fluid'>

                <div className='row justify-content-center HumayunTomb-main-row'>
                    <div className='col-8 HumayunTomb-sub-row'>
                        <div className='row HumayunTomb-heading'><h1>Humayun Tomb</h1></div>
                        <div className='row HumayunTomb-image'></div>
                        <div className='row HumayunTomb-para'>
                            <div className='col-8 HumayunTomb-main-para'> Humayun's tomb (Persian: Maqbara-i Humayun) is the tomb of the Mughal Emperor Humayun in Delhi, India.[1] The tomb was commissioned by Humayun's first wife and chief consort, Empress Bega Begum under her patronage[2][3][4][5][6] in 1558, and designed by Mirak Mirza Ghiyas and his son, Sayyid Muhammad,[7] Persian architects chosen by her.[8][9] It was the first garden-tomb on the Indian subcontinent,[10] and is located in Nizamuddin East, Delhi, India, close to the Dina-panah Citadel, also known as Purana Qila (Old Fort), that Humayun found in 1538. It was also the first structure to use red sandstone at such a scale.[11][12] The tomb was declared a UNESCO World Heritage Site in 1993,[10] and since then has undergone extensive restoration work, which is complete.[13] Besides the main tomb enclosure of Humayun, several smaller monuments dot the pathway leading up to it, from the main entrance in the West, including one that even pre-dates the main tomb itself, by twenty years; it is the tomb complex of Isa Khan Niyazi, an Afghan noble in Sher Shah Suri's court of the Suri dynasty, who fought against the Mughals, constructed in 1547 CE.</div>
                            <div className='col-4 HumayunTomb-sub-para'><h4>Online Bookings open !</h4>
                                <h6>Ticket Price - 130/Person</h6>
                                <button className='btn btn-success button1'>Book Now</button></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    );

}



export default HumayunTomb;