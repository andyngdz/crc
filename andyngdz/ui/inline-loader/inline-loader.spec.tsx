import React from "react";
import { render } from "@testing-library/react";
import { BasicInlineLoader } from "./inline-loader.composition";

describe("InlineLoader", () => {
  it("Should render with the correct text", () => {
    const { container } = render(<BasicInlineLoader />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
