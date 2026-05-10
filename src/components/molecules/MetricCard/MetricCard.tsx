import React from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  label: string;
  value: string | number;
  trend?: string;
  trendDirection?: 'up' | 'down';
  icon?: React.ReactNode;
  loading?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  trend,
  trendDirection = 'up',
  icon,
  loading,
}) => {
  if (loading) {
    return (
      <div className="rounded-xl border p-5 space-y-3 animate-pulse">
        <div className="h-4 w-24 bg-muted rounded" />
        <div className="h-8 w-32 bg-muted rounded" />
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-background p-5 shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{label}</p>
        {icon}
      </div>

      <div className="space-y-1">
        <h2 className="text-3xl font-bold">{value}</h2>

        {trend && (
          <div
            className={cn(
              'flex items-center text-sm font-medium',
              trendDirection === 'up'
                ? 'text-green-600'
                : 'text-red-600'
            )}>
            {trendDirection === 'up' ? (
              <TrendingUp className="mr-1 h-4 w-4" />
            ) : (
              <TrendingDown className="mr-1 h-4 w-4" />
            )}

            {trend}
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
