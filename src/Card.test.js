import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("should render w/o crashing", () => {
  render(<Card />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});
