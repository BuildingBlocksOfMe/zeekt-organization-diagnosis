import { Question } from '../types';

export const questions: Question[] = [
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
];


