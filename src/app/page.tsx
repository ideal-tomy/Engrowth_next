import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
// import StylishTitle from '@/components/StylishTitle'; // StylishTitle のインポートをコメントアウト
import CardComponent from '@/components/CardComponent';

// Data for Features section
const featureItems = [
  {
    icon: 'psychology',
    title: '第二言語習得メソッド',
    description: '科学的なアプローチに基づいた効果的な学習方法を提供'
  },
  {
    icon: 'support_agent',
    title: '伴走型サポート',
    description: '一人一人に合わせた丁寧なサポートで確実な成長を実現'
  },
  {
    icon: 'business_center',
    title: '実践的な学習環境',
    description: '実際のビジネスシーンを想定した実践的な学習プログラム'
  }
];

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />

      {/* 新しい「エングロースとは」セクション */}
      <section className="home-about-us section-padding alt-bg">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">エングロースとは</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            エングロースは脳科学、言語学、心理学など科学的なアプローチを基に作られたプログラムです。アダプティブラーニングを採用し一人ひとりにカスタマイズされた学習内容・スケジュールを、海外の名門大学出身の専任コンサルタントが二人三脚でサポートします。
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/business" className="new-primary-button">
              ビジネス
            </Link>
            <Link href="/students" className="new-primary-button">
              学生
            </Link>
            <Link href="/vision" className="new-primary-button">
              ビジョン
            </Link>
          </div>
        </div>
      </section>

      <section className="home-vision section-padding">
        <div className="container vision-grid">
          <div className="vision-text">
            <h2 className="vision-section-title">私たちが目指す社会</h2>
            <p>
              経済的な制約や学習方法への不安から、多くの人が可能性を閉ざしています。
              私たちは、誰もが挑戦できる社会を目指し、Engrowthを設立しました。
            </p>
            <Link href="/vision" className="secondary-button">私たちの想い</Link> 
          </div>
          <div className="content-image image-right vision-image-container">
            <Image
              src="/images/vision01.png" 
              alt="Engrowth Vision" 
              width={500}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="home-features section-padding alt-bg">
        <div className="container">
          {/* <StylishTitle 
            title="Engrowthが提供する独自の価値"
            align="left"
            size="large"
            className="title-custom-underline"
          /> */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 title-custom-underline">Engrowthが提供する独自の価値</h2> {/* StylishTitleの代替 */}
          <div className="feature-grid card-grid">
            {featureItems.map((item, index) => (
              <CardComponent
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                className="card-icon-top"
              />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/services" className="primary-button">サービス詳細を見る</Link>
          </div>
        </div>
      </section>

      <section className="home-target section-padding">
        <div className="container">
          {/* <StylishTitle 
            title="あなたの目的達成を最適化"
            align="left"
            size="large"
            className="title-custom-underline"
          /> */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 title-custom-underline">あなたの目的達成を最適化</h2> {/* StylishTitleの代替 */}
          <div className="target-grid card-grid">
            <CardComponent 
              title="ビジネスパーソン向け"
              backgroundImageUrl="/images/ビジネスミーティング01.jpeg"
              className="service-card"
            >
              <p>グローバルな舞台で活躍するための実践的英語力を習得。キャリアアップを加速させます。</p>
              <Link href="/business" className="primary-button">詳細を見る</Link>
            </CardComponent>
            <CardComponent 
              title="学生向け"
              backgroundImageUrl="/images/キャンパスライフ01.webp"
              className="service-card"
            >
              <p>留学や国際的なキャリアを見据え、アカデミックな英語力と異文化理解力を養います。</p>
              <Link href="/students" className="primary-button">詳細を見る</Link>
            </CardComponent>
          </div>
        </div>
      </section>

      <section className="home-support section-padding alt-bg">
        <div className="container support-grid">
          <div className="support-title">
            {/* <StylishTitle
              title="安心して学習を始めるために"
              size="large"
              className="title-custom-underline"
            /> */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4 title-custom-underline">安心して学習を始めるために</h2> {/* StylishTitleの代替 */}
            <p className="support-intro-text">
              学習を始める前の疑問や不安は、こちらで解消できます。
            </p>
          <Image
              src="/images/top06.png" 
              alt="安心して学習を始めるために" 
              width={500}
              height={300}
              className="support-image"
            />
          </div>
          <div className="support-links-detailed">
            <div className="support-link-items">
              <div className="support-link-item">
                <span className="material-symbols-outlined support-icon">quiz</span>
                <div className="support-link-text">
                  <h4><Link href="/faq">よくあるご質問</Link></h4>
                  <p>サービスや学習方法について多く寄せられる質問と回答をまとめました。</p>
                </div>
              </div>
              <div className="support-link-item">
                <span className="material-symbols-outlined support-icon">payments</span>
                <div className="support-link-text">
                  <h4><Link href="/pricing">料金プラン</Link></h4>
                  <p>各プランの詳細な料金体系はこちらでご確認いただけます。</p>
                </div>
              </div>
              <div className="support-link-item">
                <span className="material-symbols-outlined support-icon">contact_support</span>
                 <div className="support-link-text">
                  <h4><Link href="/contact">直接相談する</Link></h4>
                  <p>個別のご質問やご相談はこちらからどうぞ。</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
