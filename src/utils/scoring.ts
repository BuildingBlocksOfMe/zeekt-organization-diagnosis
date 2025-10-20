import { Answer, DiagnosisResult, DiagnosisType, TypeInfo } from '../types';

export function calculateScores(answers: Answer[]): { abilityScore: number; actionScore: number } {
  let abilityScore = 0;
  let actionScore = 0;

  answers.forEach(answer => {
    abilityScore += answer.abilityScore;
    actionScore += answer.actionScore;
  });

  return { abilityScore, actionScore };
}

export function determineType(abilityScore: number, actionScore: number): DiagnosisType {
  // 能力軸: 正の値 = 有能、負の値 = 無能
  // 行動軸: 正の値 = 働き者、負の値 = 怠け者
  
  if (abilityScore >= 0 && actionScore >= 0) {
    return 'staff'; // 有能 × 働き者 = 参謀型
  } else if (abilityScore >= 0 && actionScore < 0) {
    return 'commander'; // 有能 × 怠け者 = 指揮官型
  } else if (abilityScore < 0 && actionScore < 0) {
    return 'soldier'; // 無能 × 怠け者 = 兵士型
  } else {
    return 'danger'; // 無能 × 働き者 = 危険型
  }
}

export function generateDiagnosisResult(
  answers: Answer[],
  typeInfos: Record<string, TypeInfo>
): DiagnosisResult {
  const { abilityScore, actionScore } = calculateScores(answers);
  const type = determineType(abilityScore, actionScore);
  const typeInfo = typeInfos[type];

  return {
    type,
    title: typeInfo.title,
    description: typeInfo.description,
    advice: typeInfo.recommendations,
    abilityScore,
    actionScore,
  };
}


