export function SimpleLineChart() {
  const data = [
    { label: 'Sem 1', value: 65 },
    { label: 'Sem 2', value: 72 },
    { label: 'Sem 3', value: 78 },
    { label: 'Sem 4', value: 75 },
    { label: 'Sem 5', value: 82 },
    { label: 'Sem 6', value: 88 },
  ];

  const maxValue = Math.max(...data.map((d) => d.value));
  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 100 - (d.value / maxValue) * 80;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="w-full h-48 bg-muted/50 rounded-lg p-4">
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="100"
            y2={y}
            stroke="oklch(var(--border))"
            strokeWidth="0.2"
            opacity="0.5"
          />
        ))}

        {/* Area under line */}
        <polygon
          points={`0,100 ${points} 100,100`}
          fill="oklch(var(--primary) / 0.1)"
        />

        {/* Line */}
        <polyline
          points={points}
          fill="none"
          stroke="oklch(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points */}
        {data.map((d, i) => {
          const x = (i / (data.length - 1)) * 100;
          const y = 100 - (d.value / maxValue) * 80;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="2"
              fill="oklch(var(--primary))"
            />
          );
        })}
      </svg>

      {/* Labels */}
      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
        {data.map((d, i) => (
          <span key={i}>{d.label}</span>
        ))}
      </div>
    </div>
  );
}
