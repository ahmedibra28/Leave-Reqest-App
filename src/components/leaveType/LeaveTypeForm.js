import React from 'react'

function LeaveTypeForm({handleChange, handleSubmit, values, errors}) {
    return (
      <form onSubmit={handleSubmit} autoComplete="off">

        <div className="row">
      <h3 className="text-center form-title mb-4">Leave Type</h3>
      <hr/>

            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mail w-6 h-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
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
