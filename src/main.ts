
import "core-js/stable";
import ApdexBoard from "./components/ApdexBoard";
import BaseComponent from "./components/base/BaseComponent";
import BaseComponentProps from "./components/models/BaseComponentProps";
import DataComponentProps from "./components/models/DataComponentProps";
import App from "./models/App";
import RadixSort from "./models/RadixSort";
import ApdexData from "./services/ApdexData";

class main {
    public constructor() {
        // Init data fetch and sort
        const appData = new ApdexData(new RadixSort(3));
        appData.setSortData(appData.fetchData());

        // Setup main parent for the UI init
        const bodyProps = { id: "main", type: "body" } as BaseComponentProps;
        const body = new BaseComponent(bodyProps);
        const bodyDOM = document.querySelector("body") || document.createElement("body");
        body.displayObject = bodyDOM;

        // Compose the apdexBoard with sorted data
        const apdexBoardProps = {
            id: "apdexBoard",
            type: "div",
            data: appData.hostData
        } as DataComponentProps<Map<string, App[]>>;
        const apdexBoardComponent = new ApdexBoard(apdexBoardProps);
        apdexBoardComponent.setParent(body);

        // Render DOM
        apdexBoardComponent.render();
    }
}
new main();