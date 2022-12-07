import { LogoutOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useState } from 'react'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import { useRoutes, Outlet, Link } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import 'antd/dist/antd.css'
import router from './router'
import LayOut from './components/LayOut'
function App() {
  // const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
    <div className="App">
      {/* 顶级组件 */}
      {/* <Comp1 />
      <Comp2 /> */}
      {/* <Comp1 />
      <Button type="primary">按钮</Button>
      <LogoutOutlined /> */}
      {/* 路由跳转，通过link组件
      <Link to="/Home">Home</Link>
      <Link to="/About">About</Link> */}
      {/* <Link to="/Home">Home</Link>
      <Link to="/About">About</Link> */}
      {/* <Outlet></Outlet> */}
      {outlet}
      {/* <LayOut /> */} 
    </div>
  )
}

export default App
