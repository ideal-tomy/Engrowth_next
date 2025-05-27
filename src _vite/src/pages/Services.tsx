import React from 'react';
import '../styles/pages.css';
import '../styles/Services.css';
import TabComponent from '../components/TabComponent';
import Reason1Content from '../components/Reason1Content';
import Reason2Content from '../components/Reason2Content';
import Reason3Content from '../components/Reason3Content';
import HeroSection from '../components/HeroSection';
import BannerTitle from '../components/BannerTitle';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

const Services: React.FC = () => {
  const tabs: TabItem[] = [
    { id: '1', label: 'コンサルタント', content: <Reason1Content /> },
    { id: '2', label: '科学的根拠', content: <Reason2Content /> },
    { id: '3', label: '実践の仕組み', content: <Reason3Content /> },
  ];

  return (
    <div className="services-page">
      <HeroSection 
        title="サービス" 
        subtitle="Engrowtだからこそ実現できる3つの特徴" 
        bgColor="gradient" 
        textColor="light" 
        align="center"
        height="medium"
      />
      
      <div className="page-container">
        <div className="section intro-section">
          <div className="container">
            <BannerTitle 
              title="Engrowtが選ばれる3つの特徴"
              subtitle="他社との違いを明確にする私たちの強み"
            />
            
            <div className="intro-text">
              <p>
                Engrowtは、ビジネスパーソンのための実践的な英語学習プログラムです。
                効率的な学習方法と、結果重視のアプローチで、短期間で実践的な英語力を身につけることができます。
              </p>
            </div>
            
            <TabComponent tabs={tabs} />
            
            <div className="cta-box">
              <BannerTitle 
                title="英会話で広がる無限の可能性を"
                subtitle="Engrowtの科学的根拠に基づくプログラムで、英会話習得を目指しましょう"
              />
              <p>
                どんな環境の型にも最適な英会話習得プログラムを提案します。
              </p>
              <div className="action-buttons">
                <a href="/contact" className="primary-button">お問い合わせはこちら</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 