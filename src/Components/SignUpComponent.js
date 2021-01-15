import React, {useEffect, useState} from 'react';
import history from '../history';
import {useDispatch, useSelector} from 'react-redux';
import '../css/SignUp.css'
import ReCAPTCHA from "react-google-recaptcha";

function SignUpComponent(props) 
{
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const recaptchaRef = React.createRef();
    
    function onClickSignUp() 
    {
        console.log("bla bla");
		let email = document.getElementById("email").value;
		let pass = document.getElementById("password").value;
		let conf = document.getElementById("password1").value;
		let first = document.getElementById("Firstname").value;
		let last = document.getElementById("Lastname").value;

		ValidateEmail(email);
		checkPwd(pass);
		checkNames(first);
		checkNames(last);
		
		if (conf == pass)//$('#succsesmodal').modal('show')
			return (true)
		alert("The passwords do not match")
		return (false)
	}

    function ValidateEmail(mail) 
    {
        if (/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(mail))
            return (true)
		alert("You have entered an invalid email address!")
		return (false)
	}

    function checkPwd(str) {
        if (str.length < 6)
			alert("Too short");
		else if (str.search(/\d/) == -1)
			alert("No num");
		else if (str.search(/[a-zA-Z]/) == -1)
			alert("no chars");

		return ("ok");
	}

	function checkNames(str) 
	{
		if (str.length < 1)
			alert("Too short");
		else if (str.search(/[a-zA-Z]/) == -1)
			alert("no chars");
		else if (str.search(/[0-9]/) != -1) 
			alert("you cannot write number at your name");

		return(true);
	}

    function onSubmit() 
    {
        const recaptchaValue = recaptchaRef.current.getValue();
        this.props.onSubmit(recaptchaValue);
    }
    
    function onChange(value) 
    {
        console.log("Captcha value:", value);
    }
  
    return (   
        <div>
            <div id="SignUpcontainer">
                <div className= "row justify-content-center">
                    <div id="SignUp">
                        <form className="SignUpform" action="#" method="post" autocomplete="off">
                            <p id="title">Sign Up</p>
                            <input id="Firstname" type="text" className="form-control fix-rounded-right" required placeholder="Enter Firstname" aria-label="Fullname" aria-describedby="basic-addon1"></input>
                            <div className="invalid-feedback">
                                Please choose a Firstname.
                            </div>
                            <input id="Lastname" type="text" className="form-control fix-rounded-right" required placeholder="Enter Lastname" aria-label="Lastname" aria-describedby="basic-addon1"></input>
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                            <input id="email" type="text" className="form-control fix-rounded-right" required placeholder="Enter Email" aria-label="user name or email" aria-describedby="basic-addon1"></input>
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                            <input id="password" type="password" className="form-control fix-rounded-right" required placeholder="Enter Password" aria-label="password:" aria-describedby="basic-addon2"></input>
                            <div className="invalid-feedback">
                                Please enter your password.
                            </div>
                            <input id="password1" type="password" className="form-control fix-rounded-right" required placeholder="Enter Password" aria-label="password:" aria-describedby="basic-addon2"></input>
                            <div className="invalid-feedback">
                                Please enter your password.
                            </div>
                            <div className="row">
                                <button className="Signup-btn" type="submit" onClick={onClickSignUp}>Signup</button>
                            </div>
                            <div className="row">
                                <div className="need-acc-txt"> Have an account? <a href="/signin">Sign-In</a> </div>
                            </div>
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="6LcZtBoaAAAAAF3eCScaWwdsdv4y6CR_BMoM5i1B"
                                onChange={onChange}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    );
}
export default SignUpComponent;