// src/components/EventSection.tsx
import React from "react";
import { useCountdown } from "../hooks/useCountdown";
import "./EventSection.css";

type Props = {
  title: string;
  subtitle?: string;
  startISO: string;
  location?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

function TimeBox({ label, value }:{label:string; value:number}){
  return (
    <div className="flex flex-col items-center">
      <div
        className="min-w-16 px-4 py-3 rounded-2xl text-center text-3xl font-semibold"
        style={{ backgroundColor: "white", color: "var(--brand-700)", boxShadow: "0 6px 20px rgba(2,6,23,.08)" }}
        aria-label={`${value} ${label}`}
      >
        {value.toString().padStart(2, "0")}
      </div>
      <div className="mt-2 text-sm text-slate-600">{label}</div>
    </div>
  );
}

export const EventSection: React.FC<Props> = ({
  title,
  subtitle,
  startISO,
  location,
  ctaLabel = "Register",
  ctaHref = "#",
}) => {
  const { days, hours, minutes, seconds, isOver } = useCountdown(startISO);

  const startDateLocal = new Date(startISO);
  const dateFmt = new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(startDateLocal);

  return (
    <section
      className="relative isolate overflow-hidden axygen-theme"
      style={{ backgroundColor: "var(--bg)" }}
      aria-labelledby="event-heading"
    >
      <div className="brand-gradient absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <div>
            <h1 id="event-heading" className="text-3xl md:text-4xl font-bold" style={{color:"var(--ink)"}}>
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-lg md:text-xl" style={{color:"var(--muted)"}}>
                {subtitle}
              </p>
            )}
            <div className="mt-6 space-y-2 text-base">
              <p><strong style={{color:"var(--brand-600)"}}>When:</strong> {dateFmt}</p>
              {location && <p><strong style={{color:"var(--brand-600)"}}>Where:</strong> {location}</p>}
            </div>

            <div className="mt-8">
              <a
                href={ctaHref} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-medium"
                style={{ backgroundColor: "var(--brand)", color: "white", boxShadow: "0 8px 24px rgba(10,78,161,.25)" }}
              >
                {ctaLabel}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Countdown */}
          <div className="rounded-3xl p-6 md:p-10 bg-white/70 backdrop-blur"
               style={{boxShadow:"0 10px 30px rgba(2,6,23,.08)"}}
               aria-live="polite">
            {!isOver ? (
              <>
                <h2 className="text-2xl font-semibold mb-6" style={{color:"var(--brand-700)"}}>
                  Starts in
                </h2>
                <div className="grid grid-cols-4 gap-4">
                  <TimeBox label="Days" value={days} />
                  <TimeBox label="Hours" value={hours} />
                  <TimeBox label="Minutes" value={minutes} />
                  <TimeBox label="Seconds" value={seconds} />
                </div>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-2" style={{color:"var(--brand-700)"}}>
                  We’re live!
                </h2>
                <p className="text-slate-600">The session has started. Join using your registration link.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
