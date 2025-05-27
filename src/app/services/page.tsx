'use client';

import HeroSection from '@/components/HeroSection';
import TabComponent from '@/components/TabComponent';
import Reason1Content from '@/components/Reason1Content';
import Reason2Content from '@/components/Reason2Content';
import Reason3Content from '@/components/Reason3Content';
import StylishTitle from '@/components/StylishTitle';

export default function Services() {
  const tabs = [
    { id: '1', label: 'コンサルタント', content: <Reason1Content /> },
    { id: '2', label: '科学的根拠', content: <Reason2Content /> },
    { id: '3', label: '実践の仕組み', content: <Reason3Content /> },
  ];

  return (
    <div className="services-page">
      <HeroSection 
        title="サービス"
        subtitle="Engrowthだからこそ実現できる3つの特徴"
        bgColor="gradient"
        textColor="light"
        align="center"
        height="medium"
      />
      <div className="container mt-12">
        <div className="feature-banner bg-gray-900 text-white rounded-lg shadow-lg p-8 text-center mb-8 relative">
          <h2 className="text-4xl font-bold mb-2 drop-shadow-lg">Engrowthが選ばれる3つの特徴</h2>
          <div className="text-lg mb-4 opacity-80">他社との違いを明確にする私たちの強み</div>
        </div>
        <p className="text-center text-gray-700 text-lg mb-12">
          Engrowthは、ビジネスパーソンのための実践的な英語学習プログラムです。効率的な学習方法と、結果重視のアプローチで、短期間で実践的な英語力を身につけることができます。
        </p>
      </div>
      <div className="container section-padding">
        <TabComponent tabs={tabs} />
      </div>
      <section className="cta-banner section-padding">
        <div className="container">
          <div className="cta-box bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-lg p-8 text-center shadow-lg">
            <StylishTitle 
              title="英会話で広がる無限の可能性を"
              align="center"
              size="large"
              className="text-white"
            />
            <p className="mt-4 text-white">Engrowthの科学的根拠に基づくプログラムで、英会話習得を目指しましょう</p>
            <a href="/contact" className="primary-button mt-6">お問い合わせはこちら</a>
          </div>
        </div>
      </section>
    </div>
  );
} 