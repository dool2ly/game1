import React, { Component } from 'react';
import { connect } from 'react-redux'

import './MyPortal.css';
import * as actions from '../../config/actions'

const AlertBox = ({ title, message, onClick }) => (
  <div className="MyPortal">
    <div className="alert-box">

      <div className='alert-title'>{title}</div>
      <div className='alert-msg'>{message}</div>

      <div className='alert-btn' onClick={onClick}>OK</div>
    </div>
  </div>
)

class MyPortal extends Component {
  render() {
    const { title, message, show, handleClick } = this.props
    return (
      <div>
        {show ? <AlertBox title={title} message={message} onClick={handleClick}/> : ''}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    ...state.portal
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch(actions.closeAlert())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyPortal)
