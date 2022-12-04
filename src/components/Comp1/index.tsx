// import './comp1.scss' // 全局引入
// 需要对样式进行模块化引入
import Paragraph from 'antd/es/typography/Paragraph';
import { useState } from 'react';
import styles from './comp1.module.scss'
function Comp1() {
  const [editableStr, setEditableStr] = useState('This is an editable text.');
  return (
    <div className={styles.box}>
      <Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>
    </div>
  )
}
export default Comp1