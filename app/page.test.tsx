import { render, screen } from '@testing-library/react';
import Home from './page';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href, 'aria-label': ariaLabel }: { children: React.ReactNode; href: string, 'aria-label'?: string }) => {
    return <a href={href} aria-label={ariaLabel}>{children}</a>;
  };
});

describe('Home Page', () => {
  it('renders the header correctly', () => {
    render(<Home />);
    expect(screen.getByText('Outbound')).toBeInTheDocument();
    expect(screen.getByText('Madiun')).toBeInTheDocument();

    // There are multiple "AS" strings on the page (one in header, one in event facilitators)
    // We should be more specific, e.g. checking by accessible role/label
    const profileLink = screen.getByLabelText('Buka profil fasilitator');
    expect(profileLink).toBeInTheDocument();
    expect(profileLink).toHaveTextContent('AS');
  });

  it('renders the greeting', () => {
    render(<Home />);
    expect(screen.getByText(/Selamat pagi, Ardi/i)).toBeInTheDocument();
  });

  it('renders the upcoming events list', () => {
    render(<Home />);
    expect(screen.getByText('Acara terdekat')).toBeInTheDocument();

    // Check for specific events
    expect(screen.getByText('Outbound Leadership')).toBeInTheDocument();
    expect(screen.getByText('Team Building')).toBeInTheDocument();
    expect(screen.getByText('Fun Games Karyawan')).toBeInTheDocument();

    // Check for clients
    expect(screen.getByText('PT Maju Bersama')).toBeInTheDocument();
    expect(screen.getByText('CV Karya Mandiri')).toBeInTheDocument();
    expect(screen.getByText('Dinas Pendidikan Madiun')).toBeInTheDocument();
  });

  it('renders the bottom navigation', () => {
    render(<Home />);
    expect(screen.getByLabelText('Navigasi utama')).toBeInTheDocument();

    const navLinks = screen.getByLabelText('Navigasi utama');
    expect(navLinks).toHaveTextContent('Acara');
    expect(navLinks).toHaveTextContent('Rundown');
    expect(navLinks).toHaveTextContent('Chat');
  });
});
