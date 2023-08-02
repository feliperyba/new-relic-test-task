import App from "../models/App";
import BaseComponent from "./base/BaseComponent";
import DataComponent from "./base/DataComponent";
import Header from "./Header";
import HostGrid from "./HostGrid";
import BaseComponentProps from "./models/BaseComponentProps";
import DataComponentProps from "./models/DataComponentProps";

/**
 *  Complex components implements pseudo Builder pattern to compose it
 */
export default class ApdexBoard extends DataComponent<Map<string, App[]>>{
    public constructor(props: DataComponentProps<Map<string, App[]>>) {
        super(props);

        this.buildAppHeader();
        this.buildDisplayGrid();
    }

    private buildAppHeader() {
        const headerContainerProps = {
            id: "headerContainer",
            type: "div",
            styles: ["header-container"]
        } as BaseComponentProps;

        const container = new BaseComponent(headerContainerProps);

        const headerProps = {
            id: "header",
            type: "div",
            styles: ["header", "row"]
        } as BaseComponentProps;

        container.add(new Header(headerProps));
        this.add(container);
    }

    private buildDisplayGrid() {
        const hostGridProps = {
            id: "hostGrid",
            type: "div",
            styles: ["grid-container"],
            data: this.data
        } as DataComponentProps<Map<string, App[]>>;

        this.add(new HostGrid(hostGridProps));
    }
}
