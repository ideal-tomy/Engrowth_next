import React from 'react';
import '../styles/pages.css';
import '../styles/components.css';
import CardComponent from '../components/CardComponent';
import IconListComponent from '../components/IconListComponent';
import HeroSection from '../components/HeroSection';
import StylishTitle from '../components/StylishTitle';

const Reason1: React.FC = () => {
  // カードコンポーネント用のデータ
  const cardData = [
    {
      title: "心理的安全性の確保",
      description: "同じ母国語を持ち、第二言語習得の難しさを知るコンサルタントが、学習者の不安を取り除き、確実な成長を促します。",
      icon: "🛡️"
    },
    {
      title: "第二言語習得メカニズムの理解",
      description: "英語を第二言語として習得した経験を持つコンサルタントが、効果的な学習方法を提供します。",
      icon: "🧠"
    },
    {
      title: "成功体験の共有",
      description: "自らも第二言語習得の道を成功したコンサルタントだからこそ、学習者を確実に成長ルートへ導くことができます。",
      icon: "🏆"
    }
  ];

  // アイコンリスト用のデータ
  const feedbackItems = [
    { icon: "fa-check", text: "自分で出力する" },
    { icon: "fa-check", text: "直してもらう" },
    { icon: "fa-check", text: "精密にフィードバックされる" },
    { icon: "fa-check", text: "体系的な介入による現在地の分析" }
  ];

  return (
    <div className="page-container">
      <HeroSection 
        title="英語習得の専門家" 
        subtitle="「英語を第二言語として習得したコンサルタント」の圧倒的な価値" 
        bgColor="gradient" 
        textColor="light" 
        align="center"
        height="medium"
      />

      {/* 日本人コンサルタントにこだわる理由 */}
      <section className="content-section">
        <StylishTitle 
          title="なぜEngrowthでは「日本人コンサルタント」にこだわるのか" 
          type="section" 
          align="center"
          size="large"
        />
        
        <StylishTitle 
          title="心理的安全性＋第二言語習得メカニズム理解の両立" 
          type="feature" 
          align="left"
          size="medium"
        />
        <p>英語学習は、単に知識を溜めるだけでは成功しません。「体験」と「慣れ」を経て、言語を自然に使えるようになるためのプロセスが必要です。</p>
        <p>この過程では、無視できない「心理的安全性」が重要です。</p>
        <p>日本人コンサルタントは、同じ母国語を持ち、第二言語習得の難しさを知り得ているからこそ、学習者の不安を取り除き、確実な成長を促すことができます。</p>
        
        <StylishTitle 
          title="伴走する側の成功体験が、学習者を確実に導く" 
          type="feature" 
          align="left"
          size="medium"
        />
        <p>自らも第二言語習得の道を成功したコンサルタントだからこそ、学習者を確実に成長ルートへ導くことができるのです。</p>
        
        {/* カード3カラム表示 */}
        <div className="card-grid">
          {cardData.map((card, index) => (
            <CardComponent
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </section>

      {/* ネイティブスピーカーでは不十分な理由 */}
      <section className="content-section">
        <StylishTitle 
          title="なぜネイティブスピーカーでは不十分なのか" 
          type="section" 
          align="center"
          size="large"
        />
        
        <div className="content-box">
          <StylishTitle 
            title="第一言語と第二言語の習得メカニズムの違い" 
            type="feature" 
            align="left"
            size="medium"
          />
          <p>第一言語は、幼少期の記憶システムを通じて無意識的に習得されます。</p>
          <p>一方、第二言語習得は、対話意識、意図的記憶を駆使する、全く異なるプロセスを要します。</p>
          <p>この違いを理解していないティーチャーに教わっても、学習者は絶対に成功できません。</p>
        </div>
        
        <div className="content-box">
          <StylishTitle 
            title="日本人に必要なのは「第二言語習得の成功者」" 
            type="feature" 
            align="left"
            size="medium"
          />
          <p>同じ母国語をもつ成功者だからこそ、第二言語習得者に必要なマインドセットとプロセスを確実にサポートできます。</p>
        </div>
      </section>

      {/* 第二言語習得の最適ルート */}
      <section className="content-section">
        <StylishTitle 
          title="脳科学的に証明された「第二言語習得の最適ルート」" 
          type="section" 
          align="center"
          size="large"
        />
        
        <div className="content-box">
          <StylishTitle 
            title="聞くだけ学習・独学学習では伸びない理由" 
            type="feature" 
            align="left"
            size="medium"
          />
          <p>オーディオを聞く、ドラマを見る、単語を覚える。これらは「流入するだけ」の活動でしかありません。</p>
          <p>実際に言語を話せるようになるためには、</p>
          <IconListComponent items={feedbackItems} className="check-list" />
          <p>これらが全て欠かせません。</p>
        </div>
        
        <div className="content-box">
          <StylishTitle 
            title="体系的な介入とフィードバックの重要性" 
            type="feature" 
            align="left"
            size="medium"
          />
          <p>成長は「体系的な介入」による現在地の分析と、適切なフィードバックを繰り返すことで成立します。</p>
        </div>
      </section>

      {/* 留学経験・学位取得 */}
      <section className="content-section highlight-section">
        <StylishTitle 
          title="留学経験･英語での学位取得が証明する本物の英語力" 
          type="section" 
          align="center"
          size="large"
        />
        
        <div className="content-grid">
          <div className="content-box">
            <StylishTitle 
              title="海外大学卒業レベルとは何か" 
              type="feature" 
              align="left"
              size="medium"
            />
            <p>海外の大学を卒業するということは、「単に英語を話せる」だけではありません。「英語で思考し、講義を理解し、論文を書き、議論する」ことが求められます。</p>
            <p>そしてこれは、第一言語として英語を習得した人と同等の能力を求められるのです。</p>
          </div>
          
          <div className="content-box">
            <StylishTitle 
              title="英語で専門分野を学べる者だけが持つ「教える力」" 
              type="feature" 
              align="left"
              size="medium"
            />
            <p>実際に英語で学問を継続し、自分のものとした者だからこそ、「どこで迷い」「どのプロセスが区切りになる」を的確に把握し、学習者を確実にサポートできます。</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <StylishTitle 
          title="あなたも本物の英語力を身につけませんか？" 
          type="accent" 
          align="center"
          size="large"
        />
        <p>日本人コンサルタントによる効果的な英語学習を始めましょう。</p>
        <a href="/contact" className="cta-button">無料カウンセリングを予約する</a>
      </section>
    </div>
  );
};

export default Reason1; 