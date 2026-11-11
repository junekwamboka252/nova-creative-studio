
import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";


describe("NOVA Creative Studio", () => {
  test("renders the agency heading", () => {
    render(<App />);
    expect(screen.getByText("Selected Work")).toBeInTheDocument();
  });

  test("displays the initial projects", () => {
    render(<App />);
    expect(screen.getByText("Aura Skincare")).toBeInTheDocument();
    expect(screen.getByText("Flow Finance")).toBeInTheDocument();
    expect(screen.getByText("Forma Living")).toBeInTheDocument();
  });

  test("filters projects when searching", () => {
    render(<App />);

    const searchInput = screen.getByRole("textbox", {
      name: "Search projects",
    });

    fireEvent.change(searchInput, {
      target: { value: "Aura" },
    });

    expect(screen.getByText("Aura Skincare")).toBeInTheDocument();
    expect(screen.queryByText("Flow Finance")).not.toBeInTheDocument();
  });

  test("filters projects by category", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Branding" }));

    expect(screen.getByText("Aura Skincare")).toBeInTheDocument();
    expect(screen.getByText("Urban Bites")).toBeInTheDocument();
    expect(screen.queryByText("Flow Finance")).not.toBeInTheDocument();
  });

  test("adds a new project", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "+ Add Project" }));

    fireEvent.change(screen.getByLabelText("Project name"), {
      target: { value: "Pixel Studio" },
    });

    fireEvent.change(screen.getByLabelText("Category"), {
      target: { value: "Web Design" },
    });

    fireEvent.change(screen.getByLabelText("Project description"), {
      target: { value: "A creative website for a digital agency." },
    });

    fireEvent.change(screen.getByLabelText("Image URL"), {
      target: { value: "https://example.com/project.jpg" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Add project" }));

    expect(screen.getByText("Pixel Studio")).toBeInTheDocument();
    expect(
      screen.getByText("Your project has been added successfully!")
    ).toBeInTheDocument();
  });
});
