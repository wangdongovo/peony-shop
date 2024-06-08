import React from 'react'

interface State {
  createTime: string
  goodsId: string
  goodsName: string
  goodsPrice: string
}

class Production extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      createTime: '2021-01-01',
      goodsId: '123456',
      goodsName: '测试商品',
      goodsPrice: '100'
    }
  }

  render() {
    const { createTime, goodsName } = this.state
    return (
      <div>
        产品展示页面
        <p>创建时间：{createTime}</p>
        <p>商品名称：{goodsName}</p>
      </div>
    )
  }
}

export default Production
