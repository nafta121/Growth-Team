import { render, screen } from '@testing-library/react';
import RundownPage from '../page';

describe('RundownPage', () => {
  it('renders the back link to home', () => {
    render(<RundownPage />);
    const backLink = screen.getByRole('link', { name: 'Kembali' });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute('href', '/');
  });

  it('renders the header title', () => {
    render(<RundownPage />);
    const headerTitle = screen.getByText('Rundown');
    expect(headerTitle).toBeInTheDocument();
  });

  it('renders the main heading', () => {
    render(<RundownPage />);
    const mainHeading = screen.getByRole('heading', { name: 'Pilih acara', level: 1 });
    expect(mainHeading).toBeInTheDocument();
  });

  it('renders the description subtitle', () => {
    render(<RundownPage />);
    const subtitle = screen.getByText('Buka acara untuk melihat susunan kegiatan dan sesi yang sedang berlangsung.');
    expect(subtitle).toBeInTheDocument();
  });

  it('renders the link to the outbound leadership rundown', () => {
    render(<RundownPage />);
    const rundownLink = screen.getByRole('link', { name: 'Lihat rundown hari ini' });
    expect(rundownLink).toBeInTheDocument();
    expect(rundownLink).toHaveAttribute('href', '/acara/outbound-leadership');
  });
});
