import LayOut from '@/components/LayOut';
import Paragraph from 'antd/es/typography/Paragraph';
import { useState } from 'react';
// import styles from './comp1.module.scss'
function Home() {
  const [editableStr, setEditableStr] = useState('home');
  return (
    <div >
      <LayOut />
    </div>
  )
}
export default Home