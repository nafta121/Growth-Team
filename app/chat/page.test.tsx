import { render, screen } from "@testing-library/react";
import ChatPage from "./page";

describe("ChatPage", () => {
  it("renders the chat page correctly", () => {
    render(<ChatPage />);

    // Check header text
    expect(screen.getByText("Chat fasilitator")).toBeInTheDocument();

    // Check back link
    const backLink = screen.getByRole("link", { name: /kembali/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute("href", "/");

    // Check empty state
    expect(screen.getByText("Belum ada percakapan")).toBeInTheDocument();
    expect(
      screen.getByText("Pesan internal fasilitator akan tampil di sini.")
    ).toBeInTheDocument();
  });
});
