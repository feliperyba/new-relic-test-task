import DataComponent from "../../components/base/DataComponent";
import { dataComponentPropMock } from "./mockups";

describe("Test core functionalities of DataComponent class", () => {
    it("Test component creation, data should be defined with right value", () => {
        const mockProp = { ...dataComponentPropMock };
        const dataComponent = new DataComponent(mockProp);

        expect(dataComponent.data).toBeDefined();
        expect(dataComponent.data.length).toBe(10);
    });
});