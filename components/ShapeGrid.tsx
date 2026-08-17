import { useRef, useEffect } from 'react';

interface ShapeGridProps {
  speed?: number;
  squareSize?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'diagonal';
  borderColor?: string;
  hoverFillColor?: string;
  shape?: 'square' | 'circle';
  hoverTrailAmount?: number;
  size?: number;
  hoverColor?: string;
}

export default function ShapeGrid({
  speed = 0.5,
  squareSize = 40,
  direction = 'diagonal',
  borderColor = '#2F293A',
  hoverFillColor = '#222',
  size,
}: ShapeGridProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let gridOffset = 0;
    const finalSize = size || squareSize;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;

      gridOffset += speed;
      if (gridOffset >= finalSize) {
        gridOffset = 0;
      }

      const startX = direction === 'left' || direction === 'diagonal' ? -gridOffset : 0;
      const startY = direction === 'up' || direction === 'diagonal' ? -gridOffset : 0;

      for (let x = startX; x < canvas.width + finalSize; x += finalSize) {
        for (let y = startY; y < canvas.height + finalSize; y += finalSize) {
          ctx.strokeRect(x, y, finalSize, finalSize);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, squareSize, direction, borderColor, hoverFillColor, size]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}