import React from "react";
import ReactDom from "react-dom";
import { PortfolioV2 } from "../Portfolio";

import "@testing-library/jest-dom/extend-expect";

it("renders without crash", () => {
    const div = document.createElement("div");
    ReactDom.render(<PortfolioV2></PortfolioV2>,div);
})
