import React from 'react';
import StatusBadge from '@/components/atoms/StatusBadge';

type InvoiceStatus =
  | 'paid'
  | 'pending'
  | 'draft'
  | 'void'
  | 'failed'
  | 'refunded';

interface InvoiceStatusBadgeProps {
  status: InvoiceStatus;
}

const InvoiceStatusBadge: React.FC<
  InvoiceStatusBadgeProps
> = ({ status }) => {
  return <StatusBadge status={status} />;
};

export default InvoiceStatusBadge;
