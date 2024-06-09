import React from 'react'

import { Button } from '@arco-design/web-react'

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

  handleChange = () => {
    this.setState({
      goodsName: '测试商品2'
    }, () => console.log(this.state))


    console.log(this.state)
  }

  render() {
    const { createTime, goodsName } = this.state
    return (
      <div>
        <Button type="primary" onClick={this.handleChange}>
          更改商品名
        </Button>
        产品展示页面
        <p>创建时间：{createTime}</p>
        <p>商品名称：{goodsName}</p>
      </div>
    )
  }
}

export default Production
