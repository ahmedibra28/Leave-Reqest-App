import React from 'react'

function LeaveTypeForm({handleChange, handleSubmit, values, errors}) {
    return (
      <form onSubmit={handleSubmit} autoComplete="off">

        <div className="row">
      <h3 className="text-center form-title mb-4">Leave Type</h3>
      <hr/>

            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
              <svg viewBox="0 0 20 20" fill="currentColor" className="device-tablet w-6 h-6"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg>
              </span>
              <input
                name="name"
                onChange={handleChange}
                type="text"
                value={values.name}
                className="form-control py-2"
                placeholder="Enter leave type"
                aria-label="leave_type"
                aria-describedby="basic-addon1"
              />
            </div>
            {errors.name && (
              <div className="form-text text-danger text-right">
                {errors.name}
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

export default LeaveTypeForm
