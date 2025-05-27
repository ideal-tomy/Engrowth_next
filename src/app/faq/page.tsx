'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const newFaqData: FAQItem[] = [
  { question: 'プログラムの特徴を教えてください', answer: '第二言語習得理論に基づいた科学的アプローチと、AI技術を活用した独自の学習メソッドを採用しています。', category: 'service' },
  { question: '学習期間はどのくらいですか？', answer: '標準的なプログラムは6ヶ月間ですが、目標や現在の英語力に応じて柔軟に設定可能です。', category: 'service' },
  { question: 'オンラインでの受講は可能ですか？', answer: 'はい、全てのプログラムをオンラインで受講いただけます。', category: 'service' },
  { question: '1日の学習時間は何分ほど必要ですか？', answer: '1日の学習時間は<span class="highlight">約3時間を目標</span>に設定しています。', category: 'service' },
  { question: 'Duo 3.0+Kindleでの購入をしていいですか？', answer: 'ペーパーブックでの購入をお願いいたします。', category: 'service' },
  { question: 'どのような経歴のコンサルタントが在籍していますか？', answer: '海外の名門大学出身のプロフェッショナルな英語力を持つ多彩な人材が在籍しています。', category: 'consultant' },
  { question: 'コンサルタントとのマッチングはどのように行われますか？', answer: '以下の要素を総合的に考慮して、最適なコンサルタントを選定いたします。', category: 'consultant' },
  { question: '英語学習から長く離れていますが、初心者からのスタートでも問題ありませんか？', answer: 'はい、安心してスタートいただけます。基礎からしっかりと学べるカリキュラムを用意しています。', category: 'student' },
  { question: '教材費は別途必要ですか？', answer: 'はい、必要な教材は別途、個別で購入をお願いしております。', category: 'price' },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const filteredFAQs = activeCategory === 'all' ? newFaqData : newFaqData.filter(faq => faq.category === activeCategory);

  return (
    <div className="faq-page">
      <HeroSection
        title="よくある質問"
        subtitle="Engrowthについてのよくある質問にお答えします。さらに詳しい情報が必要な場合は、お気軽にお問い合わせください。"
        bgColor="gradient"
        textColor="light"
        align="center"
        height="medium"
      />
      <div className="container section-padding">
        <div className="faq-content-wrapper">
          <div className="category-filter flex flex-wrap gap-2 mb-8">
            <button className={activeCategory === 'all' ? 'active' : ''} onClick={() => setActiveCategory('all')}>すべて</button>
            <button className={activeCategory === 'service' ? 'active' : ''} onClick={() => setActiveCategory('service')}>サービス内容</button>
            <button className={activeCategory === 'consultant' ? 'active' : ''} onClick={() => setActiveCategory('consultant')}>コンサルタント</button>
            <button className={activeCategory === 'student' ? 'active' : ''} onClick={() => setActiveCategory('student')}>受講生</button>
            <button className={activeCategory === 'price' ? 'active' : ''} onClick={() => setActiveCategory('price')}>料金</button>
          </div>
          <div className="faq-list space-y-6">
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="faq-item p-4 bg-white rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 