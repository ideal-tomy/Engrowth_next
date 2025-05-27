import React, { useState } from 'react';
import '../styles/components.css';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabComponentProps {
  tabs: TabItem[];
  defaultTabId?: string;
  className?: string;
}

const TabComponent: React.FC<TabComponentProps> = ({
  tabs,
  defaultTabId,
  className = '',
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(
    defaultTabId || (tabs.length > 0 ? tabs[0].id : '')
  );

  if (!tabs || tabs.length === 0) {
    return null;
  }

  const activeTab = tabs.find((tab) => tab.id === activeTabId) || tabs[0];

  return (
    <div className={`tab-container ${className}`}>
      <div className="tab-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTabId === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTabId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {activeTab.content}
      </div>
    </div>
  );
};

export default TabComponent; 