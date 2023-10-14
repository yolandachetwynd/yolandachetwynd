'use client';
import React, { useState } from "react";
import ContactCard from './components/ContactCard';
import styles from './page.module.css'
export default function Home() {

  const [collapsed, setCollasped] = useState<boolean>(false);

  
  return (
    <div className={styles.wrapper}>
      <ContactCard collapsed={collapsed} onClick={setCollasped} />
    </div>
  )
}
