import React, { useState } from 'react'
// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons'
// import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu } from 'antd'
import { Outlet, useNavigate, useRoutes } from 'react-router-dom'
import MainMenu from '../MainMenu'
const { Header, Content, Footer, Sider } = Layout

// type MenuItem = Required<MenuProps>['items'][number]

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem
// }

// const items: MenuItem[] = [
//   getItem('Option 1', '/page1', <PieChartOutlined />),
//   getItem('Option 2', '/page2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [
//     getItem('Team 1', '6'),
//     getItem('Team 2', '8'),
//   ]),
//   getItem('Files', '9', <FileOutlined />),
// ]

const LayOut: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  // const navigateTo = useNavigate()
  // const [openKeys, setOpenKeys] = useState(['sub1']);
  // const clickHandle = (e: { key: string }) => {
  //   console.log(e?.key)
  //   // 点击跳转到对应路由 编程式导航
  //   navigateTo(e?.key)
  // }
  // const rootSubmenuKeys = ['sub1', 'sub2'];
  // const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
  //   // console.log(keys,"keys")
  //   // console.log(openKeys,"openKeys")
  //   // 这里的keys是当前回调函数被触发时，子菜单的当前打开状态数组
  //   // const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
  //   // // console.log(latestOpenKey,"latest")
  //   // // latestOpenKey 是在上一次状态里面去找关闭的子菜单，如果是关闭的就返回
  //   // if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
  //   //   setOpenKeys(keys);
  //   // } else {
  //   //   setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  //   // }
  //   // 只要最后一个元素
  //   setOpenKeys([keys[keys.length - 1]])
  // };
  // const handleOpenChange = (openKeys: string[]) => {
  //   console.log(openKeys,"open")
  // }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        {/* <Menu
          theme="dark"
          defaultSelectedKeys={['/page1']}
          mode="inline"
          items={items}
          onClick={clickHandle}
          onOpenChange={onOpenChange}
          openKeys={openKeys}
        /> */}
        <MainMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Breadcrumb style={{ margin: '16px 16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ margin: '16px 16px 0' }} className="site-layout-background">
          {/* <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            Bill is a cat.
          </div> */}
          {/* {outlet} */}
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center', padding: 0, lineHeight: "48px" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default LayOut
