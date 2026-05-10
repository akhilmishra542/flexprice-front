import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SidebarNav from './SidebarNav';

describe('SidebarNav', () => {
  it('renders sidebar items', () => {
    render(<SidebarNav />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Billing')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('toggles sidebar', () => {
    render(<SidebarNav />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(button).toBeInTheDocument();
  });
});
