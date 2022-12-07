import styles from './style.module.less'
import initLoginBg from './init' // 引入后需要在生命周期函数中去执行
import { ChangeEvent, useEffect, useState } from 'react'
import { Button, Input, Space } from 'antd'
import img from '@/assets/1.jpg'
const view = () => {
  useEffect(() => {
    initLoginBg()
    window.onresize = function () {
      initLoginBg()
    }
  }, [])
  const [userNameVal, setUserNameVal] = useState("")
  const [passWordVal, setPassWrodVal] = useState("")
  const [captChaVal, setCaptChaVal] = useState("")
  const handleUserNameChange = (e:ChangeEvent<HTMLInputElement>) => {
    // console.log(e?.target?.value);
    setUserNameVal(e?.target?.value)// 动态同步用户输入的值
  }
  const handlePassWordChange = (e:ChangeEvent<HTMLInputElement>) => {
    // console.log(e?.target?.value);
    setPassWrodVal(e?.target?.value)// 动态同步用户输入的值
  }
  const handleCaptChaChange = (e:ChangeEvent<HTMLInputElement>) => {
    // console.log(e?.target?.value);
    setCaptChaVal(e?.target?.value)// 动态同步用户输入的值
  }
  const handleLogin = () => {
    
  }
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
            <Input placeholder="用户名" onChange={handleUserNameChange}/>
            <Input.Password placeholder="密码" onChange={handlePassWordChange}/>
            <div className={styles.captchaBox}>
              <Input placeholder="验证码" onChange={handleCaptChaChange}/>
              <div className={styles.captchaImg}>
                <img height={38} src={img} alt="" />
              </div>
            </div>
            <Button type="primary" block onClick={handleLogin}>
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
export default view
