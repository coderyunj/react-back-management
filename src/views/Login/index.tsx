import styles from './style.module.less'
import initLoginBg from './init' // 引入后需要在生命周期函数中去执行
import { useEffect } from 'react'
import { Button, Input, Space } from 'antd'
const view = () => {
  useEffect(() => {
    initLoginBg()
    window.onresize = function () {
      initLoginBg()
    }
  }, [])
  // 加载完组件后
  return (
    <div className={styles.loginPage}>
      {/* 存放背景 */}
      <canvas id="canvas" style={{ display: 'block' }}></canvas>
      <div className={styles.loginBox}>
        <div className={styles.title}>
          <h1>前端乐哥&nbsp;·&nbsp;通用后台系统</h1>
          <p>Strive Everyday</p>
        </div>
        <div className={styles.form}>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Input placeholder="用户名"/>
            <Input.Password placeholder="密码"/>
            <Button type="primary" block>
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
export default view
