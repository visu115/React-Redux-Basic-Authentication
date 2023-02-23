import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

function Accounts(props) {
    const { isLoggedIn } = props;

    const navigate = useNavigate();


    useEffect(() => {
        if (!isLoggedIn) {

            navigate('/loginpage');
        }
    }, [isLoggedIn, navigate]);

    return (
        <div>{props.isLoggedIn &&
            <h1>this is account Page</h1>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}
     
export default connect(
    mapStateToProps
)(Accounts);