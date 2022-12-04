import React from 'react'
import ReactDOM from 'react-dom/client'
// 顶级样式初始化，会被其他样式覆盖
import 'reset-css'
// 然后是 UI 框架的样式
// 全局样式
import '@/assets/styles/global.scss'
// 最后是组件的样式，这样一个样式引入顺序才对
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import Router from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
