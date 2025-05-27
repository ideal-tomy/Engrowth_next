import React from 'react';
import Image from 'next/image';

  const feedbackItems = [
    { icon: 'check_circle', text: '自分で出力する' },
    { icon: 'check_circle', text: '直してもらう' },
    { icon: 'check_circle', text: '精密にフィードバックされる' },
  { icon: 'check_circle', text: '体系的な介入による現在地の分析' },
  ];

const Reason1Content: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* 1. タイトル＋リード文（グラデーション背景＋イメージ画像） */}
      <section className="relative bg-gradient-to-r from-blue-100 via-purple-50 to-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 drop-shadow-lg">
            <span className="text-blue-600">「英語を第二言語として習得したコンサルタント」</span>の圧倒的な価値
          </h2>
          <p className="text-lg text-blue-800 font-semibold mb-2">
            なぜEngrowthでは<strong className="bg-yellow-100 text-yellow-700 px-2 rounded">「日本人コンサルタント」</strong>にこだわるのか
          </p>
          <p className="text-gray-700">
            英語学習は、単に知識を溜めるだけでは成功しません。「体験」と「慣れ」を経て、言語を自然に使えるようになるためのプロセスが必要です。<br />
            この過程では、無視できない<strong className="text-blue-700 font-bold">「心理的安全性」</strong>が重要です。
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          {/* 仮画像：日本人コンサルタントのイメージ（例：スーツ姿で親しみやすい雰囲気） */}
          <Image
            src="/images/consultant_sample.jpg"
            alt="日本人コンサルタントのイメージ（例：スーツ姿で親しみやすい雰囲気）"
            width={288}
            height={192}
            className="rounded-xl shadow-md object-cover w-72 h-48"
          />
        </div>
      </section>
      
      {/* 2. 伴走する側の成功体験（カード型＋イメージ） */}
      <section>
        <h3 className="text-2xl font-bold text-blue-900 mb-6">伴走する側の成功体験が、学習者を確実に導く</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">🛡️</span>
            <h4 className="text-lg font-bold text-blue-700 mb-1">心理的安全性の確保</h4>
            <p className="text-gray-700 text-center">同じ母国語を持ち、第二言語習得の難しさを知るコンサルタントが、学習者の不安を取り除き、確実な成長を促します。</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">🧠</span>
            <h4 className="text-lg font-bold text-blue-700 mb-1">第二言語習得メカニズムの理解</h4>
            <p className="text-gray-700 text-center">英語を第二言語として習得した経験を持つコンサルタントが、効果的な学習方法を提供します。</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">🏆</span>
            <h4 className="text-lg font-bold text-blue-700 mb-1">成功体験の共有</h4>
            <p className="text-gray-700 text-center">自らも第二言語習得の道を成功したコンサルタントだからこそ、学習者を確実に成長ルートへ導くことができます。</p>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          {/* 仮画像：成功体験の共有イメージ（例：笑顔のグループ、達成感） */}
          <Image
            src="/images/success_sample.jpg"
            alt="成功体験の共有イメージ（例：笑顔のグループ、達成感）"
            width={256}
            height={160}
            className="rounded-lg shadow object-cover w-64 h-40"
          />
        </div>
      </section>
      
      {/* 3. ネイティブスピーカーでは不十分な理由（淡色背景＋テキスト強調） */}
      <section className="bg-purple-50 rounded-xl shadow-inner p-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">なぜネイティブスピーカーでは不十分なのか</h3>
        <p className="text-lg text-blue-800 font-semibold mb-2">
          <strong className="text-blue-700 font-bold">第一言語と第二言語の習得メカニズムの違い</strong>を理解していないと、学習者は絶対に成功できません。
        </p>
        <p className="text-gray-700">
          第一言語は、幼少期の記憶システムを通じて無意識的に習得されます。一方、第二言語習得は、対話意識、意図的記憶を駆使する、全く異なるプロセスを要します。
        </p>
        <p className="text-gray-700 mt-2">
          <strong className="text-blue-700 font-bold">日本人に必要なのは「第二言語習得の成功者」</strong>です。
        </p>
        <p className="text-gray-700">
          同じ母国語をもつ成功者だからこそ、第二言語習得者に必要なマインドセットとプロセスを確実にサポートできます。
        </p>
      </section>

      {/* 4. 脳科学的に証明された最適ルート（カード＋リスト＋イメージ） */}
      <section className="bg-blue-50 rounded-2xl shadow-inner p-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">脳科学的に証明された「第二言語習得の最適ルート」</h3>
        <div className="mb-4">
          <h4 className="font-bold text-blue-700">聞くだけ学習・独学学習では伸びない理由</h4>
          <p className="text-gray-700">オーディオを聞く、ドラマを見る、単語を覚える。これらは「流入するだけ」の活動でしかありません。</p>
          <p className="text-gray-700">実際に言語を話せるようになるためには、以下が全て欠かせません。</p>
          <ul className="list-disc pl-6 text-gray-700">
            {feedbackItems.map((item, idx) => (
              <li key={idx} className="mb-1 flex items-center"><span className="text-green-600 mr-2">✔️</span>{item.text}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-bold text-blue-700">体系的な介入とフィードバックの重要性</h4>
          <p className="text-gray-700">成長は「体系的な介入」による現在地の分析と、適切なフィードバックを繰り返すことで成立します。</p>
        </div>
        <div className="flex justify-center mt-6">
          {/* 仮画像：サポート・フィードバックのイメージ（例：コンサルタントがサポートする様子） */}
          <Image
            src="/images/support_sample.jpg"
            alt="サポート・フィードバックのイメージ（例：コンサルタントがサポートする様子）"
            width={256}
            height={160}
            className="rounded-lg shadow object-cover w-64 h-40"
          />
        </div>
      </section>
      
      {/* 5. 留学経験・学位取得の価値（グラデーション背景＋イメージ） */}
      <section className="bg-gradient-to-r from-yellow-100 via-orange-50 to-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h4 className="text-xl font-bold text-orange-700 mb-2">留学経験･英語での学位取得が証明する本物の英語力</h4>
          <p className="text-gray-700">
            海外の大学を卒業するということは、「単に英語を話せる」だけではありません。「英語で思考し、講義を理解し、論文を書き、議論する」ことが求められます。<br />
            そしてこれは、第一言語として英語を習得した人と同等の能力を求められるのです。
          </p>
          <p className="text-gray-700 mt-2">
            <strong className="text-orange-700 font-bold">英語で専門分野を学べる者だけが持つ「教える力」</strong>があります。
          </p>
          <p className="text-gray-700">
            実際に英語で学問を継続し、自分のものとした者だからこそ、「どこで迷い」「どのプロセスが区切りになる」を的確に把握し、学習者を確実にサポートできます。
          </p>
          </div>
        <div className="flex-1 flex justify-center">
          {/* 仮画像：留学・学位取得のイメージ（例：卒業式、学位証書、海外の大学キャンパス） */}
          <Image
            src="/images/degree_sample.jpg"
            alt="留学・学位取得のイメージ（例：卒業式、学位証書、海外の大学キャンパス）"
            width={256}
            height={160}
            className="rounded-lg shadow object-cover w-64 h-40"
            />
        </div>
      </section>
    </div>
  );
};

export default Reason1Content; 