// eslint-disable-next-line no-unused-vars
import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails component", () => {
  const validProps = {
    forecasts: {
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
    },
  };

  const { forecasts } = validProps;

  it("Renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecasts={forecasts} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastDetails forecasts={forecasts} />,
    );

    expect(getByText("Thu Jan 01 1970")).toHaveAttribute(
      "class",
      "forecast-details__date",
    );
    expect(getByText("12")).toHaveAttribute(
      "class",
      "forecast-details__min-temp",
    );
    expect(getByText("22")).toHaveAttribute(
      "class",
      "forecast-details__max-temp",
    );
    expect(getByText("80")).toHaveAttribute(
      "class",
      "forecast-details__humidity",
    );
    expect(getByText("60")).toHaveAttribute(
      "class",
      "forecast-details__wind-speed",
    );
    expect(getByTestId("forecast-details__wind-direction")).toHaveAttribute(
      "class",
      "forecast-details__wind-direction",
    );
  });
});
