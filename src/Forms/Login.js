
import './Login.css';


function Login() {
    return (

        <div className='container-fluid a1'>

            {/* (MAIN ROW------------------------------) */}
            <div className='row a2 justify-content-center'>
                <div className="col-8 a3">

                    {/* (USER MAIN ICON ROW-------------------------------) */}
                    <div className='row user-main-icon justify-content-center'>
                        <div className='col-3 circle'>
                            <i class="fa-solid fa-user-pen"></i>
                        </div>
                    </div>

                    {/* (USER NAME ROW---------------------------) */}
                    <div className='row username-row justify-content-center'>
                        <div className='col-1 user-icon'><i class="fa-solid fa-user"></i>
                        </div>
                        <div className='col-4 user-name'>
                            <input className='main' type='text' placeholder='username...'></input>

                        </div>
                    </div>

                    {/* (PASSWORD ROW-----------------------------------) */}
                    <div className='row password-row justify-content-center'>
                        <div className='col-1 pass-icon'><i class="fa-solid fa-lock"></i></div>
                        <div className='col-4 password'>
                            <input className='main' type='password' placeholder='********'></input>

                        </div>

                    </div>

                    {/* (REMEMBER ME & FORGOT PASSWORD ROW------------------------------) */}
                    <div className='row remember-row justify-content-center'>
                        <div className='col-2 remember'>
                           <input type='checkbox'></input> <span className='span-text'>Remember me</span>
                        </div>

                        <div className='col-3 forgot'>
                            <span className='span-text'>Forgot Password ?</span>
                        </div>


                    </div>

                    {/* (LOGIN BUTTON ROW----------------------------------) */}
                    <div className='row button-row justify-content-center'>
                        <div className='col-4 button'>
                            <button className='btn btn-primary login-button'>Login</button>
                        </div>

                    </div>



                </div>
            </div>


        </div>






    );
}

export default Login;