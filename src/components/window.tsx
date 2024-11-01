// components/BrowserWindow.tsx

import React, { ReactNode } from 'react';
import styles from './BrowserWindow.module.css';

// Define props type for the component
interface BrowserWindowProps {
  url: string;
  children: ReactNode;
}

const BrowserWindow: React.FC<BrowserWindowProps> = ({ url, children }) => {
  return (
    <div className={styles.browserWindow}>
      <div className={styles.browserHeader}>
        <div className={styles.buttons}>
          <span className={styles.close} />
          <span className={styles.minimize} />
          <span className={styles.maximize} />
        </div>
        <div className={styles.addressBar}>{url}</div>
      </div>
      <div className={styles.browserContent}>
        {children}
      </div>
    </div>
  );
};

export default BrowserWindow;
