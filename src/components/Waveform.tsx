'use client';

export default function Waveform() {
  const bars = [
    0.10, 0.15, 0.25, 0.35, 0.50, 0.40, 0.65, 0.30, 0.80, 0.55,
    0.70, 0.45, 0.90, 0.35, 0.60, 0.20, 0.75, 0.50, 0.85, 0.40,
    0.15, 0.55, 0.95, 0.30, 0.70, 0.45, 0.60, 0.20, 0.80, 0.50,
    0.35, 0.90, 0.25, 0.65, 0.40, 0.75, 0.15, 0.55, 0.85, 0.30,
    0.70, 0.10, 0.50, 0.80, 0.35, 0.60, 0.95, 0.25, 0.45, 0.70,
    0.40, 0.85, 0.20, 0.55, 0.75, 0.30, 0.90, 0.50, 0.15, 0.65,
    0.45, 0.80, 0.35, 0.60, 0.10, 0.70, 0.50, 0.90, 0.25, 0.55,
    0.75, 0.40, 0.85, 0.20, 0.65, 0.30, 0.95, 0.50, 0.15, 0.70,
    0.45, 0.80, 0.60, 0.35, 0.55, 0.90, 0.25, 0.75, 0.40, 0.10,
    0.65, 0.50, 0.85, 0.30, 0.70, 0.20, 0.55, 0.80, 0.45, 0.95,
    0.35, 0.60, 0.15, 0.75, 0.50, 0.40, 0.85, 0.25, 0.70, 0.55,
    0.90, 0.30, 0.65, 0.20, 0.80, 0.45, 0.10, 0.50, 0.35, 0.75,
  ];

  const maxWidth = 120;

  return (
    <div
      className="hidden xl:flex fixed right-10 2xl:right-24 top-0 bottom-0 pointer-events-none z-0 flex-col justify-evenly py-8"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
      }}
      aria-hidden="true"
    >
      {bars.map((h, i) => {
        const width = h * maxWidth;
        const duration = 2.5 + (i % 7) * 0.4;
        const delay = (i % 5) * 0.3;
        return (
          <div
            key={i}
            className="bg-foreground/[0.14] dark:bg-foreground/[0.10] rounded-full ml-auto"
            style={{
              width: `${width}px`,
              height: '2.5px',
              transformOrigin: 'right',
              animation: `waveform-pulse ${duration}s ease-in-out ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
