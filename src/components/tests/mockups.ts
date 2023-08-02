import BaseComponentProps from "../../components/models/BaseComponentProps";
import ButtonComponentProps from "../../components/models/ButtonComponentProps";
import DataComponentProps from "../../components/models/DataComponentProps";
import App from "../../models/App";

export const baseComponentPropMock = {
    id: "baseComponent",
    type: "div",
    styles: ["style-1", "style-2"],
    inputType: "",
    attributes: [],
    innerContent: "My content"
} as BaseComponentProps;

export const buttonComponentPropMock = {
    id: "buttonComponent",
    type: "div",
    styles: ["style-1", "style-2"],
    inputType: "",
    attributes: [],
    innerContent: "My button",
    clickHandler: () => console.log("click")
} as ButtonComponentProps;

export const dataComponentPropMock = {
    id: "buttonComponent",
    type: "div",
    styles: ["style-1", "style-2"],
    inputType: "",
    attributes: [],
    innerContent: "My data",
    data: [...Array(10)].map((val, i) => i)
} as DataComponentProps<Array<number>>;

export const headerContainerProps = {
    id: "header",
    type: "div",
    styles: ["header", "row"]
} as BaseComponentProps;

export const appListProps = {
    id: "hostCardAppList",
    type: "div",
    styles: ["grid-app-list-container"],
    data: []
} as DataComponentProps<App[]>;

export const hostGridProps = {
    id: "hostGrid",
    type: "div",
    styles: ["grid-container"],
    data: new Map<string, App[]>()
} as DataComponentProps<Map<string, App[]>>;

export const apdexBoardProps = {
    id: "apdexBoard",
    type: "div",
    data: new Map<string, App[]>()
} as DataComponentProps<Map<string, App[]>>;

const mockedApp = () => {
    const app = new App();
    app.apdex = 75;
    app.name = "My new App";
    app.version = 9;
    app.contributors = [];
    return app;
};

export const mockedHostList = [
    "92116865-5462.conor.com",
    "7e6272f7-098e.dakota.biz",
    "95b346a0-17f4.abbigail.name"
];

export const mockedAppArr = (): App[] => [...Array(5)].map(() => mockedApp());

export const mockedHostMap = (): Map<string, App[]> => {
    return mockedHostList.reduce((hostMap, host) => hostMap.set(host, mockedAppArr()), new Map<string, App[]>());
};

