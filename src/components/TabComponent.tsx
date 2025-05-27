'use client';

import { useState, ReactNode } from 'react';
import '../styles/components.css';

interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabComponentProps {
  tabs: TabItem[];
  defaultTabId?: string;
  className?: string;
}

export default function TabComponent({
  tabs,
  defaultTabId,
  className = '',
}: TabComponentProps) {
  const [activeTab, setActiveTab] = useState(defaultTabId || (tabs.length > 0 ? tabs[0].id : ''));

  if (!tabs || tabs.length === 0) {
    return null;
  }

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={`tab-container ${className}`}>
      <div className="tab-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {activeTabContent}
      </div>
    </div>
  );
} 