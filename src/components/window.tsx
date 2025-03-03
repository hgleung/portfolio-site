// components/BrowserWindow.tsx
'use client'

import React, { useState, ReactNode } from 'react';
import styles from './BrowserWindow.module.css';
import { Client } from '@vercel/postgres';

export interface Tab {
  label: string;
  content: ReactNode;
  url: string
} 

interface BrowserWindowProps {
  tabs: Tab[];
}

const BrowserWindow: React.FC<BrowserWindowProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  
  const activeUrl = tabs[activeTab]?.url.startsWith('http://') || tabs[activeTab]?.url.startsWith('https://')
    ? tabs[activeTab]?.url
    : `https://${tabs[activeTab]?.url}`;


  return (
    <div className={styles.browserWindow}>
      <div className={styles.browserHeader}>
        <div className={styles.addressBar}>
          <a href={activeUrl} target="_blank" rel="noopener noreferrer">
            {activeUrl}
          </a>
        </div>
      </div>
      <div className={styles.tabs}>
      {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tab} ${index === activeTab ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.browserContent}>
        {tabs[activeTab]?.content || <p>No content available.</p>}
      </div>
    </div>
  );
};

export default BrowserWindow;
