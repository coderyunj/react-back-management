
import App from "@/App"
import About from "@/views/About"
import Home from "@/views/Home"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
// BrowserRouter决定路由模式（history模式） HashRouter（Hash）模式
// 旧写法
// const baseRouter = () => {
//   return 
// }
// 中间不需要逻辑就可以不用大括号
const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* 配置用户访问 ’/‘路径时，重定向到/home路径
        <Route path="/" element={<Navigate to="/Home" />}></Route> */}
        <Route path="/home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)

export default baseRouter