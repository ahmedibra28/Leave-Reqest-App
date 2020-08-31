import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      error.msg.non_field_errors && alert.error(error.msg.non_field_errors);
      error.msg.username && alert.error(error.msg.username);
      error.msg.old_password && alert.error(error.msg.old_password);
      error.msg.new_password && alert.error(error.msg.new_password);
      error.msg.email && alert.error(error.msg.email);
    }
    if (message !== prevProps.message) {
      message.changePassword && alert.success(message.changePassword);
      message.resetPassword && alert.success(message.resetPassword);
      message.detail && alert.success(message.detail);

      message.deleteDepartment && alert.success(message.deleteDepartment);
      message.addDepartment && alert.success(message.addDepartment);
      message.updateDepartment && alert.success(message.updateDepartment);

      message.deleteLeaveType && alert.success(message.deleteLeaveType);
      message.addLeaveType && alert.success(message.addLeaveType);
      message.updateLeaveType && alert.success(message.updateLeaveType);

      message.deleteEmployee && alert.success(message.deleteEmployee);
      message.addEmployee && alert.success(message.addEmployee);
      message.updateEmployee && alert.success(message.updateEmployee);

      message.deleteLeaveRequest && alert.success(message.deleteLeaveRequest);
      message.addLeaveRequest && alert.success(message.addLeaveRequest);
      message.updateLeaveRequest && alert.success(message.updateLeaveRequest);
    }

  }

  render() {
    return <Fragment />;
  }
}
const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});
export default connect(mapStateToProps)(withAlert()(Alerts));
