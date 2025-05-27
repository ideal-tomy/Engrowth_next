// import React from 'react'; // Removed unused import
import { Link } from 'react-router-dom';
import '../styles/Pricing.css'; // 新しいCSSファイルをインポート
import StylishTitle from '../components/StylishTitle';
import HeroSection from '../components/HeroSection'; // オプション: ページタイトル用
import IconListComponent from '../components/IconListComponent';

// ビジネスパーソン向け料金データ (新しい形式)
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

// 学生向け料金データ (新しい形式)
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

const Pricing = () => {
  return (
    <div className="pricing-page">
      {/* ヒーローセクション */}
      <HeroSection 
        title="料金プラン"
        subtitle="あなたに最適なプランをお選びいただけます"
        bgColor="light" // 他ページに合わせて調整 (例: light)
        textColor="dark" // 背景色に合わせて調整 (例: dark)
        align="center" // 他ページに合わせて調整 (例: center)
        height="medium" // 他ページに合わせて調整 (例: medium)
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
            <p className="footnote"><sup className="footnote-marker">※1</sup> 1ヶ月プランは3ヶ月プラン以上を修了者のみが契約可</p>
            {/* --- Business Service Summary (Below Footnote) --- */}
            <div className="service-summary-list">
              <h4 className="summary-list-title">主なサービス内容:</h4>
              <IconListComponent
                items={[
                  { icon: 'support_agent', text: '専任コンサルタントによる毎日の伴走サポート' },
                  { icon: 'psychology_alt', text: '脳科学・第二言語習得論に基づく科学的メソッド' },
                  { icon: 'model_training', text: 'ビジネスシーン特化の実践的シミュレーション英会話' },
                  { icon: 'school', text: '海外トップ大学・実務経験豊富なプロ講師陣' }
                ]}
                className="check-list" // スタイルは後で調整
              />
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
            <p className="footnote"><sup className="footnote-marker">※1</sup> エッセイ添削のみ。3ヶ月プラン修了者は$1,490、6ヶ月プラン修了者は$780で利用可</p>
            {/* --- Student Service Summary (Below Footnote) --- */}
            <div className="service-summary-list">
              <h4 className="summary-list-title">主なサービス内容:</h4>
              <IconListComponent
                items={[
                  { icon: 'school', text: '留学準備特化：基礎固めからアカデミック英語まで' },
                  { icon: 'edit_note', text: '専門家によるエッセイ添削・ライティング指導' },
                  { icon: 'record_voice_over', text: '留学生活で必須の場面を想定したシミュレーション英会話' },
                  { icon: 'support_agent', text: '学習習慣化と目標達成のための伴走サポート' }
                ]}
                className="check-list" // スタイルは後で調整
              />
            </div>
          </div>
        </section>

        {/* --- サービス概要と詳細へのリンク --- */}
        <section className="service-summary-section">
          <StylishTitle 
            title="詳しくは各詳細ページへ"
            align="left"
            size="medium"
            className="title-custom-underline"
          />
          {/* === 概要テキストは要調整 === */}
          <p>すべてのプランには、基本的な学習サポート、オンライン教材へのアクセス、定期的な進捗確認が含まれます。個別のニーズに合わせたカスタマイズも可能です。</p>
          <p>より詳しいサービス内容や、各プラン独自の特典については、以下のページをご覧ください。</p>
          
          <div className="action-buttons">
            <Link to="/services" className="secondary-button">サービス全体について</Link>
            <Link to="/business" className="primary-button">ビジネスパーソン向け詳細</Link>
            <Link to="/students" className="primary-button">学生向け詳細</Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Pricing; 