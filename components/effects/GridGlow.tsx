export function GridGlow({ variant = "default" }: { variant?: "default" | "hero" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      <div
        className="absolute -top-40 left-[8%] h-[420px] w-[420px] rounded-full bg-gold/[0.10] blur-[120px] animate-[drift_18s_ease-in-out_infinite]"
      />
      <div
        className="absolute top-[20%] right-[4%] h-[360px] w-[360px] rounded-full bg-gold/[0.06] blur-[140px] animate-[drift-rev_22s_ease-in-out_infinite]"
      />
      {variant === "hero" && (
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[800px] -translate-x-1/2 rounded-full bg-gold/[0.05] blur-[160px]" />
      )}
    </div>
  );
}
