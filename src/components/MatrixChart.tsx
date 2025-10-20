import { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales';

interface MatrixChartProps {
  abilityScore: number;
  actionScore: number;
}

export function MatrixChart({ abilityScore, actionScore }: MatrixChartProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas サイズの設定
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    // キャンバスをクリア
    ctx.clearRect(0, 0, width, height);

    // 4象限を描画
    const quadrants = [
      { x: centerX, y: 0, w: centerX, h: centerY, color: t.typeInfos.staff.color, label: t.typeInfos.staff.name, alpha: 0.2 },
      { x: 0, y: 0, w: centerX, h: centerY, color: t.typeInfos.commander.color, label: t.typeInfos.commander.name, alpha: 0.2 },
      { x: 0, y: centerY, w: centerX, h: centerY, color: t.typeInfos.soldier.color, label: t.typeInfos.soldier.name, alpha: 0.2 },
      { x: centerX, y: centerY, w: centerX, h: centerY, color: t.typeInfos.danger.color, label: t.typeInfos.danger.name, alpha: 0.2 },
    ];

    quadrants.forEach(q => {
      ctx.fillStyle = q.color + '33'; // 透明度を追加
      ctx.fillRect(q.x, q.y, q.w, q.h);
    });

    // 軸を描画
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    
    // 縦軸
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();

    // 横軸
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();

    // ラベルを描画
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'center';

    // 上: 働き者
    ctx.fillText(t.result.axisHardworking, centerX, 20);
    // 下: 怠け者
    ctx.fillText(t.result.axisLazy, centerX, height - 10);
    // 左: 無能
    ctx.save();
    ctx.translate(15, centerY);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(t.result.axisIncompetent, 0, 0);
    ctx.restore();
    // 右: 有能
    ctx.save();
    ctx.translate(width - 15, centerY);
    ctx.rotate(Math.PI / 2);
    ctx.fillText(t.result.axisCompetent, 0, 0);
    ctx.restore();

    // ユーザーの位置を計算（スコアを座標に変換）
    // abilityScore: -50 ~ +50 → 0 ~ width
    // actionScore: -50 ~ +50 → height ~ 0 (反転)
    const x = ((abilityScore + 50) / 100) * width;
    const y = ((50 - actionScore) / 100) * height;

    // ユーザーの位置を描画（大きい赤い点）
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.arc(x, y, 12, 0, Math.PI * 2);
    ctx.fill();
    
    // 白い縁取り
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.stroke();

    // 十字マーク
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x - 6, y);
    ctx.lineTo(x + 6, y);
    ctx.moveTo(x, y - 6);
    ctx.lineTo(x, y + 6);
    ctx.stroke();

  }, [abilityScore, actionScore, t]);

  return (
    <div className="flex justify-center items-center my-8">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="border-2 border-gray-300 rounded-lg shadow-lg max-w-full"
      />
    </div>
  );
}


