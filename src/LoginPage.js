import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
// import { redirect } from 'react-router-dom';
import './login.css'
function LoginPage(props) {


    const obj = {
        username: 'test',
        password: 'test'
    }


    const [userName, setUserName] = useState();
    const [password, setPassword] = useState('');

    const [userNameErr, serUserNameErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    const navigate = useNavigate();



    const validation = () => {
        if (userName === obj.username && password === obj.password) {
            props.checkValidation();
        //   return  <redirect to='/Accounts' />
            navigate('/Account')
        }
        else {
            serUserNameErr('enter valid username')
            setPasswordErr('enter valid password')
        }


    }

    const checkValidation = validation;
    // console.log('username :',userName)
    // console.log('password:',password)

    return (
        <div>
            <div className="container-fluid">
                <div className="row main-content bg-success text-center">
                    <div className="col-md-4 text-center company__info">
                        <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                        <h4 className="company_title">Your Company Logo</h4>
                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid">
                            <div className="row">
                                <h2>Log In</h2>
                            </div>
                            <div className="row">
                                <form className="form-group">
                                    <div className="row">
                                        <input type="text" name="userName" onChange={e => setUserName(e.target.value)} id="username" className="form__input" placeholder="UserName" />
                                    </div>
                                    <p className='text-danger'>{userNameErr}</p>
                                    <div className="row">
                                        <input type="type" name="Password" onChange={e => setPassword(e.target.value)} className="form__input" placeholder="Passwrod" />
                                    </div>
                                    <p className='text-danger'>{passwordErr}</p>

                                    <div className="row justify-content-center">
                                        <button type="button" onClick={checkValidation} className="btn" >Submit</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}


const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkValidation: () => dispatch({ type: "Access" })
    }

}

console.log(mapDispatchToProps);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);
