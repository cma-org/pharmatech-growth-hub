// src/hooks/useCountdown.ts
import { useEffect, useMemo, useRef, useState } from "react";

type Parts = { days:number; hours:number; minutes:number; seconds:number; totalMs:number };

const clampNonNegative = (n:number) => (n < 0 ? 0 : n);

export function useCountdown(targetISO:string, tickMs = 1000){
  const [now, setNow] = useState<number>(Date.now());
  const timerRef = useRef<number | null>(null);

  const targetMs = useMemo(() => {
    // Accepts "YYYY-MM-DDTHH:mm:ss" or "...Z"
    const d = new Date(targetISO);
    return d.getTime();
  }, [targetISO]);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick(); // initialize immediately
    timerRef.current = window.setInterval(tick, tickMs) as unknown as number;
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [tickMs]);

  const diff = clampNonNegative(targetMs - now);

  const parts:Parts = useMemo(() => {
    const total = clampNonNegative(targetMs - now);
    const days = Math.floor(total / (24*60*60*1000));
    const hours = Math.floor((total % (24*60*60*1000)) / (60*60*1000));
    const minutes = Math.floor((total % (60*60*1000)) / (60*1000));
    const seconds = Math.floor((total % (60*1000)) / 1000);
    return { days, hours, minutes, seconds, totalMs: total };
  }, [now, targetMs]);

  const isOver = diff === 0;

  return { ...parts, isOver };
}
