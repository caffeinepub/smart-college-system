export function RiskBarChart() {
  const data = [
    { label: 'Low Risk', value: 75, color: 'oklch(var(--success))' },
    { label: 'Medium Risk', value: 45, color: 'oklch(var(--warning))' },
    { label: 'High Risk', value: 20, color: 'oklch(var(--destructive))' },
  ];

  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="w-full space-y-4 bg-muted/50 rounded-lg p-4">
      {data.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="font-medium">{item.label}</span>
            <span className="text-muted-foreground">{item.value}%</span>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${(item.value / maxValue) * 100}%`,
                backgroundColor: item.color,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
