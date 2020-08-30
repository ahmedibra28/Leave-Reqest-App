import React from 'react'

const LeaveTypeList = ({handleUpdate, leave_types, deleteLeaveType}) => {
    
    
    return (
        <div>
            <h3 className="text-center form-title mb-4">Leave Type List</h3>
            <hr/>
            <div className="table-responseve">
            <table className="table table-sm table-hover caption-top">
                <caption>List of leave types</caption>
                <thead>
                    <tr>
                        <th>Leave Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        leave_types && leave_types.map((leave_type) => {
                            return (
                                <tr id="orange" key={leave_type.id}>
                                    <td>{leave_type.name}</td>
                                    <td> 
                            <button onClick={() => handleUpdate(leave_type)} className="btn btn-outline-info btn-sm"><i className="fas fa-edit"></i></button> 
                                </td>
                                </tr>
                            )
                        })
                    }
                    
                  
                </tbody>
                </table>
                </div>
        </div>
    )
}

export default LeaveTypeList
