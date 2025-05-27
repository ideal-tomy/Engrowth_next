// import React from 'react'; // Removed unused import
import '../styles/Students.css';
import SimulationSection from '../components/SimulationSection';
import HeroSection from '../components/HeroSection';
import CardComponent from '../components/CardComponent';
import StylishTitle from '../components/StylishTitle';
import IconListComponent from '../components/IconListComponent';
import studentImage from '../assets/images/留学生活01.jpeg';

// シミュレーションデータ
const simulationTables = [
  {
    title: 'シミュレーション英会話①',
    data: [
      { week: '1-2', topic: '挨拶' },
      { week: '3-4', topic: '自己紹介' },
      { week: '5-6', topic: '道の聞き方/\n聞かれた際の答え方' },
      { week: '7-8', topic: '旅行編' },
      { week: '9-10', topic: 'ホテル' },
      { week: '11-12', topic: 'カフェ＆レストラン' },
    ],
    accordionItems: [
      { title: '挨拶', content: '基本的な挨拶表現から始まり、時間帯や状況に応じた適切な挨拶方法を学びます。また、初対面での自己紹介の基本も練習します。' },
      { title: '自己紹介', content: '自分の名前、出身、所属学校、趣味などの基本情報を英語で伝える練習をします。また、相手の自己紹介を聞いた後の適切な返答や質問の仕方も学びます。' },
      { title: '道の聞き方/聞かれた際の答え方', content: '道に迷った際に場所を尋ねる表現や、逆に道を尋ねられた時の対応方法を学びます。方向や距離の表現、ランドマークを使った説明方法なども練習します。' },
      { title: '旅行編（チェックイン、観光）', content: '海外旅行でよく使うフレーズを学びます。ホテルでのチェックイン手続き、観光地での案内所でのやり取り、観光スポットでの質問などをロールプレイで練習します。' },
      { title: 'ホテル（チェックイン/アウト）', content: 'ホテルでのチェックインやチェックアウト時のやり取り、部屋のリクエスト、設備の使い方の質問など、宿泊に関する様々なシーンを想定した会話を練習します。' },
      { title: 'カフェ＆レストラン（予約、注文）', content: 'レストランでの席の予約や注文時のやり取り、特別なリクエスト（アレルギー対応など）の伝え方、会計時のやり取りなど、飲食店で必要なコミュニケーションを学びます。' },
    ]
  },
  {
    title: 'シミュレーション英会話②',
    data: [
      { week: '13-14', topic: 'ショッピング' },
      { week: '15-16', topic: '交通機関' },
      { week: '17-18', topic: '学校生活・授業' },
      { week: '19-20', topic: '友人関係・交友関係' },
      { week: '21-22', topic: '留学面接準備' },
      { week: '23-24', topic: 'カスタム' },
    ],
    accordionItems: [
      { title: 'ショッピング（試着、会計）', content: 'ショッピング時に使える表現を学びます。商品について尋ねる方法、試着をお願いする表現、サイズや色の交換、支払い方法の確認など、買い物シーンでの会話を練習します。' },
      { title: '交通機関（電車、バス）', content: '電車やバスなどの公共交通機関を利用する際に必要な表現を学びます。切符の買い方、乗り場の尋ね方、遅延や乗り換えに関する質問など、移動時に役立つ会話を練習します。' },
      { title: '学校生活・授業', content: '学校での日常会話や授業に関連する表現を学びます。先生への質問の仕方、グループワークでの意見交換、授業内容についての議論など、学校生活で必要なコミュニケーションスキルを身につけます。' },
      { title: '友人関係・交友関係', content: '友達との会話や関係構築に役立つ表現を学びます。趣味や興味の共有、休日の過ごし方の提案、悩みの相談など、友人関係を深めるための英会話を練習します。' },
      { title: '留学面接準備', content: '留学面接で想定される質問とその回答パターンを学びます。自己PR、志望動機、将来の目標などについて英語で説得力のある回答ができるよう練習します。' },
      { title: 'カスタム（自分の興味分野）', content: '受講者それぞれの興味や目標に特化したシミュレーションを行います。特定の話題（音楽、スポーツ、科学など）について英語で議論できるよう、関連語彙や表現を学びます。' },
    ]
  }
];

// 料金プランデータ (学生向け - Pricing.tsxからコピー)
const studentPricingData = {
  headers: ['1ヶ月', '3ヶ月', '6ヶ月', '12ヶ月'],
  rows: [
    {
      label: '受講料',
      values: [
        '¥1,780<sup class="footnote-marker">※1</sup>',
        '<s class="original-price">¥5,340</s> → <strong>¥4,980</strong>',
        '<s class="original-price">¥10,680</s> → <strong>¥9,480</strong>',
        '<s class="original-price">¥21,360</s> → <strong>¥17,980</strong>'
      ]
    },
    {
      label: '1ヶ月あたり',
      values: [
        '-',
        '<s class="original-price">¥1,780</s> → <strong>¥1,660</strong>',
        '<s class="original-price">¥1,780</s> → <strong>¥1,580</strong>',
        '<s class="original-price">¥1,780</s> → <strong>¥1,498</strong>'
      ]
    }
  ]
};

