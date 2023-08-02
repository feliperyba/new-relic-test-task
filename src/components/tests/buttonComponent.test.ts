/**
 * @jest-environment jsdom
 */

import ButtonComponent from "../../components/base/ButtonComponent";
import ButtonComponentProps from "../models/ButtonComponentProps";
import { buttonComponentPropMock } from "./mockups";

describe("Test core functionalities of ButtonComponent class", () => {
    let mockProp: ButtonComponentProps;
    let btnComponent: ButtonComponent;

    beforeEach(() => {
        mockProp = { ...buttonComponentPropMock };
        btnComponent = new ButtonComponent(mockProp);
    });

    it("Test component creation, clickHandler should be defined with right value", () => {
        expect(btnComponent.clickHandler).toBeDefined();
    });

    it("Test component render, should create HTMLElement, clickHandler should perform action", () => {
        btnComponent.clickHandler = () => {
            btnComponent.displayObject.innerHTML = "btn changed me";
        };

        btnComponent.render();
        btnComponent.displayObject.click();

        expect(btnComponent.displayObject.innerHTML).toBe("btn changed me");
    });
});