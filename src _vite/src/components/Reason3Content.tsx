import React from 'react';
import CardComponent from './CardComponent';
import IconListComponent from './IconListComponent';
import StylishTitle from './StylishTitle';

const Reason3Content: React.FC = () => {
  // 習慣化の3ステップデータ
  const habitSteps = [
    {
      title: "目標設定と行動計画の徹底設計",
      description: "単なるモチベーション誘導ではなく、数値化された目標を設定します。その上で、日々の行動に落とし込みます。",
      icon: "🎯"
    },
    {
      title: "毎日連絡によるマイクロチェックイン",
      description: "少しずつでも「ズレたら終わり」という行動結果の分岐点をなくします。不安や不明点も即時に直接相談、習慣化を助けます。",
      icon: "📱"
    },
    {
      title: "成功体験の積み上げとモチベーション維持",
      description: "「やれた」「成果が出た」という小さな成功体験を積み上げます。非常に簡単な成功でも意識的に認識し、下がりがちなモチベーションを保ち続けます。",
      icon: "🏆"
    }
  ];

  // サポート体制のリストアイテム
  const supportItems = [
    { icon: 'check_circle', text: 'コンサルタントとの毎日のやりとり' },
    { icon: 'check_circle', text: '行動ログを反映した実行課題のフィードバック' },
    { icon: 'check_circle', text: '行動の緊急レビューとリプラン修正' },
    { icon: 'check_circle', text: '成功体験の分解と気づきの振り返り' }
  ];

  return (
    <div className="reason-content reason3">
      <StylishTitle 
        title="習慣化 × 伴走サポートによる「圧倒的成果」の出し方"
        type="section"
        align="center"
        size="large"
      />
      
      {/* 習慣化の重要性 */}
      <section>
        <StylishTitle 
          title="習慣化が成功の9割を決める"
          align="left"
          size="medium"
          className="title-custom-underline"
        />
        <div className="content-box">
          <p>英語習得で最も重要なのは「習慣化」です。多くの成功例にも「意志による続けよう」という避けられない力に依存したものはありません。</p>
          
          <p>成功率の高い人ほど、システムを作り、「やらざるを得ない環境」を構築することで、自分を習慣の系に統合します。</p>
          
          <p>これを行動科学の観点で言えば、</p>
          
          <ul className="feature-list">
            <li><strong>21日間ルール</strong>（新しい習慣は最低三週間の繰り返しが必要）</li>
            <li><strong>環境設計</strong>（ストレスなしで習慣を構築できる環境を作る）</li>
          </ul>
          
          <p>が至上級のポイントです。</p>
          
          <p>習慣化できるかどうかが、成功を分ける主要因子です。</p>
        </div>
      </section>
      
      <hr className="reason-separator" />

      {/* 3ステップ習慣化プログラム */}
      <section>
        <StylishTitle 
          title="Engrowthが実施する「3ステップ習慣化プログラム」"
          align="left"
          size="medium"
          className="title-custom-underline"
        />
        <div className="content-box">
          <p>Engrowthでは、単純な言い換えや効果の不明確なものは実施しません。実際に習慣化を達成するため、実践的で科学的なプログラムを実行します。</p>
        </div>
        
        <div className="card-grid">
          {habitSteps.map((step, index) => {
            // Material Symbols に対応するアイコン名を決定
            // let msIcon = ''; // icon 使わないので不要
            // if (step.title === "目標設定と行動計画の徹底設計") msIcon = 'track_changes';
            // else if (step.title === "毎日連絡によるマイクロチェックイン") msIcon = 'smartphone';
            // else if (step.title === "成功体験の積み上げとモチベーション維持") msIcon = 'emoji_events';

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
      
      <hr className="reason-separator" />

      {/* 伴走型の必要性 */}
      <section>
        <StylishTitle 
          title="なぜ「伴走型」が絶対に必要なのか"
          align="left"
          size="medium"
          className="title-custom-underline"
        />
        <div className="content-box">
          <p>自走できないフェーズは必ず登場します。他者と比較して落ち込んだり、第三者の言葉で自己否定しそうになったり、続ける意味が分からなくなったり…</p>
          
          <p>それでも「大丈夫」と言い、最小単位でも成功体験を重ねる、この伴走は決定的です。</p>
          
          <p>行動心理学にも基づいています。実際、励ましてくれる人の存在は、効果を数倍にし、失敗率を劇的に下げます。</p>
        </div>
      </section>
      
      <hr className="reason-separator" />

      {/* サポート体制 */}
      <section>
        <StylishTitle 
          title="Engrowth独自のサポート体制"
          align="left"
          size="medium"
          className="title-custom-underline"
        />
        <div className="content-box">
          <IconListComponent items={supportItems} className="check-list" />
          
          <p>ここまでセットで、「成果が出るのが当たり前」のステージへ導きます。</p>
        </div>
      </section>
      
      {/* 成果イメージ */}
      <section className="highlight-section">
        <StylishTitle 
          title="習慣化によって得られる成果"
          align="left"
          size="medium"
          className="title-custom-underline"
        />
        <div className="content-grid">
          <div className="content-box">
            <StylishTitle 
              title="短期的効果"
              type="feature"
              align="left"
              size="small"
            />
            <ul className="feature-list">
              <li>学習の継続率が3倍に上昇</li>
              <li>毎日の小さな成功体験による自己効力感の向上</li>
              <li>学習内容の定着率が飛躍的に向上</li>
            </ul>
          </div>
          
          <div className="content-box">
            <StylishTitle 
              title="長期的効果"
              type="feature"
              align="left"
              size="small"
            />
            <ul className="feature-list">
              <li>自走できる英語学習者への成長</li>
              <li>英語を使う場面での自信の獲得</li>
              <li>海外でも通用する英語力の確立</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reason3Content; 