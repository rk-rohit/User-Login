import React from 'react';

const EmployeeDetails = ({user})=> {
    return(
        <div className="w-100">
            <h6 className="mb-1">{user.name}</h6>
            <div className='d-block'>Phone : {user.phoneNo}</div>
            <div className='d-block'>Email : {user.email}</div>
            <div className='d-block'>Gender : {user.gender}</div>
            <div className='d-block'>Age : {user.age}</div>
        </div>
    )
} 

export default EmployeeDetails;