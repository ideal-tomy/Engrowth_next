import React from 'react';
import CardComponent from './CardComponent';
import IconListComponent from './IconListComponent';
import StylishTitle from './StylishTitle';
import businessImage from '../assets/images/business05.jpg'; // Import image

const Reason1Content: React.FC = () => {
  // アイコンリスト用のデータ
  const feedbackItems = [
    { icon: 'check_circle', text: '自分で出力する' },
    { icon: 'check_circle', text: '直してもらう' },
    { icon: 'check_circle', text: '精密にフィードバックされる' },
    { icon: 'check_circle', text: '体系的な介入による現在地の分析' }
  ];

  return (
    <div className="reason-content reason1">
      <StylishTitle 
        title="「英語を第二言語として習得したコンサルタント」の圧倒的な価値"
        type="section"
        align="center"
        size="large"
      />
      
      {/* 日本人コンサルタントの説明 */}
      <section>
        <StylishTitle 
          title="なぜEngrowthでは「日本人コンサルタント」にこだわるのか"
          align="left"
          size="medium"
          className="title-custom-underline"
        />
        
        <div className="content-grid">
          <div className="content-text">
            <StylishTitle 
              title="心理的安全性＋第二言語習得メカニズム理解の両立"
              type="feature"
              align="left"
              size="small"
            />
            <p>英語学習は、単に知識を溜めるだけでは成功しません。「体験」と「慣れ」を経て、言語を自然に使えるようになるためのプロセスが必要です。</p>
            <p>この過程では、無視できない「心理的安全性」が重要です。</p>
            <p>日本人コンサルタントは、同じ母国語を持ち、第二言語習得の難しさを知り得ているからこそ、学習者の不安を取り除き、確実な成長を促すことができます。</p>
          </div>
          <div className="content-image">
            <img src={businessImage} alt="日本人コンサルタント" />
          </div>
        </div>
        
        <hr className="reason-separator" />
        <StylishTitle 
          title="伴走する側の成功体験が、学習者を確実に導く"
          type="feature"
          align="left"
          size="small"
        />
        <p>自らも第二言語習得の道を成功したコンサルタントだからこそ、学習者を確実に成長ルートへ導くことができるのです。</p>
        
        {/* カードコンポーネントでの表示 */}
        <div className="card-grid">
          <CardComponent 
            className="card-icon-top"
            title="心理的安全性の確保" 
            description="同じ母国語を持ち、第二言語習得の難しさを知るコンサルタントが、学習者の不安を取り除き、確実な成長を促します。"
          />
          
          <CardComponent 
            className="card-icon-top"
            title="第二言語習得メカニズムの理解" 
            description="英語を第二言語として習得した経験を持つコンサルタントが、効果的な学習方法を提供します。"
          />
          
          <CardComponent 
            className="card-icon-top"
            title="成功体験の共有" 
            description="自らも第二言語習得の道を成功したコンサルタントだからこそ、学習者を確実に成長ルートへ導くことができます。"
          />
        </div>
      </section>
      
      <hr className="reason-separator" />

      {/* ネイティブスピーカーでは不十分な理由 */}
      <section>
        <StylishTitle 
          title="なぜネイティブスピーカーでは不十分なのか"
          align="left"
          size="medium"
          className="title-custom-underline"
        />
        
        <div className="content-box">
          <StylishTitle 
            title="第一言語と第二言語の習得メカニズムの違い"
            type="feature"
            align="left"
            size="small"
          />
          <p>第一言語は、幼少期の記憶システムを通じて無意識的に習得されます。一方、第二言語習得は、対話意識、意図的記憶を駆使する、全く異なるプロセスを要します。</p>
          <p>この違いを理解していないティーチャーに教わっても、学習者は絶対に成功できません。</p>
        </div>
        
        <div className="content-box">
          <StylishTitle 
            title="日本人に必要なのは「第二言語習得の成功者」"
            type="feature"
            align="left"
            size="small"
          />
          <p>同じ母国語をもつ成功者だからこそ、第二言語習得者に必要なマインドセットとプロセスを確実にサポートできます。</p>
        </div>
      </section>
      
      <hr className="reason-separator" />

      {/* 脳科学的に証明された最適ルート */}
      <section>
        <StylishTitle 
          title="脳科学的に証明された「第二言語習得の最適ルート」"
          align="left"
          size="medium"
          className="title-custom-underline"
        />
        
        <div className="content-box">
          <StylishTitle 
            title="聞くだけ学習・独学学習では伸びない理由"
            type="feature"
            align="left"
            size="small"
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
            size="small"
          />
          <p>成長は「体系的な介入」による現在地の分析と、適切なフィードバックを繰り返すことで成立します。</p>
        </div>
      </section>
      
      {/* 留学経験・学位取得の価値 */}
      <section className="highlight-section">
        <StylishTitle 
          title="留学経験･英語での学位取得が証明する本物の英語力"
          align="left"
          size="medium"
          className="title-custom-underline"
        />
        
        <div className="content-grid">
          <div className="content-box">
            <StylishTitle 
              title="海外大学卒業レベルとは何か"
              type="feature"
              align="left"
              size="small"
            />
            <p>海外の大学を卒業するということは、「単に英語を話せる」だけではありません。「英語で思考し、講義を理解し、論文を書き、議論する」ことが求められます。</p>
            <p>そしてこれは、第一言語として英語を習得した人と同等の能力を求められるのです。</p>
          </div>
          
          <div className="content-box">
            <StylishTitle 
              title="英語で専門分野を学べる者だけが持つ「教える力」"
              type="feature"
              align="left"
              size="small"
            />
            <p>実際に英語で学問を継続し、自分のものとした者だからこそ、「どこで迷い」「どのプロセスが区切りになる」を的確に把握し、学習者を確実にサポートできます。</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reason1Content; 