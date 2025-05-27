import { useState } from 'react';
import '../styles/Business.css'; // CSSファイルを正しくインポート
// 共通コンポーネントをインポート
import SimulationSection from '../components/SimulationSection';
import HeroSection from '../components/HeroSection';
import CardComponent from '../components/CardComponent';
import ScrollFadeIn from '../components/ScrollFadeIn'; // Import ScrollFadeIn
import meetingImage from '../assets/images/ビジネスミーティング01.jpeg'; // Import image
import StylishTitle from '../components/StylishTitle';

// 4. 学習スケジュール - 表示：時間ごとのタイムブロック
const weekdaySchedule = [
  { time: '07:00', activity: '起床', type: 'daily' },
  { time: '08:00', activity: '通勤時間に単語学習', type: 'learning', duration: '15-20分' },
  { time: '09:00', activity: '仕事', type: 'daily' },
  { time: '12:00', activity: 'ランチタイムに単語の確認・リスニング', type: 'learning', duration: '20-30分' },
  { time: '13:00', activity: '仕事', type: 'daily' },
  { time: '18:00', activity: '退勤時間にリスニング 専任コンサルタントとチャット', type: 'learning', duration: '15-20分' },
  { time: '19:00', activity: '夕飯・お風呂・リラックスタイム', type: 'daily' },
  { time: '21:00', activity: 'TEDリスニング・スピーキング 週1回のセッション・シミュレーション英会話', type: 'learning', duration: '30分' },
  { time: '23:00', activity: '就寝', type: 'daily' },
];

// 週末スケジュールを土曜日と日曜日に分ける
const weekendSchedule = {
  saturday: [
    { time: '07:00', activity: '起床', type: 'daily' },
    { time: '08:00', activity: '英語学習・リスニング', type: 'learning', duration: '45-60分' },
    { time: '09:00', activity: '趣味やプライベートタイム', type: 'daily' },
    { time: '12:00', activity: '英会話', type: 'learning', duration: '90分' },
    { time: '15:00', activity: '趣味やプライベートタイム', type: 'daily' },
    { time: '19:00', activity: '夕飯・お風呂・リラックスタイム', type: 'daily' },
    { time: '21:00', activity: 'TEDリスニング・スピーキング 週1回のセッション・シミュレーション英会話', type: 'learning', duration: '60分' },
    { time: '23:00', activity: '就寝', type: 'daily' },
  ],
  sunday: [
    { time: '07:00', activity: '起床', type: 'daily' },
    { time: '08:00', activity: '英語学習・リスニング', type: 'learning', duration: '15-20分' },
    { time: '09:00', activity: '趣味やプライベートタイム', type: 'daily' },
    { time: '12:00', activity: 'シミュレーション英会話の復習', type: 'learning', duration: '30分' },
    { time: '15:00', activity: '趣味やプライベートタイム', type: 'daily' },
    { time: '19:00', activity: '夕飯・お風呂・リラックスタイム', type: 'daily' },
    { time: '21:00', activity: 'TEDリスニング・スピーキング 週1回のセッション・シミュレーション英会話', type: 'learning', duration: '60分' },
    { time: '23:00', activity: '就寝', type: 'daily' },
  ],
};

// 6. シミュレーション英会話①② - 表示：週数×場面トピック
const simulationData1 = [
  { week: '1-2', topic: '挨拶' },
  { week: '3-4', topic: '自己紹介' },
  { week: '5-6', topic: '道の聞き方/\n聞かれた際の答え方' },
  { week: '7-8', topic: '旅行編' },
  { week: '9-10', topic: 'ホテル' },
  { week: '11-12', topic: 'カフェ＆レストラン' },
];

const simulationData2 = [
  { week: '13-14', topic: 'ショッピング' },
  { week: '15-16', topic: '交通機関' },
  { week: '17-18', topic: 'ビジネスメール' },
  { week: '19-20', topic: 'ビジネスプレゼンテーション①' },
  { week: '21-22', topic: 'ビジネスプレゼンテーション②' },
  { week: '23-24', topic: 'カスタム' },
];

