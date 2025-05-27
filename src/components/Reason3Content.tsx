import React from 'react';
import Image from 'next/image';

  const habitSteps = [
    {
    title: '目標設定と行動計画の徹底設計',
    description: '単なるモチベーション誘導ではなく、数値化された目標を設定します。その上で、日々の行動に落とし込みます。',
    icon: '🎯',
    },
    {
    title: '毎日連絡によるマイクロチェックイン',
    description: '少しずつでも「ズレたら終わり」という行動結果の分岐点をなくします。不安や不明点も即時に直接相談、習慣化を助けます。',
    icon: '📱',
    },
    {
    title: '成功体験の積み上げとモチベーション維持',
    description: '「やれた」「成果が出た」という小さな成功体験を積み上げます。非常に簡単な成功でも意識的に認識し、下がりがちなモチベーションを保ち続けます。',
    icon: '🏆',
  },
  ];

  const supportItems = [
    { icon: 'check_circle', text: 'コンサルタントとの毎日のやりとり' },
    { icon: 'check_circle', text: '行動ログを反映した実行課題のフィードバック' },
    { icon: 'check_circle', text: '行動の緊急レビューとリプラン修正' },
  { icon: 'check_circle', text: '成功体験の分解と気づきの振り返り' },
  ];

const Reason3Content: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* 1. タイトル＋リード文（グラデーション背景＋イメージ画像） */}
      <section className="relative bg-gradient-to-r from-green-100 via-blue-50 to-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-4 drop-shadow-lg">
            習慣化 × 伴走サポートによる
            <span className="text-green-600">「圧倒的成果」</span>の出し方
          </h2>
          <p className="text-lg text-green-800 font-semibold mb-2">
            <strong className="bg-yellow-100 text-yellow-700 px-2 rounded">習慣化が成功の9割を決める</strong>
          </p>
          <p className="text-gray-700">
            英語習得で最も重要なのは<strong className="text-green-700 font-bold">「習慣化」</strong>です。多くの成功例にも「意志による続けよう」という避けられない力に依存したものはありません。<br />
            成功率の高い人ほど、システムを作り、「やらざるを得ない環境」を構築することで、自分を習慣の系に統合します。
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          {/* 仮画像：習慣化・行動科学イメージ（例：チェックリスト、カレンダー、習慣化のイラスト） */}
          <Image
            src="/images/habit_sample.jpg"
            alt="習慣化・行動科学イメージ（例：チェックリスト、カレンダー、習慣化のイラスト）"
            width={288} height={192}
            className="rounded-xl shadow-md object-cover w-72 h-48"
          />
        </div>
      </section>
      
      {/* 2. 3ステップ習慣化プログラム（カード型＋イメージ） */}
      <section>
        <h3 className="text-2xl font-bold text-green-900 mb-6">Engrowthが実施する「3ステップ習慣化プログラム」</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {habitSteps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <span className="text-4xl mb-2">{step.icon}</span>
              <h4 className="text-lg font-bold text-green-700 mb-1">{step.title}</h4>
              <p className="text-gray-700 text-center">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          {/* 仮画像：プログラム実践イメージ（例：サポートする様子、チェックイン、目標設定） */}
          <Image
            src="/images/program_sample.jpg"
            alt="プログラム実践イメージ（例：サポートする様子、チェックイン、目標設定）"
            width={256} height={160}
            className="rounded-lg shadow object-cover w-64 h-40"
          />
        </div>
      </section>
      
      {/* 3. 伴走型の必要性（淡色背景＋テキスト強調） */}
      <section className="bg-blue-50 rounded-xl shadow-inner p-8">
        <h3 className="text-2xl font-bold text-green-900 mb-4">なぜ「伴走型」が絶対に必要なのか</h3>
        <p className="text-lg text-green-800 font-semibold mb-2">
          <strong className="text-green-700 font-bold">自走できないフェーズは必ず登場します</strong>。
        </p>
        <p className="text-gray-700">
          他者と比較して落ち込んだり、第三者の言葉で自己否定しそうになったり、続ける意味が分からなくなったり…<br />
          それでも「大丈夫」と言い、最小単位でも成功体験を重ねる、この伴走は決定的です。
        </p>
        <p className="text-gray-700 mt-2">
          行動心理学にも基づいています。実際、励ましてくれる人の存在は、効果を数倍にし、失敗率を劇的に下げます。
        </p>
      </section>
      
      {/* 4. サポート体制（リスト＋イメージ） */}
      <section className="bg-green-50 rounded-2xl shadow-inner p-8">
        <h3 className="text-2xl font-bold text-green-900 mb-6">Engrowth独自のサポート体制</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          {supportItems.map((item, idx) => (
            <li key={idx} className="mb-1 flex items-center"><span className="text-green-600 mr-2">✔️</span>{item.text}</li>
          ))}
        </ul>
        <p className="text-gray-700">
          ここまでセットで、<strong className="text-green-700 font-bold">「成果が出るのが当たり前」</strong>のステージへ導きます。
        </p>
        <div className="flex justify-center mt-6">
          {/* 仮画像：サポート体制イメージ（例：チームで支える、チャット、フィードバック） */}
          <Image
            src="/images/support3_sample.jpg"
            alt="サポート体制イメージ（例：チームで支える、チャット、フィードバック）"
            width={256} height={160}
            className="rounded-lg shadow object-cover w-64 h-40"
          />
        </div>
      </section>
      
      {/* 5. 習慣化によって得られる成果（グラデーション背景＋イメージ） */}
      <section className="bg-gradient-to-r from-yellow-100 via-orange-50 to-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h4 className="text-xl font-bold text-orange-700 mb-2">習慣化によって得られる成果</h4>
          <p className="text-gray-700">
            <strong className="text-orange-700 font-bold">短期的効果</strong>：学習の継続率が3倍に上昇、毎日の小さな成功体験による自己効力感の向上、学習内容の定着率が飛躍的に向上<br />
            <strong className="text-orange-700 font-bold">長期的効果</strong>：自走できる英語学習者への成長、英語を使う場面での自信の獲得、海外でも通用する英語力の確立
          </p>
          </div>
        <div className="flex-1 flex justify-center">
          {/* 仮画像：成果イメージ（例：成長グラフ、笑顔の学習者、海外で活躍する様子） */}
          <Image
            src="/images/result_sample.jpg"
            alt="成果イメージ（例：成長グラフ、笑顔の学習者、海外で活躍する様子）"
            width={256} height={160}
            className="rounded-lg shadow object-cover w-64 h-40"
          />
        </div>
      </section>
    </div>
  );
};

export default Reason3Content; 