import Paragraph from 'antd/es/typography/Paragraph';
import { useState } from 'react';
// import styles from './comp1.module.scss'
function Page1() {
  const [editableStr, setEditableStr] = useState('page1');
  console.log("进入page1")
  return (
    <div >
      page1
    </div>
  )
}
export default Page1