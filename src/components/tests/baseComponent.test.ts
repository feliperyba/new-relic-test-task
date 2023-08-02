/**
 * @jest-environment jsdom
 */

import BaseComponent from "../../components/base/BaseComponent";
import BaseComponentProps from "../models/BaseComponentProps";
import { baseComponentPropMock } from "./mockups";

describe("Test core functionalities of BaseComponent class", () => {
    let mockProp: BaseComponentProps;
    let baseComponent: BaseComponent;

    beforeEach(() => {
        mockProp = { ...baseComponentPropMock };
        baseComponent = new BaseComponent(mockProp);
    });

    it("Test component creation, props should be defined with right value", () => {
        expect(baseComponent.props).toBeDefined();
        expect(baseComponent.props.id).toBe("baseComponent");
    });

    it("Test component add child functionality, children should be present with right parent relation", () => {
        const childComponent = new BaseComponent(mockProp);

        baseComponent.add(childComponent);
        const childrens = baseComponent.getChildrens();
        const parent = childComponent.getParent();

        expect(childrens.length).toBe(1);
        expect(parent).toBe(baseComponent);
    });

    it("Test component remove child functionality, children should not be present with right parent relation", () => {
        const childComponent = new BaseComponent(mockProp);

        baseComponent.add(childComponent);
        baseComponent.remove(childComponent);

        const childrens = baseComponent.getChildrens();
        const parent = childComponent.getParent();

        expect(childrens.length).toBe(0);
        expect(parent).toBe(null);
    });

    it("Test component render, should create HTMLElement, diplayObject should be defined", () => {
        baseComponent.render();

        expect(baseComponent.displayObject).toBeDefined();
        expect(baseComponent.displayObject).not.toBeEmptyDOMElement();
        expect(baseComponent.displayObject.id).toBe(baseComponent.props.id);
        expect(baseComponent.displayObject.innerHTML).toBe(baseComponent.props.innerContent);
        expect(baseComponent.displayObject).toHaveClass(...baseComponent.props.styles as string[]);
    });
});