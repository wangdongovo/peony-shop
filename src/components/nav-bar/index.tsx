import React from 'react'
import { useNavigate } from 'react-router-dom'

import backIcon from '@/assets/image/back.png'
import './index.less'








const NavBar = () => {
  const navigate = useNavigate()


  const handleBack = () => {
    navigate(-1)
  }
  return(
    <div className="nav-bar">
        <img src={backIcon} alt=""  onClick={handleBack}/>
       <span>编辑资料</span>
      </div>
  )
}

export default NavBar