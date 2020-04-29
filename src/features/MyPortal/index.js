import React, { Component } from 'react';
import { connect } from 'react-redux'

import './MyPortal.css';

const AlertBox = ({ title, message, onClick }) => (
  <div className="MyPortal">
    <div className="content">
      <h3>{title}</h3>
      <p>{message}</p>
      <button onClick={onClick}>OK</button>
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
    handleClick: () => {dispatch({type:'CLOSE_ALERT'})}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyPortal)
