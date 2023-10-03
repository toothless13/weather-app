import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  const validProps = {
    location: {
      city: "Manchester",
      country: "UK",
    },
    forecasts: [
      {
        date: 1111111,
        description: "Stub description",
        icon: "stubIcon",
        temperature: {
          min: 12,
          max: 22,
        },
        humidity: 80,
        wind: {
          speed: 60,
          direction: "ne",
        },
      },
      {
        date: 2222222,
        description: "Stub description 2",
        icon: "stubIcon2",
        temperature: {
          min: 13,
          max: 23,
        },
        humidity: 70,
        wind: {
          speed: 50,
          direction: "nw",
        },
      },
      {
        date: 3333333,
        description: "Stub description 3",
        icon: "stubIcon3",
        temperature: {
          min: 14,
          max: 24,
        },
        humidity: 60,
        wind: {
          speed: 40,
          direction: "s",
        },
      },
    ],
  };

  it("renders App component", () => {
    render(
      <App location={validProps.location} forecasts={validProps.forecasts} />,
    );
    const h1Element = screen.getByText(/Manchester, UK/i);
    expect(h1Element).toBeInTheDocument();
  });
});
