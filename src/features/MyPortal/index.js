import React, { Component } from 'react';
import { connect } from 'react-redux'

import './MyPortal.css';

const AlertBox = ({ title, message }) => (
  <div className="MyPortal">
    <div className="content">
      <h3>{title}</h3>
      <p>{message}</p>
      <button>OK</button>
    </div>
  </div>
)

class MyPortal extends Component {

  render() {
    const { title, message, show } = this.props
    return (
      <div>
        {show ? <AlertBox title={title} message={message}/> : ''}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    ...state.portal
  }
}

export default connect(mapStateToProps)(MyPortal)
