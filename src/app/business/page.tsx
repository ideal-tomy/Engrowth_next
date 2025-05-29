'use client';

import { useState } from 'react';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import CardComponent from '@/components/CardComponent';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import StylishTitle from '@/components/StylishTitle';
import SimulationSection from '@/components/SimulationSection';

// 学習スケジュールデータ
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

// シミュレーションデータ
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

// シミュレーションテーブルデータ
const simulationTables = [
  {
    title: 'シミュレーション英会話①',
    imageSrc: '/images/case01.png',
    data: simulationData1,
    accordionItems: simulationAccordionItems1
  },
  {
    title: 'シミュレーション英会話②',
    imageSrc: '/images/case02.png',
    data: simulationData2,
    accordionItems: simulationAccordionItems2
  }
];

export default function Business() {
  const [activeTab, setActiveTab] = useState<'weekday' | 'weekend'>('weekday');

  return (
    <div className="business-page">
      <HeroSection 
        title="ビジネスパーソン向け英語コーチング" 
        subtitle="グローバルビジネスで成功するための英語力を、Engrowthと共に。" 
        bgColor="gradient"
        textColor="light"
        align="center"
        height="medium"
      />

      <section className="introduction-section section-padding" style={{ background: '#f7f7fa', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: '-0.7rem', marginLeft: '2px' }}>
            <span style={{fontSize: '2.1rem', verticalAlign: 'middle', color: '#8b0000'}}>💼</span>
          </div>
          <StylishTitle 
            title="ビジネス英語、その先へ"
            subtitle="単語や文法だけではない、成果に繋がるコミュニケーション能力を。"
            align="left"
            size="large"
            className="title-custom-underline"
          />
          <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center', marginTop: '2.5rem' }}>
            <div className="content-text" style={{ fontSize: '1.13rem', lineHeight: 1.9, color: '#222', fontWeight: 500 }}>
              <div style={{ borderLeft: '4px solid #cc0000', paddingLeft: '1.2rem', marginBottom: '1.5rem', fontSize: '1.08rem', color: '#8b0000', fontWeight: 600 }}>
                グローバル時代のキャリアを切り拓く、成果直結型の英語力を。
              </div>
              <p style={{ marginBottom: '1.2rem' }}>
                グローバル化が進む現代ビジネスにおいて、英語力は不可欠なスキルです。しかし、多くのビジネスパーソンが「使える英語」の壁に直面しています。Engrowthでは、インプット学習に加え、徹底的なアウトプットトレーニングと、ビジネスシーンで実際に求められる論理的思考力、異文化理解力、交渉力などを総合的に鍛え上げます。
              </p>
              <p>
                あなたのキャリア目標達成に向けた、最適な学習プランを個別に設計し、経験豊富なコンサルタントが伴走します。
              </p>
            </div>
            <div className="content-image" style={{ textAlign: 'center' }}>
              <Image 
                src="/images/ビジネスミーティング01.jpeg"
                alt="英語でコミュニケーションをとるビジネスパーソン"
                width={500} 
                height={300} 
                style={{ borderRadius: '18px', boxShadow: '0 8px 32px rgba(204,0,0,0.10)', maxWidth: '100%', height: 'auto', minWidth: 320 }}
                className="" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="business-strengths section-padding alt-bg">
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
              <CardComponent className="card-icon-top" icon="translate" title="現地で使える生きた英語の習得をサポート" />
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

      <section className="business-schedule section-padding" style={{ background: '#f8f8f8' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: '#8b0000', textAlign: 'center', fontWeight: 'bold', fontSize: '2.2rem', marginBottom: '1.5rem' }}>
            ビジネスコースの学習時間
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <button
              className={`tab-custom ${activeTab === 'weekday' ? 'active' : ''}`}
              style={{
                background: activeTab === 'weekday' ? '#cc0000' : '#d3d3d3',
                color: activeTab === 'weekday' ? '#fff' : '#555',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                border: 'none',
                borderTopLeftRadius: '6px',
                borderBottomLeftRadius: '6px',
                padding: '0.8rem 2.5rem',
                cursor: 'pointer',
                transition: 'background 0.3s, color 0.3s',
              }}
              onClick={() => setActiveTab('weekday')}
            >
              平日
            </button>
            <button
              className={`tab-custom ${activeTab === 'weekend' ? 'active' : ''}`}
              style={{
                background: activeTab === 'weekend' ? '#cc0000' : '#d3d3d3',
                color: activeTab === 'weekend' ? '#fff' : '#555',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                border: 'none',
                borderTopRightRadius: '6px',
                borderBottomRightRadius: '6px',
                padding: '0.8rem 2.5rem',
                cursor: 'pointer',
                transition: 'background 0.3s, color 0.3s',
              }}
              onClick={() => setActiveTab('weekend')}
            >
              週末
            </button>
          </div>
          {activeTab === 'weekday' ? (
            <div className="schedule-table-container" style={{ overflowX: 'auto', maxWidth: '1000px', margin: '0 auto' }}>
              <table className="schedule-table" style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                <tbody>
                  {weekdaySchedule.map((item, index) => (
                    <tr key={index} style={{ background: item.type === 'learning' ? '#ffe6e6' : '#fff' }}>
                      <td style={{ width: '80px', fontWeight: 'bold', textAlign: 'center', padding: '1rem', border: '1px solid #eee' }}>{item.time}</td>
                      <td style={{ textAlign: 'left', padding: '1rem', border: '1px solid #eee' }}>
                        {item.activity}
                        {item.duration && (
                          <span style={{
                            display: 'inline-block',
                            background: 'rgba(204,0,0,0.12)',
                            color: '#cc0000',
                            padding: '0.2em 0.8em',
                            borderRadius: '4px',
                            fontSize: '0.95em',
                            marginLeft: '0.8em',
                            fontWeight: 500,
                          }}>{item.duration}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="schedule-table-container weekend-tables" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div style={{ display: 'flex', gap: '2%', marginBottom: '1.5rem' }}>
                <div style={{ width: '48%', background: '#ffb3b3', color: '#333', textAlign: 'center', fontWeight: 'bold', fontSize: '1.3rem', borderRadius: '6px', padding: '0.5rem' }}>土</div>
                <div style={{ width: '48%', background: '#ffb3b3', color: '#333', textAlign: 'center', fontWeight: 'bold', fontSize: '1.3rem', borderRadius: '6px', padding: '0.5rem' }}>日</div>
              </div>
              <div style={{ display: 'flex', gap: '2%' }}>
                <table className="schedule-table weekend-table" style={{ width: '48%', borderCollapse: 'collapse', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                  <tbody>
                    {weekendSchedule.saturday.map((item, index) => (
                      <tr key={index} style={{ background: item.type === 'learning' ? '#ffe6e6' : '#fff' }}>
                        <td style={{ width: '80px', fontWeight: 'bold', textAlign: 'center', padding: '1rem', border: '1px solid #eee' }}>{item.time}</td>
                        <td style={{ textAlign: 'left', padding: '1rem', border: '1px solid #eee' }}>
                          {item.activity}
                          {item.duration && (
                            <span style={{
                              display: 'inline-block',
                              background: 'rgba(204,0,0,0.12)',
                              color: '#cc0000',
                              padding: '0.2em 0.8em',
                              borderRadius: '4px',
                              fontSize: '0.95em',
                              marginLeft: '0.8em',
                              fontWeight: 500,
                            }}>{item.duration}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table className="schedule-table weekend-table" style={{ width: '48%', borderCollapse: 'collapse', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                  <tbody>
                    {weekendSchedule.sunday.map((item, index) => (
                      <tr key={index} style={{ background: item.type === 'learning' ? '#ffe6e6' : '#fff' }}>
                        <td style={{ width: '80px', fontWeight: 'bold', textAlign: 'center', padding: '1rem', border: '1px solid #eee' }}>{item.time}</td>
                        <td style={{ textAlign: 'left', padding: '1rem', border: '1px solid #eee' }}>
                          {item.activity}
                          {item.duration && (
                            <span style={{
                              display: 'inline-block',
                              background: 'rgba(204,0,0,0.12)',
                              color: '#cc0000',
                              padding: '0.2em 0.8em',
                              borderRadius: '4px',
                              fontSize: '0.95em',
                              marginLeft: '0.8em',
                              fontWeight: 500,
                            }}>{item.duration}</span>
                          )}
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

      <SimulationSection tables={simulationTables} />
    </div>
  );
} 