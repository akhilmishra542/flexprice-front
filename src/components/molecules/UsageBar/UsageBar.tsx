import React from 'react';

interface UsageBarProps {
  used: number;
  total: number;
  label?: string;
}

const UsageBar: React.FC<UsageBarProps> = ({
  used,
  total,
  label,
}) => {
  const percentage = Math.min((used / total) * 100, 100);

  const barColor =
    percentage >= 90
      ? 'bg-red-500'
      : percentage >= 70
      ? 'bg-yellow-500'
      : 'bg-primary';

  return (
    <div className="space-y-2 w-full">
      <div className="flex items-center justify-between text-sm">
        <span>{label}</span>

        <span className="text-muted-foreground">
          {used} / {total}
        </span>
      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={`h-full transition-all duration-300 ${barColor}`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="text-xs text-muted-foreground">
        {percentage.toFixed(0)}% used
      </div>
    </div>
  );
};

export default UsageBar;