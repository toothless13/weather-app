// eslint-disable-next-line no-unused-vars
import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary component", () => {
  const validProps = {
    date: 1111111,
    description: "Stub description",
    icon: "800",
    temperature: {
      min: 12,
      max: 22,
    },
    onSelect: () => {},
  };

  it("Renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
        onSelect={validProps.onSelect}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />,
    );

    expect(getByText("Thu Jan 01 1970")).toHaveAttribute(
      "class",
      "forecast-summary__date",
    );
    expect(getByText("Stub description")).toHaveAttribute(
      "class",
      "forecast-summary__description",
    );
    expect(getByTestId("forecast-icon")).toHaveAttribute(
      "class",
      "forecast-summary__icon",
    );
    expect(getByText("22°C")).toHaveAttribute(
      "class",
      "forecast-summary__temperature",
    );
  });
});
