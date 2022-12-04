import Paragraph from 'antd/es/typography/Paragraph';
import { useState } from 'react';
// import styles from './comp1.module.scss'
function About() {
  const [editableStr, setEditableStr] = useState('about');
  return (
    <div >
      <Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>
    </div>
  )
}
export default About