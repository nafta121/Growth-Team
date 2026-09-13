import { render, screen } from "@testing-library/react";
import EventsPage from "./page";

describe("EventsPage", () => {
  it("renders the page with correct events", () => {
    render(<EventsPage />);

    // Check if the header is present
    expect(screen.getByText("Semua acara")).toBeInTheDocument();
    expect(screen.getByText("Acara mendatang")).toBeInTheDocument();
    expect(screen.getByText("JADWAL")).toBeInTheDocument();

    // Check if all events are rendered
    const eventNames = ["Outbound Leadership", "Team Building", "Fun Games Karyawan"];
    eventNames.forEach((eventName) => {
      expect(screen.getByText(eventName)).toBeInTheDocument();
    });

    // Check if links are correct
    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute("href", "/"); // Back link
    expect(links[1]).toHaveAttribute("href", "/acara/outbound-leadership");
    expect(links[2]).toHaveAttribute("href", "/acara/team-building");
    expect(links[3]).toHaveAttribute("href", "/acara/fun-games-karyawan");
  });
});
