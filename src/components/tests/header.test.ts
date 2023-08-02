/**
 * @jest-environment jsdom
 */

import Header from "../Header";
import { headerContainerProps } from "./mockups";

describe("Test core functionalities of Header class", () => {
    let header: Header;

    beforeEach(() => {
        header = new Header(headerContainerProps);
        header.render();
    });

    it("Test component render, should create HTMLElement and have the correct child relation", () => {
        expect(header.displayObject).not.toBeEmptyDOMElement();
        expect(header.getChildrens().length).toBe(3);
    });

    it("Test component render, checkbox click should change grid status", () => {
        const checklistBtn = header.getChildrens().find(o => o.props.id === "checklistBtn");
        const checklist = checklistBtn?.getChildrens().find(o => o.props.id === "checklist");
        checklist?.displayObject.click();

        expect(header.gridView).toBe(false);
    });
});