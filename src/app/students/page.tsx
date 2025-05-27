'use client';

import HeroSection from '@/components/HeroSection';
import CardComponent from '@/components/CardComponent';
import StylishTitle from '@/components/StylishTitle';
import SimulationSection from '@/components/SimulationSection';
import Image from 'next/image';
import ScrollFadeIn from '@/components/ScrollFadeIn';

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

export default function Students() {
  return (
    <div className="students-page">
      <HeroSection 
        title="学生向け英語コーチング"
        subtitle="留学・進学・キャリアのための英語力を、Engrowthで。"
        bgColor="gradient"
        textColor="light"
        align="center"
        height="medium"
      />

      <section className="introduction-section section-padding">
        <div className="container">
          <StylishTitle 
            title="学生英語、その先へ"
            subtitle="単語や文法だけでなく、世界で活躍するための実践力を。"
            align="left"
            size="large"
            className="title-custom-underline"
          />
          <div className="content-grid">
            <div className="content-text">
              <p>
                海外留学や国際的なキャリアを目指す学生にとって、英語力は不可欠なスキルです。
                Engrowthでは、科学的根拠に基づいた英語学習プログラムで、
                自信を持って英語で自己表現できる状態へと導きます。
              </p>
              <p>
                あなたの目標達成に向けた最適な学習プランを個別に設計し、
                経験豊富なコンサルタントが伴走します。
              </p>
            </div>
            <div className="content-image student-feature-image">
              <Image 
                src="/images/留学生活01.jpeg"
                alt="海外キャンパスで学ぶ学生"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="students-persona section-padding alt-bg">
        <div className="container">
          <h2 className="section-title">こんな方におすすめ</h2>
          <div className="persona-grid">
            <ScrollFadeIn>
              <CardComponent 
                className="card-icon-top"
                icon="sentiment_dissatisfied" 
                title="英語に苦手意識がある"
                description="文法や単語は知っているのに、実践で使えない方"
              />
            </ScrollFadeIn>
            <ScrollFadeIn>
              <CardComponent 
                className="card-icon-top"
                icon="flight_takeoff" 
                title="留学・進学を目指す"
                description="海外大学への進学や留学を考えている方"
              />
            </ScrollFadeIn>
            <ScrollFadeIn>
              <CardComponent 
                className="card-icon-top"
                icon="work"
                title="就活で必要"
                description="外資系企業への就職を視野に入れている方"
              />
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      <SimulationSection tables={simulationTables} />
    </div>
  );
} 