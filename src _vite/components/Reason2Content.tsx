import React from 'react';
import CardComponent from './CardComponent';
import IconListComponent from './IconListComponent';
import StylishTitle from './StylishTitle';

const Reason2Content: React.FC = () => {
  // 失敗原因のデータ
  const failureReasons = [
    {
      title: "インプット偏重",
      description: "聞き流し中心の学習では、脳が英語を処理する回路が形成されません。",
      icon: "📥"
    },
    {
      title: "アウトプット不足",
      description: "実際に話す練習が圧倒的に不足している状態では、英語を使いこなす能力は身につきません。",
      icon: "📤"
    },
    {
      title: "科学的アプローチ不在",
      description: "習慣化に対する科学的なアプローチなしでは、継続的な成長は見込めません。",
      icon: "🧪"
    }
  ];

  // 5つのステップのデータ
  const fiveSteps = [
    {
      title: "1. INPUT（インプット）の質と量",
      description: "「意識的に」スピード＋リスニング力を高め、視聴できる言語範囲を広げます。",
      icon: "📚"
    },
    {
      title: "2. OUTPUT（アウトプット）の実践",
      description: "とにかく「言葉に出す」こと。語彙、表現をすぐに使う習慣をつけます。",
      icon: "🗣️"
    },
    {
      title: "3. フィードバックを受ける",
      description: "「作ったままで済ませない」。誤りを正し、正しいパターンを繰り返します。",
      icon: "📝"
    },
    {
      title: "4. 修正・改善を繰り返す",
      description: "加速学習のスパイラルを続け、着実にレベルアップします。",
      icon: "🔄"
    },
    {
      title: "5. 習慣化で自動的に継続",
      description: "日常的に、無理なく繰り返す環境を作り、英語学習を習慣化します。",
      icon: "⏱️"
    }
  ];

  // SLA理論のリストアイテム
  const slaItems = [
    { icon: 'arrow_forward', text: '学習者は「インプット（入力）」の質、量を統制すると同時に' },
    { icon: 'arrow_forward', text: '「アウトプット（出力）」で実際に使われる言語のスキルを高める' },
    { icon: 'arrow_forward', text: 'これを続けることで自動化（オートマティション）が起こる' }
  ];

  // 認知負荷理論のリストアイテム
  const cognitiveItems = [
    { icon: 'arrow_forward', text: '最初は意識的な努力を注ぎ込む必要がある' },
    { icon: 'arrow_forward', text: '繰り返しで「意識しなくても出来る」に変わる' },
    { icon: 'arrow_forward', text: 'これにより「言語スパンの自動化」が達成される' }
  ];

  return (
    <div className="reason-content reason2">
      <StylishTitle 
        title="科学的に裏付けられた「効率的英語習得メカニズム」"
        type="section"
        align="center"
        size="large"
      />
      
      {/* 努力しても伸びない問題 */}
      <section>
        <StylishTitle 
          title="「努力しても伸びない」を科学的に撃破する"
          align="left"
          size="medium"
          className="title-custom-underline"
        />
        <div className="content-box">
          <p>「頑張って勉強しているのに、なかなか英語が話せるようにならない」——<br />
          この悩みを持つ日本人は非常に多い。</p>
          <p>しかし、これは"才能"や"センス"の問題ではありません。</p>
          <p>科学的に正しい方法に基づけば、誰でも確実に英語を話せるようになります。<br />
          そのカギは「第二言語習得メカニズム」と「脳科学」への正しい理解です。</p>
        </div>
      </section>
      
      <hr className="reason-separator" />

      {/* 英会話教室の問題点 */}
      <section>
        <StylishTitle 
          title="なぜ多くの英会話教室では話せるようにならないのか"
          align="left"
          size="medium"
          className="title-custom-underline"
        />
        <div className="card-grid">
          {failureReasons.map((item, index) => {
            // Material Symbols に対応するアイコン名を決定
            // let msIcon = ''; // icon 使わないので不要
            // if (item.title === "インプット偏重") msIcon = 'input';
            // else if (item.title === "アウトプット不足") msIcon = 'output';
            // else if (item.title === "科学的アプローチ不在") msIcon = 'science';
            
            return (
              <CardComponent 
                key={index} 
                title={item.title} 
                description={item.description}
                /* icon={msIcon} */ // icon プロパティを削除
              />
            );
          })}
        </div>
        <div className="content-box">
          <p>⇒ これでは、どれだけ通っても"英語を使いこなす脳"が作られません。</p>
          <p>英語を話せるようになるには、意識的かつ戦略的な設計が必要です。</p>
        </div>
      </section>
      
      {/* 本質理解 */}
      <section>
        <StylishTitle 
          title="本質を理解すれば誰でも「話せる」ようになる"
          align="left"
          size="medium"
          className="title-custom-underline"
        />
        <div className="content-box">
          <p>英語習得には必ず必要な"5つのステップ"があります。<br />
          これらを正しく実践することで、誰でも着実に英語力を伸ばすことが可能です。</p>
        </div>
      </section>
      
      {/* 5つのステップ */}
      <hr className="reason-separator" />
      <section>
        <StylishTitle 
          title="「5つのステップ」"
          align="left"
          size="medium"
          className="title-custom-underline"
        />
        <div className="five-steps-container">
          {fiveSteps.map((step, index) => {
            // Material Symbols に対応するアイコン名を決定
            // let msIcon = ''; // icon 使わないので不要
            // if (step.title === "1. INPUT（インプット）の質と量") msIcon = 'menu_book';
            // else if (step.title === "2. OUTPUT（アウトプット）の実践") msIcon = 'record_voice_over';
            // else if (step.title === "3. フィードバックを受ける") msIcon = 'feedback';
            // else if (step.title === "4. 修正・改善を繰り返す") msIcon = 'sync';
            // else if (step.title === "5. 習慣化で自動的に継続") msIcon = 'schedule';

            return (
              <CardComponent 
                key={index} 
                title={step.title} 
                description={step.description}
                /* icon={msIcon} */ // icon プロパティを削除
              />
            );
          })}
        </div>
      </section>
      
      {/* 言語学＋脳科学 */}
      <section style={{ marginTop: '4rem' }}>
        <StylishTitle 
          title="言語学＋脳科学に基づくアプローチ"
          align="left"
          size="medium"
          className="title-custom-underline"
        />
        
        <div className="content-box">
          <StylishTitle 
            title="第二言語習得論（SLA）とは"
            type="feature"
            align="left"
            size="small"
          />
          <IconListComponent items={slaItems} className="arrow-list" />
        </div>
        
        <div className="content-box">
          <StylishTitle 
            title="認知負荷理論とは"
            type="feature"
            align="left"
            size="small"
          />
          <IconListComponent items={cognitiveItems} className="arrow-list" />
        </div>
      </section>
      
      {/* Engrowthの取り組み */}
      <section className="highlight-section">
        <StylishTitle 
          title="Engrowthでは"
          align="left"
          size="medium"
          className="title-custom-underline"
        />
        <div className="content-box">
          <p>Engrowthでは、これらの研究結果に基づいたプログラムを完全にカリキュラム化。<br />
          「正しい手順」で、講師と一緒に実践を繰り返しながら、何年もかかってしまうはずの成果を<br />
          「最短ルート」で実現することを目指します。</p>
        </div>
      </section>
    </div>
  );
};

export default Reason2Content; 