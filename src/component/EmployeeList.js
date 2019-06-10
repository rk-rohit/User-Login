import React from 'react';
import EmployeeDetails from './EmployeeDetails';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

const EmployeeList = ({userList, auth})=> {

    if (!auth.isLoggedIn) return <Redirect to='/login' />

    const users = userList.map((user)=> {
        return (
            <Link to={'user/'+user.id} key={user.id} className="list-group-item list-group-item-action flex-column align-items-start">
                <EmployeeDetails user={user}/>
            </Link>
        )
    })
    return (
        <div className="container">
            <div className="list-group mt-4">
                {users}
            </div>
        </div>
    )
} 

const mapStateToProps = (state)=> {
    return {
        userList : state.employee.user,
        auth : state.auth
    };
}
export default connect(mapStateToProps)(EmployeeList);