// シミュレーションのアコーディオンアイテム
const simulationAccordionItems1 = [
  { title: '挨拶', content: '基本的な挨拶表現から始まり、時間帯や状況に応じた適切な挨拶方法を学びます。また、初対面での自己紹介や名刺交換の際のマナーなども練習します。' },
  { title: '自己紹介', content: '自分の名前、出身、所属会社、役職などの基本情報を英語で伝える練習をします。また、相手の自己紹介を受けた後の適切な返答や質問の仕方も学びます。' },
  { title: '道の聞き方/聞かれた際の答え方', content: '道に迷った際に場所を尋ねる表現や、逆に道を尋ねられた時の丁寧な対応方法を学びます。方向や距離の表現、ランドマークを使った説明方法なども練習します。' },
  { title: '旅行編（チェックイン、観光）', content: '海外旅行でよく使うフレーズを学びます。ホテルでのチェックイン手続き、観光地での案内所でのやり取り、観光スポットでの質問などをロールプレイで練習します。' },
  { title: 'ホテル（チェックイン/アウト）', content: 'ホテルでのチェックインやチェックアウト時のやり取り、部屋のリクエスト、設備の使い方の質問、トラブル時の伝え方など、宿泊に関する様々なシーンを想定した会話を練習します。' },
  { title: 'カフェ＆レストラン（予約、注文）', content: 'レストランの予約や注文時のやり取り、特別なリクエスト（アレルギー対応など）の伝え方、会計時のやり取りなど、飲食店で必要なコミュニケーションを学びます。' },
];

const simulationAccordionItems2 = [
  { title: 'ショッピング（試着、会計）', content: 'ショッピング時に使える表現を学びます。商品について尋ねる方法、試着をお願いする表現、サイズや色の交換、値段交渉、支払い方法の確認など、買い物シーンでの会話を練習します。' },
  { title: '交通機関（電車、バス）', content: '電車やバスなどの公共交通機関を利用する際に必要な表現を学びます。切符の買い方、乗り場の尋ね方、遅延や乗り換えに関する質問など、移動時に役立つ会話を練習します。' },
  { title: 'ビジネスメール', content: 'ビジネスシーンで必要なメールの書き方を学びます。件名の付け方、適切な挨拶、用件の伝え方、締めくくりの表現など、フォーマルなメールコミュニケーションのコツを練習します。' },
  { title: 'ビジネスプレゼンテーション①', content: 'プレゼンテーションの基本構成や導入部分の作り方を学びます。聴衆の注意を引く開始方法、アジェンダの説明、背景情報の提供など、効果的なプレゼンテーションの土台作りを練習します。' },
  { title: 'ビジネスプレゼンテーション②', content: 'プレゼンテーションの本編と質疑応答に焦点を当てます。データの説明方法、提案や結論の伝え方、質問への対応方法など、説得力のあるプレゼンテーションスキルを磨きます。' },
  { title: 'カスタムマイズ', content: '受講者それぞれの業界や職種に特化したシミュレーションを行います。個別のビジネスシーンに合わせたボキャブラリーや表現方法を学び、実際の業務で即活用できるスキルを身につけます。' },
];

// 7. アコーディオン展開 - 内容：各テーマごとの細かい学習内容
const detailAccordionItems = [
  { title: 'ビジネスEメール特訓', content: '状況に応じた適切な表現、丁寧さのレベル調整、効果的な件名のつけ方など、実践的なEメールライティングスキルを習得します。' },
  { title: 'オンライン会議ファシリテーション', content: '議題設定、発言促進、時間管理、合意形成など、英語でのオンライン会議を円滑に進めるためのスキルをロールプレイ形式で学びます。' },
  { title: '異文化理解とコミュニケーション', content: '多様な文化的背景を持つ相手との円滑なコミュニケーションを図るための知識と対応方法を学びます。誤解を防ぎ、信頼関係を築くためのポイントを解説します。' },
  { title: 'プレゼンテーション実践演習', content: '構成、スライド作成、デリバリー、質疑応答まで、ビジネスシーンで求められる英語プレゼンテーションスキルを総合的にトレーニングします。' },
];

// ビジネスパーソン向け料金データ (from Pricing.tsx)
const businessPricingData = {
  headers: ['1ヶ月', '3ヶ月', '6ヶ月', '12ヶ月'],
  rows: [
    {
      label: '受講料',
      values: [
        '$1,480<sup class="footnote-marker">※1</sup>',
        '<s class="original-price">$4,400</s> → <strong>$3,980</strong>',
        '<s class="original-price">$8,880</s> → <strong>$7,480</strong>',
        '<s class="original-price">$17,760</s> → <strong>$13,980</strong>'
      ]
    },
    {
      label: '1ヶ月あたり',
      values: [
        '-',
        '<s class="original-price">$1,480</s> → <strong>$1,326</strong>',
        '<s class="original-price">$1,480</s> → <strong>$1,246</strong>',
        '<s class="original-price">$1,480</s> → <strong>$1,165</strong>'
      ]
    }
  ]
};

