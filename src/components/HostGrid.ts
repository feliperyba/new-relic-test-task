import App from "../models/App";
import AppList from "./AppList";
import BaseComponent from "./base/BaseComponent";
import DataComponent from "./base/DataComponent";
import BaseComponentProps from "./models/BaseComponentProps";
import DataComponentProps from "./models/DataComponentProps";

export default class HostGrid extends DataComponent<Map<string, App[]>> {
    private static TOTAL_AMOUNT_OF_TOP_APPS = 5;

    public constructor(props: DataComponentProps<Map<string, App[]>>) {
        super(props);

        this.buildHostCards();
    }

    private buildHostCards() {
        let i = 1;
        this.data.forEach((appList, host) => {
            const hostCardContainerProps = {
                id: `hostCardContainer-${i}`,
                type: "div",
                styles: ["grid-item"]
            } as BaseComponentProps;

            const hostCardContainer = new BaseComponent(hostCardContainerProps);

            const hostAppListContainerProps = {
                id: `hostAppListContainer-${i}`,
                type: "div",
                styles: ["grid-app-list-container"]
            } as BaseComponentProps;

            const hostAppListContainer = new BaseComponent(hostAppListContainerProps);

            const hostCardHeaderProps = {
                id: `hostCardHeader-${i}`,
                type: "div",
                innerContent: `${host}`,
                styles: ["grid-item-header"]
            } as BaseComponentProps;

            hostAppListContainer.add(new BaseComponent(hostCardHeaderProps));

            const appListProps = {
                id: `hostCardAppList-${i}`,
                type: "div",
                styles: [],
                data: appList.slice(0, HostGrid.TOTAL_AMOUNT_OF_TOP_APPS)
            } as DataComponentProps<App[]>;

            hostAppListContainer.add(new AppList(appListProps));
            hostCardContainer.add(hostAppListContainer);

            this.add(hostCardContainer);
            i++;
        });
    }
}