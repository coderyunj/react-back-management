import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

// 构建菜单数据
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}
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
const items: MenuItem[] = [
  {
    label: "栏目1",
    key: "/page1",
    icon: <PieChartOutlined />
  },
  {
    label: "栏目2",
    key: "/page2",
    icon: <DesktopOutlined />
  },
  {
    label: "栏目3",
    key: "/page3",
    icon: <UserOutlined />,
    children: [
      {
        label: "Tom",
        key: "/page3/page301",
      },
      {
        label: "Bill",
        key: "/page3/page302",
      },
      {
        label: "Alex",
        key: "/page3/page303",
      },
    ]
  },
  {
    label: "栏目4",
    key: "/page4",
    icon: <TeamOutlined />,
    children: [
      {
        label: "Tom",
        key: "/page4/page401",
      },
      {
        label: "Bill",
        key: "/page4/page402",
      },
    ]
  },
  {
    label: "栏目5",
    key: "/page5",
    icon: <FileOutlined />,
  }
]
const MenuComp: React.FC = () => {
  const navigateTo = useNavigate()
  let firstOpenKey: string = ""
  const currentRoute = useLocation()
  const [openKeys, setOpenKeys] = useState([firstOpenKey])
  for(let i = 0; i < items.length; i++) {
    if(items[i]!["children"] && items[i]!["children"].length > 0 && items[i]!["children"].find(findKey)) {
      firstOpenKey = items[i]!.key as string
      break;
    }
  }
  function findKey(obj: {key: string}) {
    return obj?.key === currentRoute?.pathname
  }
  const clickHandle = (e: { key: string }) => {
    console.log(e?.key)
    // 点击跳转到对应路由 编程式导航
    navigateTo(e?.key)
  }
  const rootSubmenuKeys = ['sub1', 'sub2']
  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    // console.log(keys,"keys")
    // console.log(openKeys,"openKeys")
    // 这里的keys是当前回调函数被触发时，子菜单的当前打开状态数组
    // const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    // // console.log(latestOpenKey,"latest")
    // // latestOpenKey 是在上一次状态里面去找关闭的子菜单，如果是关闭的就返回
    // if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
    //   setOpenKeys(keys);
    // } else {
    //   setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    // }
    // 只要最后一个元素
    setOpenKeys([keys[keys.length - 1]])
  }

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute?.pathname]}
      mode="inline"
      // 菜单项数据
      items={items}
      onClick={clickHandle}
      onOpenChange={onOpenChange}
      openKeys={openKeys}
    />
  )
}
export default MenuComp