// 共通コンポーネント用のシミュレーションデータ
const simulationTables = [
  {
    title: 'シミュレーション英会話①',
    data: simulationData1,
    accordionItems: simulationAccordionItems1
  },
  {
    title: 'シミュレーション英会話②',
    data: simulationData2,
    accordionItems: simulationAccordionItems2
  }
];

const Business = () => {
  const [activeTab, setActiveTab] = useState<'weekday' | 'weekend'>('weekday');
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);
  
  const toggleAccordion = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <div className="business-page">
      {/* 1. ヒーローセクション */}
      <HeroSection 
        title="ビジネスパーソン向け英語コーチング" 
        subtitle="グローバルビジネスで成功するための英語力を、Engrowthと共に。" 
        bgColor="primary"
        textColor="light"
        align="center"
        height="medium"
      />

      {/* Introduction Section */}
      <section className="introduction-section section-padding">
        <div className="container">
          <StylishTitle 
            title="ビジネス英語、その先へ"
            subtitle="単語や文法だけではない、成果に繋がるコミュニケーション能力を。"
            align="left"
            size="large"
            className="title-custom-underline"
          />
          <div className="content-grid">
            <div className="content-text">
              <p>
                グローバル化が進む現代ビジネスにおいて、英語力は不可欠なスキルです。
                しかし、多くのビジネスパーソンが「使える英語」の壁に直面しています。
                Engrowthでは、インプット学習に加え、徹底的なアウトプットトレーニングと、
                ビジネスシーンで実際に求められる論理的思考力、異文化理解力、交渉力などを
                総合的に鍛え上げます。
              </p>
              <p>
                あなたのキャリア目標達成に向けた、最適な学習プランを個別に設計し、
                経験豊富なコンサルタントが伴走します。
              </p>
            </div>
            {/* Place the image here */}
            <div className="content-image">
              <img src={meetingImage} alt="英語でコミュニケーションをとるビジネスパーソン" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. 9つの強み グリッド表示 */}
      {/*
      mdファイル：
      3. 9つの強み グリッド表示
      形式：3カラム×3行（計9カード）
      内容：アイコン＋強調テキスト＋補足テキスト
      デザイン：カードホバー時に浮き上がり, 背景：#eeeeee, アクセント：#8b0000 または #cc0000
      */}
      <section className="business-strengths">
        <div className="container">
          <h2 className="section-title">Engrowth ビジネスプログラムの9つの強み</h2>
          <div className="strengths-grid">
            <ScrollFadeIn>
              <CardComponent className="card-icon-top" icon="support_agent" title="専任のコンサルタントによる毎日の学習サポート" />
            </ScrollFadeIn>
            <ScrollFadeIn>
              <CardComponent className="card-icon-top" icon="smartphone" title="エングロース受講生 専用アプリの提供" />
            </ScrollFadeIn>
            <ScrollFadeIn>
              <CardComponent className="card-icon-top" icon="psychology" title="脳科学×AIの学習サービスを提供" />
            </ScrollFadeIn>
            <ScrollFadeIn>
              <CardComponent className="card-icon-top" icon="dynamic_feed" title="アダプティブラーニングを採用したカスタムカリキュラム" />
            </ScrollFadeIn>
            <ScrollFadeIn>
              <CardComponent className="card-icon-top" icon="school" title="世界の有名大学出身あなたに併走" />
            </ScrollFadeIn>
            <ScrollFadeIn>
              <CardComponent className="card-icon-top" icon="translate" title={"現地で使える\"生きた英語\"の習得をサポート"} />
            </ScrollFadeIn>
            <ScrollFadeIn>
              <CardComponent className="card-icon-top" icon="edit_calendar" title="卒業後の学習プランも 専任コンサルタントが提案" />
            </ScrollFadeIn>
            <ScrollFadeIn>
              <CardComponent className="card-icon-top" icon="public" title="全国どこからでも受講可能 セッション時間も柔軟に対応" />
            </ScrollFadeIn>
            <ScrollFadeIn>
              <CardComponent className="card-icon-top" icon="record_voice_over" title="AIによる発音、会話判定で１人でも英会話練習が可能" />
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* 4. 学習スケジュール（平日／週末切替） */}
      {/*
      mdファイル：
      4. 学習スケジュール（平日／週末切替）
      機能：タブ切替（平日 / 週末）
      表示：時間ごとのタイムブロック
      カラー：学習ブロック：#ffe6e6, 日常ブロック：#f8f8f8, タイトル：#d3d3d3＋アクセント赤
      */}
      <section className="business-schedule">
        <div className="container">
          <h2 className="section-title">ビジネスコースの学習時間</h2>
          <div className="schedule-tabs">
            <button
              className={`tab ${activeTab === 'weekday' ? 'active' : ''}`}
              onClick={() => setActiveTab('weekday')}
            >
              平日
            </button>
            <button
              className={`tab ${activeTab === 'weekend' ? 'active' : ''}`}
              onClick={() => setActiveTab('weekend')}
            >
              週末
            </button>
          </div>
          
          {activeTab === 'weekday' ? (
            <div className="schedule-table-container">
              <table className="schedule-table">
                <tbody>
                  {weekdaySchedule.map((item, index) => (
                    <tr key={index} className={`schedule-item ${item.type}`}>
                      <td className="time-column">{item.time}</td>
                      <td className="activity-column">
                        {item.activity}
                        {item.duration && <span className="duration-tag">{item.duration}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="schedule-table-container weekend-tables">
              <div className="weekend-header">
                <div className="weekend-day">土</div>
                <div className="weekend-day">日</div>
              </div>
              <div className="weekend-tables-container">
                <table className="schedule-table weekend-table">
                  <tbody>
                    {weekendSchedule.saturday.map((item, index) => (
                      <tr key={index} className={`schedule-item ${item.type}`}>
                        <td className="time-column">{item.time}</td>
                        <td className="activity-column">
                          {item.activity}
                          {item.duration && <span className="duration-tag">{item.duration}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <table className="schedule-table weekend-table">
                  <tbody>
                    {weekendSchedule.sunday.map((item, index) => (
                      <tr key={index} className={`schedule-item ${item.type}`}>
                        <td className="time-column">{item.time}</td>
                        <td className="activity-column">
                          {item.activity}
                          {item.duration && <span className="duration-tag">{item.duration}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. 学習デザインの3つの柱 */}
      {/*
      mdファイル：
      5. 学習デザインの3つの柱
      形式：3カラムカード
      内容：生活スタイル対応, 進捗モニタリング, 習熟度に応じた柔軟対応
      演出：グラデ背景・ホバーアニメーション
      */}
       <section className="business-pillars">
        <div className="container">
          <h2 className="section-title">学習デザインの3つの柱</h2>
          <div className="pillars-grid">
            <CardComponent 
              className="card-icon-top"
              icon="schedule"
              title="生活スタイル対応"
              description="多忙な日々の中でも無理なく学習を継続できるよう、個々のライフスタイルに合わせた柔軟なプランニングを行います。"
            />
            <CardComponent 
              className="card-icon-top"
              icon="monitoring"
              title="進捗モニタリング"
              description="学習データに基づき進捗を可視化。定期的なフィードバックで課題を明確にし、学習効果を最大化します。"
            />
            <CardComponent 
              className="card-icon-top"
              icon="tune"
              title="習熟度に応じた柔軟対応"
              description="現在のレベルと目標達成に必要なスキルに基づき、カリキュラムを最適化。常に最適な負荷で学習を進めます。"
            />
          </div>
        </div>
      </section>

      {/* シミュレーション英会話セクション - 共通コンポーネントを使用 */}
      <SimulationSection tables={simulationTables} />

      {/* 7. アコーディオン展開（詳細学習内容） */}
      {/*
      mdファイル：
      7. アコーディオン展開（詳細学習内容）
      内容：各テーマごとの細かい学習内容
      形式：モバイル対応アコーディオン
      */}
      <section className="business-details">
        <div className="container">
          <h2 className="section-title">カスタムマイズ詳細学習テーマ例</h2>
          <div className="details-accordion">
            {detailAccordionItems.map((item, index) => (
              <div key={index} className={`accordion-item ${openAccordionIndex === index ? 'open' : ''}`}>
                <button
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.title}</span>
                  <span className="accordion-icon">{openAccordionIndex === index ? '-' : '+'}</span>
                </button>
                <div className="accordion-content">
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 料金表セクション */}
      {/*
      mdファイル：
      8. 料金表セクション
      比較対象：1ヶ月／3ヶ月／6ヶ月／12ヶ月
      デザイン：通常価格：#666, 割引価格：#8b0000, 矢印→で価格推移表現
      */}
      <section className="business-pricing">
        <div className="container">
          <h2 className="section-title">料金</h2>
          <div className="pricing-table-container">
            <table className="pricing-table horizontal-pricing">
              <thead>
                <tr>
                  <th></th> {/* Empty corner cell */}
                  {businessPricingData.headers.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {businessPricingData.rows.map((row, rowIndex) => (
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
          <p className="pricing-note" dangerouslySetInnerHTML={{ __html: '<sup>※1</sup> 1ヶ月プランは3ヶ月プラン以上を修了者のみが契約可' }}></p>
        </div>
      </section>
    </div>
  );
};

export default Business;