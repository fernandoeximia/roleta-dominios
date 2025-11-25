import { BusinessDomain } from "@/data/domains";
import { useCallback, useEffect, useRef, useState } from "react";

interface WheelProps {
  domains: BusinessDomain[];
  isSpinning: boolean;
  onSpinComplete: (domain: BusinessDomain) => void;
}

export default function Wheel({ domains, isSpinning, onSpinComplete }: WheelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);
  const [targetRotation, setTargetRotation] = useState(0);
  const animationRef = useRef<number | undefined>(undefined);

  const drawWheel = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;

    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Salva o estado e aplica rotação
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.translate(-centerX, -centerY);

    const anglePerSegment = (2 * Math.PI) / domains.length;

    // Desenha cada segmento
    domains.forEach((domain, index) => {
      const startAngle = index * anglePerSegment - Math.PI / 2;
      const endAngle = startAngle + anglePerSegment;

      // Desenha o segmento
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = domain.color;
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 3;
      ctx.stroke();

      // Desenha o texto
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + anglePerSegment / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 14px sans-serif";
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
      ctx.shadowBlur = 4;
      ctx.fillText(domain.name, radius - 20, 5);
      ctx.restore();
    });

    // Desenha o círculo central
    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "#1f2937";
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.restore();

    // Desenha o ponteiro (triângulo no topo)
    ctx.beginPath();
    ctx.moveTo(centerX, 10);
    ctx.lineTo(centerX - 15, 40);
    ctx.lineTo(centerX + 15, 40);
    ctx.closePath();
    ctx.fillStyle = "#ef4444";
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();
  }, [domains, rotation]);

  useEffect(() => {
    drawWheel();
  }, [drawWheel]);

  useEffect(() => {
    if (isSpinning) {
      // Gera um ângulo aleatório para parar (múltiplas voltas + posição final)
      const randomIndex = Math.floor(Math.random() * domains.length);
      const anglePerSegment = 360 / domains.length;
      const randomAngle = randomIndex * anglePerSegment;
      const extraSpins = 5 + Math.random() * 3; // 5 a 8 voltas completas
      const finalRotation = rotation + (extraSpins * 360) + randomAngle;
      
      setTargetRotation(finalRotation);
    }
  }, [isSpinning]);

  useEffect(() => {
    if (isSpinning && targetRotation > rotation) {
      const animate = () => {
        setRotation((prev) => {
          const diff = targetRotation - prev;
          if (diff < 0.1) {
            // Animação completa
            const normalizedRotation = targetRotation % 360;
            const anglePerSegment = 360 / domains.length;
            const selectedIndex = Math.floor((360 - normalizedRotation + anglePerSegment / 2) / anglePerSegment) % domains.length;
            onSpinComplete(domains[selectedIndex]);
            return targetRotation;
          }
          // Easing: desaceleração progressiva
          return prev + diff * 0.02;
        });
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isSpinning, targetRotation, rotation, domains, onSpinComplete]);

  return (
    <div className="flex justify-center items-center">
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        className="max-w-full h-auto"
      />
    </div>
  );
}
