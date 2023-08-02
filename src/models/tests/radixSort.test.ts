import { mockHostData } from "../../services/tests/mockups";
import RadixSort from "../RadixSort";

describe("Test Core data functionalities of RadixSort class", () => {
    it("check if returns expected sorted data structure", () => {
        const radixSort = new RadixSort(3);
        const hostData = [...mockHostData];

        radixSort.sort(hostData).forEach((hostApp, i, sortedHostData) => {
            const higherApdex = i > 0 ? i - 1 : i;
            expect(sortedHostData[higherApdex].apdex).toBeGreaterThanOrEqual(hostApp.apdex);
        });
    });
});
