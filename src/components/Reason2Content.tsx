import React from 'react';
import Image from 'next/image';

  const failureReasons = [
    {
    title: 'インプット偏重',
    description: '聞き流し中心の学習では、脳が英語を処理する回路が形成されません。',
    icon: '📥',
    },
    {
    title: 'アウトプット不足',
    description: '実際に話す練習が圧倒的に不足している状態では、英語を使いこなす能力は身につきません。',
    icon: '📤',
    },
    {
    title: '科学的アプローチ不在',
    description: '習慣化に対する科学的なアプローチなしでは、継続的な成長は見込めません。',
    icon: '🧪',
  },
  ];

  const fiveSteps = [
    {
    title: '1. INPUT（インプット）の質と量',
    description: '「意識的に」スピード＋リスニング力を高め、視聴できる言語範囲を広げます。',
    icon: '📚',
    },
    {
    title: '2. OUTPUT（アウトプット）の実践',
    description: 'とにかく「言葉に出す」こと。語彙、表現をすぐに使う習慣をつけます。',
    icon: '🗣️',
    },
    {
    title: '3. フィードバックを受ける',
    description: '「作ったままで済ませない」。誤りを正し、正しいパターンを繰り返します。',
    icon: '📝',
    },
    {
    title: '4. 修正・改善を繰り返す',
    description: '加速学習のスパイラルを続け、着実にレベルアップします。',
    icon: '🔄',
    },
    {
    title: '5. 習慣化で自動的に継続',
    description: '日常的に、無理なく繰り返す環境を作り、英語学習を習慣化します。',
    icon: '⏱️',
  },
  ];

  const slaItems = [
    { icon: 'arrow_forward', text: '学習者は「インプット（入力）」の質、量を統制すると同時に' },
    { icon: 'arrow_forward', text: '「アウトプット（出力）」で実際に使われる言語のスキルを高める' },
  { icon: 'arrow_forward', text: 'これを続けることで自動化（オートマティション）が起こる' },
  ];

  const cognitiveItems = [
    { icon: 'arrow_forward', text: '最初は意識的な努力を注ぎ込む必要がある' },
    { icon: 'arrow_forward', text: '繰り返しで「意識しなくても出来る」に変わる' },
  { icon: 'arrow_forward', text: 'これにより「言語スパンの自動化」が達成される' },
  ];

