import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProfilePage from './page'

describe('ProfilePage', () => {
  it('renders profile details correctly', () => {
    render(<ProfilePage />)

    // Check if the page title is present
    expect(screen.getByText('Profil')).toBeInTheDocument()

    // Check if the profile name is present
    expect(screen.getByRole('heading', { level: 1, name: 'Ardi Saputra' })).toBeInTheDocument()

    // Check if the subtitle is present
    expect(screen.getByText('Fasilitator Outbound Madiun')).toBeInTheDocument()

    // Check if the back link is present
    const backLink = screen.getByRole('link', { name: 'Kembali' })
    expect(backLink).toBeInTheDocument()
    expect(backLink).toHaveAttribute('href', '/')

    // Check avatar initials
    expect(screen.getByText('AS')).toBeInTheDocument()
  })
})
