import React from "react";
import { render } from "@testing-library/react";
import { BasicInlineLoader } from "./inline-loader.composition";

describe("inline-loader", () => {
  it("should render with the correct text", () => {
    const { container } = render(<BasicInlineLoader />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
