interface TopPageProps {
  onStart: () => void;
}

export function TopPage({ onStart }: TopPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 px-4">
      <div className="max-w-2xl w-full text-center animate-fade-in">
        {/* メインタイトル */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-slide-up">
          ゼークトの組織論診断
        </h1>
        
        {/* サブタイトル */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          あなたはどのタイプ？
        </p>

        {/* 説明文 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-gray-700 mb-6 leading-relaxed">
            ドイツの軍人ハンス・フォン・ゼークトが提唱した組織論に基づく診断テストです。
            <br />
            10問の質問に答えて、あなたの特性を知りましょう。
          </p>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
              <div className="font-bold text-green-800 mb-1">参謀型</div>
              <div className="text-green-600">有能 × 働き者</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
              <div className="font-bold text-blue-800 mb-1">指揮官型</div>
              <div className="text-blue-600">有能 × 怠け者</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
              <div className="font-bold text-gray-800 mb-1">兵士型</div>
              <div className="text-gray-600">無能 × 怠け者</div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
              <div className="font-bold text-red-800 mb-1">危険型</div>
              <div className="text-red-600">無能 × 働き者</div>
            </div>
          </div>
        </div>

        {/* 開始ボタン */}
        <button
          onClick={onStart}
          className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          診断を開始する
        </button>

        {/* 注意事項 */}
        <p className="text-sm text-gray-500 mt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          ※ 診断結果はあくまで参考です。個人を断定的に評価するものではありません。
        </p>
      </div>
    </div>
  );
}