const Students = () => {
  return (
    <div className="students-page">
      {/* ヒーローセクション */}
      <HeroSection 
        title="学生"
        subtitle="学生のための英語学習プログラム"
        bgColor="primary"
        textColor="light"
        align="center"
        height="medium"
      />

      {/* 導入セクション */}
      <section className="students-introduction fade-in">
        <div className="container">
          <StylishTitle 
            title="留学を成功させるために"
            align="center"
            size="large"
            className="title-custom-underline"
          />
          <div className="content-grid">
            <div className="content-text">
              <p>
                海外留学は新しい価値観や環境に触れる貴重な機会です。
                しかし、準備が不十分だと貴重な留学期間を有効に活用できません。
                Engrowthでは、科学的根拠に基づいた英語学習プログラムで、
                自信を持って英語で自己表現できる状態へと導きます。
              </p>
            </div>
            <div className="content-image student-feature-image">
              <img src={studentImage} alt="海外キャンパスで学ぶ学生" />
            </div>
          </div>
        </div>
      </section>

      {/* こんな方におすすめ */}
      <section className="students-persona">
        <div className="container">
          <h2 className="section-title">こんな方におすすめ</h2>
          <div className="persona-grid">
            <CardComponent 
              className="card-icon-top"
              icon="sentiment_dissatisfied" 
              title="英語に苦手意識がある"
              description="文法や単語は知っているのに、実践で使えない方"
            />
            <CardComponent 
              className="card-icon-top"
              icon="flight_takeoff" 
              title="留学・進学を目指す"
              description="海外大学への進学や留学を考えている方"
            />
            <CardComponent 
              className="card-icon-top"
              icon="work"
              title="就活で必要"
              description="外資系企業への就職を視野に入れている方"
            />
          </div>
        </div>
      </section>

      {/* 留学成功への3ステップ */}
      <section className="students-steps">
        <div className="container">
          <h2 className="section-title">留学成功への3ステップ</h2>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>基礎英語力の底上げ</h3>
              <p>発話することで聞き取れるようになる脳のメカニズムを活用</p>
              <a href="#step1" className="step-link">詳細を見る</a>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>エッセイ添削の重要性</h3>
              <p>学術的なライティングスキルを習得し、高評価を獲得</p>
              <a href="#step2" className="step-link">詳細を見る</a>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>シミュレーション英会話</h3>
              <p>実践的な場面を想定した会話練習で実践力を養成</p>
              <a href="#step3" className="step-link">詳細を見る</a>
            </div>
          </div>
        </div>
      </section>

      {/* ステップ1：基礎英語力の底上げ */}
      <section id="step1" className="step-detail">
        <div className="container">
          <h2 className="section-title">ステップ1：基礎英語力の底上げ</h2>
          <div className="step-description">
            <p>
              英語でのコミュニケーションに自信を持つために、まずは基礎固めから始めましょう。
              文法や語彙の理解を深めることよりも、英語を聞くことや話すことになれることが何よりも重要です。
            </p>
            <p>
              スピーキング、リスニングを中心に、発話することで聞き取れるようになる脳のメカニズムを利用し、
              英語への苦手意識や恐怖心が無くなるように基礎英語力の底上げを行います。
            </p>
          </div>
          <div className="step-features">
            <CardComponent 
              className="card-icon-top"
              icon="psychology"
              title="脳科学に基づいたアプローチ"
              description="言語習得の科学的メカニズムを活用した効率的な学習法"
            />
            <CardComponent 
              className="card-icon-top"
              icon="replay"
              title="反復練習の重視"
              description="適切な間隔での復習により長期記憶への定着を促進"
            />
            <CardComponent 
              className="card-icon-top"
              icon="adjust"
              title="実用的な内容に焦点"
              description="実際の留学生活で必要となるフレーズや表現を優先的に学習"
            />
          </div>
        </div>
      </section>

      {/* ステップ2：エッセイ添削の重要性 */}
      <section id="step2" className="step-detail alt-bg">
        <div className="container">
          <h2 className="section-title">ステップ2：エッセイ添削の重要性</h2>

          {/* Introductory text (moved here, full width) */}
          <p className="step-intro-text">
            アメリカの大学で成功するためには、学術的なライティングスキルが必要不可欠です。
            多くの日本人留学生が直面する最大の課題の一つが、英語でのアカデミックライティングの習得です。
          </p>

          {/* First content-grid (Difficulties & Support/Importance Text) */}
          <div className="step-content content-grid">
            {/* Column 1: Why Essay is Difficult */}
            <div className="content-text">
              <StylishTitle
                title="なぜ英語でのエッセイは難しいのか"
                size="medium"
                className="title-custom-underline"
              />
              <p>
                英語で記述する論文では、エッセイやレポートの評価において「内容」だけでなく「構造」が重視されます。
                優れた考察や分析を行っても、学術界で求められる独特の形式やルールに従っていなければ、高評価を得ることは困難です。
              </p>
              <IconListComponent
                items={[
                  { icon: 'check_circle', text: '明確な論理構造が必須（Introduction、Thesis、Body Paragraphs、Conclusion）' },
                  { icon: 'check_circle', text: 'アカデミックな語彙や表現の使用が求められる' },
                  { icon: 'check_circle', text: '適切な引用方法（APA、MLAなど）の厳密な遵守' },
                  { icon: 'check_circle', text: '批判的思考に基づく議論の展開' },
                  { icon: 'check_circle', text: '客観的な証拠や具体例による主張の裏付け' }
                ]}
                className="check-list mb-medium"
              />
              <p>
                起承転結のような定型的な型が、日本語と英語では異なっており、その違いを理解していないと
                優れた考察に基づく論文やエッセイ、レポートも正当に評価されないといったケースが、留学生の共通した課題です。
              </p>
            </div>
            <div className="support-box">
              <StylishTitle
                title="私たちのサポート体制"
                size="medium"
                className="title-custom-underline"
              />
              <p>当社では、海外の名門大学出身の専任コンサルタントが、きめ細かな添削サービスを提供しています。</p>
              <IconListComponent
                items={[
                  { icon: 'check_circle', text: '英語のエッセイで求められる文章構成の基礎から応用まで' },
                  { icon: 'check_circle', text: '各大学・学部特有の要求事項への対応' },
                  { icon: 'check_circle', text: '添削だけでなく、改善点の詳細な解説と実践的なアドバイス' },
                  { icon: 'check_circle', text: 'オンラインでの個別相談と継続的なサポート' }
                ]}
                className="check-list mb-medium"
              />
              <StylishTitle
                title="なぜ事前準備が重要か"
                size="medium"
                className="title-custom-underline mt-large"
              />
              <p>
                海外の大学では、入学後すぐに本格的なアカデミックライティングが求められます。
                準備が不十分な状態で留学を開始すると、授業についていけない、課題をこなせないという事態に陥りかねません。
              </p>
              <p>
                また、間違った引用をしてしまったり、引用先の記載漏れがあっただけで盗用（Plagiarism）とされ、
                Honor Council（学校内の裁判のようなもの）にかけられるなど、海外の大学は非常にプロフェッショナルでシビアです。
                最悪のケースでは、退学処分の場合もあります。
              </p>
            </div>
          </div>

          {/* New content-grid for benefits and important-note */}
          <div className="content-grid step2-subgrid">
            <div className="benefits">
              <h4><span className="material-symbols-outlined">task_alt</span> 事前に正しい知識とスキルを身につけることで</h4>
              <div className="benefit-item">入学後のスムーズな学習開始</div>
              <div className="benefit-item">高い学業成績の維持</div>
              <div className="benefit-item">充実した留学生活の実現</div>
            </div>
            <div className="important-note">
            <h4><span className="material-symbols-outlined">report_problem</span> 留学への不安と事前準備の重要性</h4>
              <p>
                何より重要なのは、多くの留学生が初期段階で抱える『留学への不安』
                この不安は、留学先での積極的な活動に大きな障壁となります。
              </p>
              <p>
                そして、その障壁は学習への積極的な取り組みや、コミュニケーションへの消極的な姿勢に影響を与え、
                大切な留学期間での成長を著しく阻害してしまいます。
              </p>
              <p>
                事前の準備は、留学期間すべての学習効率に大きな影響を与えるため、事前の準備が重要なのです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ステップ3：シミュレーション英会話 */}
      <section id="step3" className="step-detail">
        <div className="container">
          <h2 className="section-title">ステップ3：シミュレーション英会話</h2>
          <p className="simulation-intro">
            実際の留学生活で遭遇する様々なシチュエーションを想定し、実践的な英会話スキルを身につけます。
            専任コンサルタントとのロールプレイを通じて、自信を持って英語でコミュニケーションできる力を養います。
          </p>
        </div>
      </section>

      {/* シミュレーション英会話セクション - 共通コンポーネント */}
      <SimulationSection tables={simulationTables} />

      {/* 料金表セクション */}
      <section className="students-pricing">
        <div className="container">
          <h2 className="section-title">料金</h2>
          <div className="pricing-table-container">
            <table className="pricing-table horizontal-pricing">
              <thead>
                <tr>
                  <th></th> {/* Empty corner cell */}
                  {studentPricingData.headers.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {studentPricingData.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="row-label-cell">{row.label}</td>
                    {row.values.map((value, valueIndex) => (
                      <td key={valueIndex} className="price-value-cell" dangerouslySetInnerHTML={{ __html: value }}></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="pricing-note" dangerouslySetInnerHTML={{ __html: '<sup>※1</sup> エッセイ添削のみ。3ヶ月プラン修了者は¥1,490、6ヶ月プラン修了者は¥780で利用可' }}></p>
        </div>
      </section>
    </div>
  );
};

export default Students; 