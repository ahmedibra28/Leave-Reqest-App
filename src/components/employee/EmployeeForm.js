import React from 'react'

function EmployeeForm({handleChange, handleSubmit, values, errors, departments}) {
    return (
      <form onSubmit={handleSubmit} autoComplete="off">

        <div className="row gy-2">
      <h3 className="text-center form-title mb-4">Employee</h3>
      <hr className="mt-0"/>
      
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
              <svg viewBox="0 0 20 20" fill="currentColor" className="identification w-6 h-6"><path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
              </span>
              <input
                name="emp_id"
                onChange={handleChange}
                type="text"
                value={values.emp_id}
                className="form-control py-2"
                placeholder="Enter employee ID"
              />
            </div>
            {errors.emp_id && (
              <div className="form-text text-danger text-right">
                {errors.emp_id}
              </div>
            )}

<div className="input-group">
              <span className="input-group-text" id="basic-addon1">
              <svg viewBox="0 0 20 20" fill="currentColor" className="user w-6 h-6"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
              </span>
              <input
                name="name"
                onChange={handleChange}
                type="text"
                value={values.name}
                className="form-control py-2"
                placeholder="Enter employee name"
              />
            </div>
            {errors.name && (
              <div className="form-text text-danger text-right">
                {errors.name}
              </div>
            )}

<div className="input-group">
              <span className="input-group-text" id="basic-addon1">
              <svg viewBox="0 0 20 20" fill="currentColor" className="badge-check w-6 h-6"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              </span>
              <select name="gender" onChange={handleChange} value={values.gender} className="form-control py-2">
                <option value="" disabled>Gender...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            {errors.gender && (
              <div className="form-text text-danger text-right">
                {errors.gender}
              </div>
            )}

<div className="input-group">
              <span className="input-group-text" id="basic-addon1">
              <svg viewBox="0 0 20 20" fill="currentColor" className="hashtag w-6 h-6"><path fillRule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z" clipRule="evenodd" /></svg>
              </span>
              <input
                name="mobile"
                onChange={handleChange}
                type="text"
                value={values.mobile}
                className="form-control py-2"
                placeholder="Enter mobile"
              />
            </div>
            {errors.mobile && (
              <div className="form-text text-danger text-right">
                {errors.mobile}
              </div>
            )}

          <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
              <svg viewBox="0 0 20 20" fill="currentColor" className="office-building w-6 h-6"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" /></svg>
              </span>
              <select name="department" onChange={handleChange} value={values.department} className="form-control py-2">
                <option value="" disabled>Department...</option>
                {
                  departments && departments.map(department => {
                  return <option key={department.id} value={department.id}>{department.name}</option>
                  })
                }
              </select>
            </div>
            {errors.department && (
              <div className="form-text text-danger text-right">
                {errors.department}
              </div>
            )}
         
        
        
            <div className="input-group mx-auto d-block text-right mt-2">
              <button
                type="submit"
                className="btn-submit btn btn-primary shadow p-2 px-4"
              >
                Submit
              </button>
            </div>

        </div>
      </form>
    )
}

export default EmployeeForm
