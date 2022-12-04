// 路由新写法
// react 中的函数
import React, { lazy } from "react"
// 这样其实相当于加载了所有路由，需要实现路由懒加载
// import About from "@/views/About"
// import Home from "@/views/Home"
// Navigate重定向组件
import {Navigate} from 'react-router-dom'
// 路由懒加载
const About = lazy(()=> import("@/views/About"))
const Home = lazy(()=> import("@/views/Home"))
// const Page1 = lazy(()=> import("../views/page1"))
const Page1 = lazy(()=> import("@/views/Page1"))
const Page2 = lazy(()=> import("@/views/Page2"))
const LayOut = lazy(()=> import("@/components/LayOut"))


// 抽取路由懒加载组件
const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>
    {comp}
  </React.Suspense>
)
const routes = [
  {
    path: "/",
    element: <Navigate to="/page1" />
  },
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "page1",
        element: withLoadingComponent(<Page1 />)
      },
      {
        path: "page2",
        element: withLoadingComponent(<Page2 />)
      },
    ]
  }
  // {
  //   path: "/home",
  //   // 使用路由懒加载需要用 React.Suspense组件进行包裹
  //   element: withLoadingComponent(<Home />)
  // },
  // {
  //   path: "/about",
  //   element: withLoadingComponent(<About />)
  // }
]

export default routes