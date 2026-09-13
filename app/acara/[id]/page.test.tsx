import { render, screen, within } from '@testing-library/react';
import EventDetail from './page';

describe('EventDetail Page', () => {
  it('renders the event cover details correctly', () => {
    render(<EventDetail />);
    expect(screen.getByText('12 JUNI 2026')).toBeInTheDocument();

    // Testing text broken with <br /> can be tricky using just getByText.
    // Instead we can find the <h1> and assert on its textContent.
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('OutboundLeadership');

    expect(screen.getByText('PT Maju Bersama')).toBeInTheDocument();
  });

  it('renders all rundown items correctly', () => {
    render(<EventDetail />);

    // Check if the times are rendered
    expect(screen.getByText('06.30')).toBeInTheDocument();
    expect(screen.getByText('07.00')).toBeInTheDocument();
    expect(screen.getByText('07.30')).toBeInTheDocument();
    expect(screen.getByText('08.15')).toBeInTheDocument();
    expect(screen.getByText('10.00')).toBeInTheDocument();

    // Check if the titles are rendered
    expect(screen.getByText('Persiapan fasilitator')).toBeInTheDocument();
    expect(screen.getByText('Registrasi peserta')).toBeInTheDocument();
    expect(screen.getByText('Pembukaan')).toBeInTheDocument();

    // We check for the text containing 'Sesi Leadership Challenge' as there is a badge inside it
    const activeTitleElement = screen.getByRole('heading', { level: 3, name: /Sesi Leadership Challenge/i });
    expect(activeTitleElement).toBeInTheDocument();

    expect(screen.getByText('Istirahat')).toBeInTheDocument();
  });

  it('identifies and highlights the active session', () => {
    render(<EventDetail />);

    // The active session text should be rendered
    const activeBadge = screen.getByText('Sedang berlangsung');
    expect(activeBadge).toBeInTheDocument();

    // The active session list item should have the 'active-session' class
    const activeListItem = activeBadge.closest('li');
    expect(activeListItem).toHaveClass('active-session');

    // Check that inside this list item, the title is 'Sesi Leadership Challenge'
    if (activeListItem) {
      expect(within(activeListItem).getByRole('heading', { level: 3 })).toHaveTextContent('Sesi Leadership Challenge');
    }
  });

  it('verifies non-active sessions do not have the active-session class or badge', () => {
    render(<EventDetail />);

    const listItems = screen.getAllByRole('listitem');
    const inactiveItems = listItems.filter(item => !item.classList.contains('active-session'));

    // Ensure all inactive items do not have the 'Sedang berlangsung' badge
    inactiveItems.forEach(item => {
      expect(within(item).queryByText('Sedang berlangsung')).not.toBeInTheDocument();
    });
  });
});
