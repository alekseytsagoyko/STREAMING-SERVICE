import React from 'react';
import Sidebar from '@components/main/sidebar/Sidebar';
import Content from "@components/main/content/Content";
import styles from '@styles/main/container.css';

function Container() {
    return (
      <div className={styles.container}>
          <Sidebar />
          <Content />
          <div></div>
      </div>
    );
}

export default Container;