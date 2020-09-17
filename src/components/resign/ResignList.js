import React from "react";

const ResignList = ({
  handleUpdate,
  resigns,
  deleteResign,
  employeeIdToName,
}) => {
  return (
    <div>
      <h3 className="text-center form-title mb-4">Resign List</h3>
      <hr />
      <div className="table-responseve">
        <table className="table table-sm table-hover caption-top">
          <caption>List of resigns</caption>
          <thead>
            <tr>
              <th>Emp. Name</th>
              <th>Resign Type</th>
              <th>Resign Date</th>
              <th>Resign Reason</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {resigns &&
              resigns.map((resign) => {
                return (
                  <tr
                    key={resign.id}
                    id={resign.id % 2 === 0 ? "orange" : "green"}
                  >
                    <td>{employeeIdToName(resign.employee)}</td>
                    <td>{resign.resign_type}</td>
                    <td>{resign.resign_date}</td>
                    <td>{resign.resign_reason}</td>
                    <td>
                      <button
                        onClick={() => handleUpdate(resign)}
                        className="btn btn-outline-info btn-sm"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="pencil-alt w-6 h-6"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResignList;
