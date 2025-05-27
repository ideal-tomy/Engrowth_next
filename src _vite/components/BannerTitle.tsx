import React from 'react';
import '../styles/pages.css';

interface BannerTitleProps {
  title: string;
  subtitle?: string;
  icon?: string;
  variant?: 'primary' | 'gold' | 'dark';
  animation?: boolean;
}

const BannerTitle: React.FC<BannerTitleProps> = ({ 
  title, 
  subtitle,
  icon,
  variant,
  animation = true
}) => {
  // バリアントクラスの設定
  let variantClass = '';
  if (variant === 'gold') variantClass = 'luxury-banner-gold';
  if (variant === 'dark') variantClass = 'luxury-banner-dark';

  // アニメーションクラスの設定
  const animationClass = animation ? 'banner-animate' : '';

  return (
    <div className={`luxury-banner-title ${variantClass} ${animationClass}`}>
      {icon && <div className="banner-icon">{icon}</div>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default BannerTitle; 