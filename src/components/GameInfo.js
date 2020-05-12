import React from 'react'
import axios from 'axios'

const GameInfo = () => {
  const handleLogoutBtn = () => {

    axios.put('api/auth/save')
    // -- TODO: .then(axios.post(api/logout))
    .then((res) => {
      console.log("res", res)
    })
    .catch((err) => {
      console.log("err", err)
    })
  }

  return (
    <div className='gameinfo'>
      <div className='inventory'>Inven</div>
      <div className='user-info'>USER INFO</div>
      <div className='btn-container'>
        <div className='menu-btn' onClick={ handleLogoutBtn }>
          Save & Logout
        </div>
      </div>
    </div>
  )
}

export default GameInfo
