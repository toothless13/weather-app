import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm component", () => {
  const validProps = {
    searchText: "Oxford",
    setSearchText: jest.fn(),
    onSubmit: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a button with the correct text", () => {
    const { getByText, getByRole } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />,
    );

    expect(getByRole("button")).toBeInTheDocument();
    expect(getByRole("button")).toHaveTextContent("Search");
    expect(getByText("Search")).toBeTruthy();
  });
});
