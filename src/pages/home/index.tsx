import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {changeName} from '@/store/user'

import Layout from '@/components/layout/index'

import './index.less'
const Home = () => {


  const user = useSelector((state: any) => state.user)
  const dispatch = useDispatch();




  console.log('user', user)



  const handleChange = () => {
    dispatch(changeName({
      name: '李白',
      
    }))
  }
  return (
    <Layout>
      <div className="home-wrapper">首页</div>


      <div onClick={handleChange}>更换用户信息</div>
    </Layout>
  )
}

export default Home
