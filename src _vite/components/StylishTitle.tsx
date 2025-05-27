import React from 'react';
import '../styles/components.css';

interface StylishTitleProps {
  title: string;
  subtitle?: string;
  type?: 'section' | 'major' | 'feature' | 'accent';
  align?: 'left' | 'center' | 'right';
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  highlightWords?: string[];
}

const StylishTitle: React.FC<StylishTitleProps> = ({
  title,
  subtitle,
  type = 'section',
  align = 'left',
  className = '',
  size = 'medium',
  highlightWords = []
}) => {
  const getTypeClass = () => {
    switch (type) {
      case 'major': return 'title-major';
      case 'feature': return 'title-feature';
      case 'accent': return 'title-accent';
      default: return 'title-section';
    }
  };

  const getAlignClass = () => {
    switch (align) {
      case 'center': return 'title-align-center';
      case 'right': return 'title-align-right';
      default: return 'title-align-left';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small': return 'title-size-small';
      case 'large': return 'title-size-large';
      case 'xlarge': return 'title-size-xlarge';
      default: return 'title-size-medium';
    }
  };

  // ハイライトキーワードの強調処理
  const renderHighlightedTitle = () => {
    if (highlightWords.length === 0) {
      return title;
    }

    // タイトルの特定のキーワードに強調を適用
    let highlightedTitle = title;
    highlightWords.forEach(word => {
      if (title.includes(word)) {
        highlightedTitle = highlightedTitle.replace(
          word, 
          `<span class="title-highlight">${word}</span>`
        );
      }
    });

    return <span dangerouslySetInnerHTML={{ __html: highlightedTitle }} />;
  };

  return (
    <div className={`stylish-title-container ${getTypeClass()} ${getAlignClass()} ${getSizeClass()} ${className}`}>
      <h2 className="stylish-title">
        {renderHighlightedTitle()}
        <span className="title-underline"></span>
      </h2>
      {subtitle && <p className="stylish-subtitle">{subtitle}</p>}
    </div>
  );
};

export default StylishTitle; 