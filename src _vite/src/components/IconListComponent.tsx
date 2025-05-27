import React from 'react';
import '../styles/components.css';

export interface IconListItem {
  icon: string; // Font Awesome icon class name (例: "fa-check")
  text: string;
  description?: string;
}

interface IconListComponentProps {
  items: IconListItem[];
  className?: string;
}

const IconListComponent: React.FC<IconListComponentProps> = ({
  items,
  className = '',
}) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <ul className={`icon-list ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="icon-list-item">
          <div className="icon-container">
            <span className="material-symbols-outlined">{item.icon}</span>
          </div>
          <div className="text-container">
            <span className="icon-list-text">{item.text}</span>
            {item.description && (
              <p className="icon-list-description">{item.description}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default IconListComponent; 