import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function UserDetails(props) {

  const { isLoggedIn } = props;

  const navigate=useNavigate();
  
  const [data, setData] = useState([])



  useEffect(() => {
    fetch('https://63b806e94d97e82aa3ccef11.mockapi.io/Employee')

      .then((response) => response.json())
      .then((data) => {
        setData(data)



      })
  }, [])


  useEffect(() => {
    if (!isLoggedIn) {

        navigate('/loginpage');
    }
}, [isLoggedIn, navigate]);


  return (
    <div>{props.isLoggedIn &&
      <table className='container table bg-light table-hover table-bordered table-hover'>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email Id</th>
          </tr>
        </thead>
        <tbody>
          {data.map(value => {
            return (
              <tr key={value.id}>
                <td>{value.firstName}</td>
                <td>{value.lastName}</td>
                <td>{value.email}</td>

              </tr>
            )

          })}
        </tbody>


      </table>}
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
      isLoggedIn: state.isLoggedIn
  }
}
   
export default connect(
mapStateToProps,
  
)
  ( UserDetails);

