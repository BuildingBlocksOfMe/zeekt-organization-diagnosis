import { Question, TypeInfo } from '../types';

export const ja = {
  common: {
    siteName: "ゼークトの組織論診断サイト",
    startButton: "診断を開始する",
    restartButton: "もう一度診断する",
    shareResults: "結果をシェアする",
    twitterShare: "Twitterでシェア",
    lineShare: "LINEでシェア",
    copyUrl: "URLをコピー",
    urlCopied: "コピーしました！",
    disclaimer: "※ 診断結果はあくまで参考です。個人を断定的に評価するものではありません。",
  },
  
  top: {
    title: "ゼークトの組織論診断",
    subtitle: "あなたはどのタイプ？",
    description: "ドイツの軍人ハンス・フォン・ゼークトが提唱した組織論に基づく診断テストです。",
    instruction: "10問の質問に答えて、あなたの特性を知りましょう。",
    type1Title: "参謀型",
    type1Desc: "有能 × 働き者",
    type2Title: "指揮官型",
    type2Desc: "有能 × 怠け者",
    type3Title: "兵士型",
    type3Desc: "無能 × 怠け者",
    type4Title: "危険型",
    type4Desc: "無能 × 働き者",
  },
  
  question: {
    progressLabel: "質問",
    hint: "直感で答えてください。正解・不正解はありません。",
  },
  
  result: {
    diagnosisResult: "診断結果",
    yourCharacteristics: "あなたの特徴",
    yourPosition: "あなたの位置",
    abilityScore: "能力スコア",
    actionScore: "行動スコア",
    strengths: "💪 あなたの強み",
    weaknesses: "⚠️ 注意すべき点",
    recommendations: "💡 おすすめの行動指針",
    axisCompetent: "有能",
    axisIncompetent: "無能",
    axisHardworking: "働き者",
    axisLazy: "怠け者",
  },
  
  questions: [
    {
      id: 1,
      text: "新しいプロジェクトが始まりました。あなたの最初の行動は？",
      options: [
        {
          id: "1a",
          text: "まずは全体像を把握し、効率的な計画を立てる",
          abilityScore: 5,
          actionScore: -3,
        },
        {
          id: "1b",
          text: "すぐに行動を開始し、細かいタスクをこなしていく",
          abilityScore: 2,
          actionScore: 5,
        },
        {
          id: "1c",
          text: "指示を待ち、与えられた役割を確実にこなす",
          abilityScore: -2,
          actionScore: -4,
        },
        {
          id: "1d",
          text: "とにかく思いついたことから手を付ける",
          abilityScore: -4,
          actionScore: 4,
        },
      ],
    },
    {
      id: 2,
      text: "チームで問題が発生しました。あなたはどうする？",
      options: [
        {
          id: "2a",
          text: "原因を分析し、最適な解決策を提案する",
          abilityScore: 5,
          actionScore: 3,
        },
        {
          id: "2b",
          text: "冷静に状況を観察し、必要な時だけ介入する",
          abilityScore: 4,
          actionScore: -2,
        },
        {
          id: "2c",
          text: "上司や他の人の判断を待つ",
          abilityScore: -3,
          actionScore: -3,
        },
        {
          id: "2d",
          text: "すぐに行動して何とかしようとする",
          abilityScore: -3,
          actionScore: 5,
        },
      ],
    },
    {
      id: 3,
      text: "日常業務であなたが重視するのは？",
      options: [
        {
          id: "3a",
          text: "タスクを効率よくこなし、成果を最大化する",
          abilityScore: 4,
          actionScore: 4,
        },
        {
          id: "3b",
          text: "本質的な仕事に集中し、無駄を省く",
          abilityScore: 5,
          actionScore: -2,
        },
        {
          id: "3c",
          text: "決められたルールに従い、ミスなく完遂する",
          abilityScore: -1,
          actionScore: -2,
        },
        {
          id: "3d",
          text: "とにかく全力で動き続ける",
          abilityScore: -4,
          actionScore: 5,
        },
      ],
    },
    {
      id: 4,
      text: "複雑な課題に直面した時、あなたの対応は？",
      options: [
        {
          id: "4a",
          text: "問題を分解し、優先順位をつけて解決する",
          abilityScore: 5,
          actionScore: 2,
        },
        {
          id: "4b",
          text: "シンプルな解決策を見つけ、最小限の労力で解決する",
          abilityScore: 5,
          actionScore: -3,
        },
        {
          id: "4c",
          text: "誰かの助けを求める",
          abilityScore: -3,
          actionScore: -1,
        },
        {
          id: "4d",
          text: "試行錯誤を繰り返しながら突き進む",
          abilityScore: -3,
          actionScore: 4,
        },
      ],
    },
    {
      id: 5,
      text: "会議で新しいアイデアを求められました。あなたは？",
      options: [
        {
          id: "5a",
          text: "データに基づいた実現可能な提案をする",
          abilityScore: 5,
          actionScore: 3,
        },
        {
          id: "5b",
          text: "的確なアイデアを簡潔に提示する",
          abilityScore: 4,
          actionScore: -2,
        },
        {
          id: "5c",
          text: "他の人の意見を聞いてから考える",
          abilityScore: -2,
          actionScore: -3,
        },
        {
          id: "5d",
          text: "思いついたことを次々と発言する",
          abilityScore: -4,
          actionScore: 4,
        },
      ],
    },
    {
      id: 6,
      text: "締め切りが迫っているプロジェクト。あなたの働き方は？",
      options: [
        {
          id: "6a",
          text: "計画的に優先度の高いタスクを集中的に処理する",
          abilityScore: 5,
          actionScore: 4,
        },
        {
          id: "6b",
          text: "重要な部分だけ確実に仕上げる",
          abilityScore: 4,
          actionScore: -1,
        },
        {
          id: "6c",
          text: "指示された通りにコツコツ進める",
          abilityScore: -1,
          actionScore: -2,
        },
        {
          id: "6d",
          text: "片っ端から全てに手を出す",
          abilityScore: -4,
          actionScore: 5,
        },
      ],
    },
    {
      id: 7,
      text: "あなたが理想とする働き方は？",
      options: [
        {
          id: "7a",
          text: "成果を出しながら、充実した日々を送る",
          abilityScore: 4,
          actionScore: 3,
        },
        {
          id: "7b",
          text: "効率的に仕事を終え、余暇を楽しむ",
          abilityScore: 5,
          actionScore: -4,
        },
        {
          id: "7c",
          text: "安定した環境で指示に従って働く",
          abilityScore: -2,
          actionScore: -4,
        },
        {
          id: "7d",
          text: "常に忙しく動き回っている",
          abilityScore: -3,
          actionScore: 5,
        },
      ],
    },
    {
      id: 8,
      text: "リーダーを任された時のあなたは？",
      options: [
        {
          id: "8a",
          text: "チーム全体を戦略的に導く",
          abilityScore: 5,
          actionScore: 3,
        },
        {
          id: "8b",
          text: "方向性を示し、メンバーに任せる",
          abilityScore: 5,
          actionScore: -3,
        },
        {
          id: "8c",
          text: "リーダーは向いていないと感じる",
          abilityScore: -3,
          actionScore: -3,
        },
        {
          id: "8d",
          text: "自ら率先して動き、メンバーを引っ張る",
          abilityScore: -2,
          actionScore: 5,
        },
      ],
    },
    {
      id: 9,
      text: "失敗した時のあなたの反応は？",
      options: [
        {
          id: "9a",
          text: "原因を分析し、改善策を実行する",
          abilityScore: 5,
          actionScore: 3,
        },
        {
          id: "9b",
          text: "冷静に振り返り、次回に活かす",
          abilityScore: 4,
          actionScore: -2,
        },
        {
          id: "9c",
          text: "落ち込むが、また指示を待つ",
          abilityScore: -3,
          actionScore: -3,
        },
        {
          id: "9d",
          text: "すぐに別の方法で再挑戦する",
          abilityScore: -3,
          actionScore: 4,
        },
      ],
    },
    {
      id: 10,
      text: "自由な時間ができた時、あなたは？",
      options: [
        {
          id: "10a",
          text: "スキルアップや自己投資に使う",
          abilityScore: 4,
          actionScore: 3,
        },
        {
          id: "10b",
          text: "リラックスして英気を養う",
          abilityScore: 3,
          actionScore: -4,
        },
        {
          id: "10c",
          text: "特に何もせずのんびり過ごす",
          abilityScore: -2,
          actionScore: -4,
        },
        {
          id: "10d",
          text: "何か新しいことに挑戦する",
          abilityScore: -1,
          actionScore: 4,
        },
      ],
    },
  ] as Question[],
  
  typeInfos: {
    staff: {
      type: 'staff',
      name: '参謀型',
      title: 'あなたは実行力のある参謀です',
      description: 'あなたは高い能力と行動力を兼ね備えた、組織にとって最も価値のある人材タイプです。問題解決能力が高く、実際に手を動かして成果を出すことができます。ゼークトの組織論では「参謀」として、戦略の立案と実行の両面で組織を支える役割が期待されます。',
      strengths: [
        '優れた問題解決能力と実行力を持つ',
        '計画を立て、それを着実に実行できる',
        'チームの中心として信頼される',
        '困難な課題にも積極的に取り組める'
      ],
      weaknesses: [
        '働きすぎて疲弊する可能性がある',
        '完璧主義になりすぎることがある',
        '他人に仕事を任せるのが苦手な場合がある'
      ],
      recommendations: [
        '自分の時間も大切にし、適度な休息を取りましょう',
        'チームメンバーの育成にも力を入れましょう',
        '長期的なキャリアプランを立て、スキルを磨き続けましょう',
        'リーダーシップを発揮できるポジションを目指しましょう'
      ],
      color: '#10b981',
    },
    commander: {
      type: 'commander',
      name: '指揮官型',
      title: 'あなたは戦略的な指揮官です',
      description: 'あなたは高い能力を持ちながら、効率を重視するタイプです。無駄な労力を使わず、本質を見抜いて最適な判断を下すことができます。ゼークトの組織論では「司令官」として、組織全体を俯瞰し、戦略的な意思決定を行う役割が最も適しています。',
      strengths: [
        '物事の本質を見抜く力がある',
        '効率的に最適な解決策を見つけられる',
        '冷静で戦略的な判断ができる',
        '無駄な労力を避け、重要なことに集中できる'
      ],
      weaknesses: [
        '行動力が低いと見られることがある',
        '細かい実務が苦手な場合がある',
        '他人からは「やる気がない」と誤解されることも'
      ],
      recommendations: [
        'マネジメントや戦略立案の役割を積極的に担いましょう',
        '自分の考えを周囲に分かりやすく伝える努力をしましょう',
        '信頼できる実行力のあるパートナーを見つけましょう',
        '長期的な視点で物事を考える力を活かしましょう'
      ],
      color: '#3b82f6',
    },
    soldier: {
      type: 'soldier',
      name: '兵士型',
      title: 'あなたは堅実な兵士です',
      description: 'あなたは指示に従い、安定した成果を出すことができるタイプです。派手さはないかもしれませんが、組織の基盤を支える重要な役割を果たします。ゼークトの組織論では「兵士」として、与えられた任務を確実にこなす役割が期待されます。',
      strengths: [
        '指示に忠実で信頼できる',
        '安定した環境で力を発揮できる',
        'ルールやプロセスを守ることができる',
        '大きな失敗をしにくい'
      ],
      weaknesses: [
        '自発的な行動が少ない',
        '新しいことへの挑戦が苦手',
        '判断を他人に委ねがち'
      ],
      recommendations: [
        '少しずつ自分で考えて行動する習慣をつけましょう',
        '得意分野を見つけ、その分野で専門性を高めましょう',
        '小さなことから主体的に取り組んでみましょう',
        'スキルアップのための学習を始めてみましょう'
      ],
      color: '#64748b',
    },
    danger: {
      type: 'danger',
      name: '危険型',
      title: 'あなたは情熱的な挑戦者です',
      description: 'あなたは高い行動力とエネルギーを持つタイプです。ゼークトの組織論では「危険」と分類されますが、これは方向性が誤ると影響が大きいという意味です。適切なガイダンスがあれば、そのエネルギーは大きな武器になります。',
      strengths: [
        '行動力とエネルギーがある',
        '積極的に物事に取り組める',
        '失敗を恐れずチャレンジできる',
        '情熱を持って仕事に臨める'
      ],
      weaknesses: [
        '方向性を誤ることがある',
        '計画性に欠けることがある',
        '効率よりも行動量を重視しがち',
        '周囲を振り回してしまうことも'
      ],
      recommendations: [
        '行動する前に一度立ち止まって考える習慣をつけましょう',
        '信頼できるメンターやアドバイザーを見つけましょう',
        '計画的に物事を進めるスキルを身につけましょう',
        'あなたの行動力を正しい方向に向けられれば、大きな成功を掴めます'
      ],
      color: '#ef4444',
    },
  } as Record<string, TypeInfo>,
};

