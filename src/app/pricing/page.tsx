'use client';

import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import StylishTitle from '@/components/StylishTitle';

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

const studentPricingData = {
  headers: ['1ヶ月', '3ヶ月', '6ヶ月', '12ヶ月'],
  rows: [
    {
      label: '受講料',
      values: [
        '$1,780<sup class="footnote-marker">※1</sup>',
        '<s class="original-price">$5,340</s> → <strong>$4,980</strong>',
        '<s class="original-price">$10,680</s> → <strong>$9,480</strong>',
        '<s class="original-price">$21,360</s> → <strong>$17,980</strong>'
      ]
    },
    {
      label: '1ヶ月あたり',
      values: [
        '-',
        '<s class="original-price">$1,780</s> → <strong>$1,660</strong>',
        '<s class="original-price">$1,780</s> → <strong>$1,580</strong>',
        '<s class="original-price">$1,780</s> → <strong>$1,498</strong>'
      ]
    }
  ]
};

export default function Pricing() {
  return (
    <div className="pricing-page">
      <HeroSection 
        title="料金プラン"
        subtitle="あなたに最適なプランをお選びいただけます"
        bgColor="solid"
        textColor="dark"
        align="center"
        height="medium"
      />
      <div className="container section-padding">
        {/* --- ビジネスパーソン向け料金 --- */}
        <section className="pricing-section">
          <StylishTitle 
            title="ビジネスパーソン向け料金"
            align="left"
            size="large"
            className="title-custom-underline"
          />
          <div className="pricing-table-container">
            <table className="pricing-table horizontal-pricing">
              <thead>
                <tr>
                  <th></th>
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
            <p className="footnote"><sup className="footnote-marker">※1</sup> 1ヶ月プランは3ヶ月プラン以上を修了者のみが契約可</p>
            <div className="service-summary-list mt-4">
              <h4 className="summary-list-title">主なサービス内容:</h4>
              <ul className="check-list list-disc pl-6">
                <li>専任コンサルタントによる毎日の伴走サポート</li>
                <li>脳科学・第二言語習得論に基づく科学的メソッド</li>
                <li>ビジネスシーン特化の実践的シミュレーション英会話</li>
                <li>海外トップ大学・実務経験豊富なプロ講師陣</li>
              </ul>
            </div>
          </div>
        </section>
        {/* --- 学生向け料金 --- */}
        <section className="pricing-section">
          <StylishTitle 
            title="学生向け料金"
            align="left"
            size="large"
            className="title-custom-underline"
          />
          <div className="pricing-table-container">
            <table className="pricing-table horizontal-pricing">
              <thead>
                <tr>
                  <th></th>
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
            <p className="footnote"><sup className="footnote-marker">※1</sup> エッセイ添削のみ。3ヶ月プラン修了者は$1,490、6ヶ月プラン修了者は$780で利用可</p>
            <div className="service-summary-list mt-4">
              <h4 className="summary-list-title">主なサービス内容:</h4>
              <ul className="check-list list-disc pl-6">
                <li>留学準備特化：基礎固めからアカデミック英語まで</li>
                <li>専門家によるエッセイ添削・ライティング指導</li>
                <li>留学生活で必須の場面を想定したシミュレーション英会話</li>
                <li>学習習慣化と目標達成のための伴走サポート</li>
              </ul>
            </div>
          </div>
        </section>
        {/* --- サービス概要と詳細へのリンク --- */}
        <section className="service-summary-section mt-12">
          <StylishTitle 
            title="詳しくは各詳細ページへ"
            align="left"
            size="medium"
            className="title-custom-underline"
          />
          <p>すべてのプランには、基本的な学習サポート、オンライン教材へのアクセス、定期的な進捗確認が含まれます。個別のニーズに合わせたカスタマイズも可能です。</p>
          <p>より詳しいサービス内容や、各プラン独自の特典については、以下のページをご覧ください。</p>
          <div className="action-buttons mt-6 flex flex-wrap gap-4">
            <Link href="/services" className="secondary-button">サービス全体について</Link>
            <Link href="/business" className="primary-button">ビジネスパーソン向け詳細</Link>
            <Link href="/students" className="primary-button">学生向け詳細</Link>
          </div>
        </section>
      </div>
    </div>
  );
} 