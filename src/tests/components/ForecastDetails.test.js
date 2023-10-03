// eslint-disable-next-line no-unused-vars
import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails component", () => {
  const validProps = {
    date: 1111111,
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: 80,
    wind: {
      speed: 60,
      direction: "ne",
    },
  };

  it("Renders correctly", () => {
    const { asFragment } = render(
      <ForecastDetails
        date={validProps.date}
        temperature={validProps.temperature}
        humidity={validProps.humidity}
        wind={validProps.wind}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
