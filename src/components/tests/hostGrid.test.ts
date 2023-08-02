/**
 * @jest-environment jsdom
 */

import HostGrid from "../HostGrid";
import { hostGridProps, mockedHostMap } from "./mockups";
 
describe("Test core functionalities of HostGrid class", () => {
    it("Test component render, should create HTMLElement and have the correct child relation", () => {
        const hostgridProps = { ...hostGridProps };
        hostgridProps.data = mockedHostMap();
 
        const hostGrid = new HostGrid(hostgridProps);
        hostGrid.render();
 
        expect(hostGrid.displayObject).not.toBeEmptyDOMElement();
        expect(hostGrid.getChildrens().length).toBe(3);
    });
});