const Reason2Content: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* 1. タイトル＋リード文（グラデーション背景＋イメージ画像） */}
      <section className="relative bg-gradient-to-r from-green-100 via-blue-50 to-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 drop-shadow-lg">
            科学的に裏付けられた<br className="hidden md:block" />
            <span className="text-green-600">「効率的英語習得メカニズム」</span>
          </h2>
          <p className="text-lg text-blue-800 font-semibold mb-2">
            <strong className="bg-yellow-100 text-yellow-700 px-2 rounded">「努力しても伸びない」</strong>を科学的に撃破する
          </p>
          <p className="text-gray-700">
            科学的に正しい方法に基づけば、誰でも確実に英語を話せるようになります。<br />
            そのカギは<strong className="text-blue-700 font-bold">「第二言語習得メカニズム」と「脳科学」</strong>への正しい理解です。
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          {/* 仮画像：脳科学・学習イメージ（例：脳のイラストや学習風景） */}
          <Image
            src="/images/science_sample.jpg"
            alt="脳科学・学習イメージ（例：脳のイラストや学習風景）"
            width={288}
            height={192}
            className="rounded-xl shadow-md object-cover w-72 h-48"
          />
        </div>
      </section>
      
      {/* 2. 英会話教室の問題点（カード型＋アイコン＋イメージ画像） */}
      <section>
        <h3 className="text-2xl font-bold text-blue-900 mb-6">なぜ多くの英会話教室では話せるようにならないのか</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {failureReasons.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <span className="text-4xl mb-2">{item.icon}</span>
              <h4 className="text-lg font-bold text-blue-700 mb-1">{item.title}</h4>
              <p className="text-gray-700 text-center">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          {/* 仮画像：失敗例イメージ（例：悩む人物、英会話教室のイラスト） */}
          <Image
            src="/images/failure_sample.jpg"
            alt="失敗例イメージ（例：悩む人物、英会話教室のイラスト）"
            width={256}
            height={160}
            className="rounded-lg shadow object-cover w-64 h-40"
          />
        </div>
      </section>
      
      {/* 3. 本質理解（淡色背景＋テキスト強調） */}
      <section className="bg-blue-50 rounded-xl shadow-inner p-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">本質を理解すれば誰でも「話せる」ようになる</h3>
        <p className="text-lg text-blue-800 font-semibold mb-2">
          英語習得には必ず必要な<strong className="text-blue-700 font-bold">"5つのステップ"</strong>があります。
        </p>
        <p className="text-gray-700">
          これらを正しく実践することで、誰でも着実に英語力を伸ばすことが可能です。
        </p>
      </section>
      
      {/* 4. 5つのステップ（横並びカード＋アイコン＋イラスト） */}
      <section className="bg-blue-50 rounded-2xl shadow-inner p-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">「5つのステップ」</h3>
        <div className="grid md:grid-cols-5 gap-4">
          {fiveSteps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
              <span className="text-3xl mb-2">{step.icon}</span>
              <h4 className="text-base font-bold text-blue-700 mb-1">{step.title}</h4>
              <p className="text-gray-700 text-center">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          {/* 仮画像：成長・ステップアップのイメージ（例：階段を上る人物、成長グラフ） */}
          <Image
            src="/images/stepup_sample.jpg"
            alt="成長・ステップアップのイメージ（例：階段を上る人物、成長グラフ）"
            width={256}
            height={160}
            className="rounded-lg shadow object-cover w-64 h-40"
          />
        </div>
      </section>
      
      {/* 5. 言語学＋脳科学（2カラム＋リスト＋イメージ） */}
      <section className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <h4 className="text-xl font-bold text-green-700 mb-2">言語学＋脳科学に基づくアプローチ</h4>
          <div className="mb-4">
            <h5 className="font-bold text-blue-700">第二言語習得論（SLA）とは</h5>
            <ul className="list-disc pl-6 text-gray-700">
              {slaItems.map((item, idx) => (
                <li key={idx} className="mb-1">{item.text}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-blue-700">認知負荷理論とは</h5>
            <ul className="list-disc pl-6 text-gray-700">
              {cognitiveItems.map((item, idx) => (
                <li key={idx} className="mb-1">{item.text}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          {/* 仮画像：脳科学・理論イメージ（例：脳のイラスト、理論図） */}
          <Image
            src="/images/brain_sample.jpg"
            alt="脳科学・理論イメージ（例：脳のイラスト、理論図）"
            width={256}
            height={160}
            className="rounded-lg shadow object-cover w-64 h-40"
          />
        </div>
      </section>
      
      {/* 6. Engrowthの取り組み（グラデーション背景＋イメージ） */}
      <section className="bg-gradient-to-r from-yellow-100 via-orange-50 to-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h4 className="text-xl font-bold text-orange-700 mb-2">Engrowthでは</h4>
          <p className="text-gray-700">
            研究結果に基づいたプログラムを完全にカリキュラム化。<br />
            <strong className="text-orange-700 font-bold">「最短ルート」で成果を実現</strong>することを目指します。
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          {/* 仮画像：Engrowthのサポートイメージ（例：サポートする講師、チームワーク） */}
          <Image
            src="/images/engrowth_sample.jpg"
            alt="Engrowthのサポートイメージ（例：サポートする講師、チームワーク）"
            width={256}
            height={160}
            className="rounded-lg shadow object-cover w-64 h-40"
          />
        </div>
      </section>
    </div>
  );
};

export default Reason2Content; 