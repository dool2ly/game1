import React from 'react'

const Form = ({placeholder, button, onChange, onSubmit, type='text'}) => (
  <div className='form'>
    <input onChange={onChange} placeholder={placeholder} type={type}/>
    {button && <div className="menu-btn" onClick={onSubmit} > {button} </div> }
  </div>
)

export default Form
