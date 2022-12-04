import Paragraph from 'antd/es/typography/Paragraph';
import { useState } from 'react';
// import styles from './comp1.module.scss'
function Page2() {
  const [editableStr, setEditableStr] = useState('page2');
  console.log("进入page2")
  return (
    <div >
      page2
    </div>
  )
}
export default Page2