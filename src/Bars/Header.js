import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className='headerfixed'>
            <div class="row text-warning navcolor">
                <div class="col-3 d-none d-md-block logoi"><i class="fa-solid fa-landmark-dome"></i></div>
                <div class="col-md-4 d-block d-md-none">
                <div class="row">
                    <div class="col-3 logoii"><i class="fa-solid fa-landmark-dome"></i></div>
                    <div class="col-9 text-end menulogo">

                    <Link type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-bars menulogo"></i></Link>
                    <ul class="dropdown-menu">
                        <li><Link to="/" class="dropdown-item"><i class="fa-solid fa-house-signal"></i> Home</Link></li>
                        <li><Link to="MonumentHome" class="dropdown-item"><i class="fa-solid fa-landmark-dome"></i> Monuments</Link></li>
                        <li><Link to="Login" class="dropdown-item"><i class="fa-solid fa-right-to-bracket"></i> Login</Link></li>
                        <li><Link to="Register" class="dropdown-item"><i class="fa-solid fa-user-plus"></i> Register</Link></li>
                        
                    </ul>
                    </div>
                </div>
                </div>
                <div class="col-9 d-none d-md-block">
                <ul class="list-group list-group-horizontal justify-content-end">
                    <li class="menui"><Link to="/"><i class="fa-solid fa-house-signal"></i> Home</Link></li>
                    <li class="menui"><Link to="MonumentHome"><i class="fa-solid fa-landmark-dome"></i> Monuments</Link></li>
                    <li class="menui"><Link to="Login"><i class="fa-solid fa-right-to-bracket"></i> Login</Link></li>
                    <li class="menui"><Link to="Register"><i class="fa-solid fa-user-plus"></i> Register</Link></li>
                    
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;