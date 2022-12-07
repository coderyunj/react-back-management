import store from '@/store';
import Paragraph from 'antd/es/typography/Paragraph';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';// 获取仓库数据
// import styles from './comp1.module.scss'
// ts中提供了ReturnType，用来获取函数类型的返回值
function Page1() {
  const [editableStr, setEditableStr] = useState('page1');
  // 因为 RootState 是全局声明所以不需要引入
  const {num} = useSelector((state: RootState) => ({
    num: state?.handleNum?.num
  }))
  const {sarr} = useSelector((state: RootState) => ({
    sarr: state?.handleArr?.sarr
  }))
  // 通过useDispatch修改仓库数据
  const dispatch = useDispatch()
  const changeNum = () => {
    dispatch({type: "add2",val: 10})
  }
  return (
    <div >
      {num}
      <button onClick={changeNum}>按钮</button>
      {sarr[0]}
    </div>
  )
}
export default Page1