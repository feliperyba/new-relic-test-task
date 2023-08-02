import App from "../models/App";
import BaseComponent from "./base/BaseComponent";
import ButtonComponent from "./base/ButtonComponent";
import DataComponent from "./base/DataComponent";
import BaseComponentProps from "./models/BaseComponentProps";
import ButtonComponentProps from "./models/ButtonComponentProps";
import DataComponentProps from "./models/DataComponentProps";

export default class AppList extends DataComponent<App[]> {
    public constructor(props: DataComponentProps<App[]>) {
        super(props);

        this.buildApplist();
    }

    private buildApplist() {
        this.data.forEach((app, i) => {
            const appRowProps = {
                id: `app-row-${i}`,
                type: "div",
                styles: ["app-row"]
            } as BaseComponentProps;

            const appRow = new BaseComponent(appRowProps);

            const ApdexIndexProps = {
                id: "apdexIndex",
                type: "div",
                innerContent: `${app.apdex}`,
                styles: ["number-index", "column-apdex-index"]
            } as BaseComponentProps;

            appRow.add(new BaseComponent(ApdexIndexProps));

            const appNameBtnProps = {
                id: "appName",
                type: "div",
                innerContent: `${app.name}`,
                styles: ["app-link", "column-app-name"],
                clickHandler: () => alert(`App version: ${app.version}`)
            } as ButtonComponentProps;

            appRow.add(new ButtonComponent(appNameBtnProps));
            this.add(appRow);
        });
    }
}