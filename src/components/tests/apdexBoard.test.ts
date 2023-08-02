/**
 * @jest-environment jsdom
 */

import ApdexBoard from "../ApdexBoard";
import { apdexBoardProps, mockedHostMap } from "./mockups";

describe("Test core functionalities of ApdexBoard class", () => {
    it("Test component render, should create HTMLElement and have the correct child relation", () => {
        const apdexboardProps = { ...apdexBoardProps };
        apdexboardProps.data = mockedHostMap();

        const apdexBoard = new ApdexBoard(apdexboardProps);
        apdexBoard.render();

        expect(apdexBoard.displayObject).not.toBeEmptyDOMElement();
        expect(apdexBoard.getChildrens().length).toBe(2);
    });
});