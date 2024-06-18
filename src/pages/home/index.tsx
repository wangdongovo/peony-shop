import React from 'react'
import { useNavigate } from 'react-router-dom'


import './index.less'


const Home = () => {
  const navigate = useNavigate()





  const handleDetail = () => {
    navigate('/detail')

  }

  return (
    <div className="home-container">
      <div className="feed-section">
        <div className="feed-item" onClick={handleDetail}>
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/43/ac/b4/43acb46f-3fb2-ce6e-cf99-4ef0b529312f/8d7fe65c-7198-4392-a4de-4ee068537130.png/1012x1266fn.webp"
            alt=""
          />

          <div className="story-wrapper">
            <p className="label">主打推荐</p>
            <p className="title">你要永远活在影子里吗？</p>
            <p className="intro">
              剧集《看不见影子的少年》：失踪案扑朔迷离，张颂文、荣梓杉再演对手戏
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
