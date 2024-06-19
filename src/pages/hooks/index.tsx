import { useState, useReducer, createContext, useContext } from 'react'

import Theme from './components/theme'

function authReducer(state: any, action: any) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true, username: action.payload }
    case 'LOGOUT':
      return { ...state, isLoggedIn: false, username: null }
    case 'TEST':
      return { ...state, isLoggedIn: '测试呀', username: action.payload }
    default:
      return state
  }
}

function orderReducer(state: any, action: any) {
  console.log('🍍🙏🍍👉: 进来了', action.payload)
  switch (action.type) {
    case 'CREATE_ORDER':
      return { ...state, orderId: action.payload.orderId, createTime: action.payload.createTime }
    case 'CANCEL_ORDER':
      return { ...state, orderId: action.payload.orderId, createTime: action.payload.createTime }
    default:
      return state
  }
}

type Theme = 'light' | 'dark' | 'system'

const ThemeContext = createContext<Theme>('system')

const ReactHooks = () => {
  const [user, setUser] = useState({
    name: 'John',
    age: 25
  })

  const [authState, dispatch] = useReducer(authReducer, {
    isLoggedIn: false,
    username: null
  })

  const [orderState, dispatchOrder] = useReducer(orderReducer, {
    orderId: '1234567890',
    createTime: '000000'
  })

  const [theme, setTheme] = useState<Theme>('light')

  function handleLogin(username: string | number) {
    dispatch({ type: 'LOGIN', payload: username })
  }

  function handleLogout() {
    dispatch({ type: 'LOGOUT' })
  }

  const handleCreate = () => {
    dispatchOrder({
      type: 'CREATE_ORDER',
      payload: {
        orderId: '34324323234324324',
        createTime: new Date().toLocaleString()
      }
    })
  }

  const handleTest = () => {
    dispatch({
      type: 'TEST',
      payload: '你在狗叫什么'
    })
  }

  const handleUpdate = () => {
    setUser({
      name: 'Alice',
      age: 30
    })

    console.log('🍍🙏🍍👉: user', user)
  }
  return (
    <div>
      <h1>React Hooks</h1>

      <p>{user.name}</p>
      <p>{user.age}</p>

      <button onClick={handleUpdate}>更新用户信息</button>

      <div>
        <p>{orderState.orderId}</p>
        <p>{orderState.createTime}</p>
        <button onClick={handleCreate}>创建订单</button>
        <button onClick={handleTest}>测试</button>
        {authState.isLoggedIn ? (
          <>
            <p>欢迎，{authState.username}！</p>
            <button onClick={handleLogout}>登出</button>
          </>
        ) : (
          <button onClick={() => handleLogin('Alice')}>登录</button>
        )}
      </div>

      <ThemeContext.Provider value={theme}>
        <Theme />
      </ThemeContext.Provider>
    </div>
  )
}

export default ReactHooks
