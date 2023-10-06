import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
  it("renders the correct city and location props", () => {
    const { getByText } = render(
      <LocationDetails city="Manchester" country="UK" />,
    );

    expect(getByText("Manchester, UK")).toBeInstanceOf(HTMLHeadingElement);
  });

  it("handles 404 errors correctly", () => {
    const { getByText } = render(
      <LocationDetails
        city="Manc"
        country="UK"
        errorMessage="No such town or city, please try again!"
      />,
    );

    expect(getByText("No such town or city, please try again!")).toBeTruthy();
    expect(
      getByText("No such town or city, please try again!"),
    ).toBeInTheDocument();
  });

  it("handles 500 errors correctly", () => {
    const { getByText } = render(
      <LocationDetails
        city="Manchester"
        country="UK"
        errorMessage="There was a server error, please try again later!"
      />,
    );

    expect(
      getByText("There was a server error, please try again later!"),
    ).toBeTruthy();
    expect(
      getByText("There was a server error, please try again later!"),
    ).toBeInTheDocument();
  });
});
