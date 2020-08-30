import React from 'react'

const DepartmentList = ({handleUpdate, departments, deleteDepartment}) => {
    
    
    return (
        <div>
            <h3 className="text-center form-title mb-4">Department List</h3>
            <hr/>
            <div className="table-responseve">
            <table className="table table-sm table-hover caption-top">
                <caption>List of departments</caption>
                <thead>
                    <tr>
                        <th>Department</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        departments && departments.map((department) => {
                            return (
                                <tr id="orange" key={department.id}>
                                    <td>{department.name}</td>
                                    <td> 
                            <button onClick={() => handleUpdate(department)} className="btn btn-outline-info btn-sm"><i className="fas fa-edit"></i></button> 
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

export default DepartmentList
