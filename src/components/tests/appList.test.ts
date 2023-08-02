/**
 * @jest-environment jsdom
 */

import App from "../../models/App";
import AppList from "../AppList";
import DataComponentProps from "../models/DataComponentProps";
import { appListProps, mockedAppArr } from "./mockups";
global.alert = jest.fn();

describe("Test core functionalities of AppList class", () => {
    let applistProp: DataComponentProps<App[]>;
    let appList: AppList;

    beforeEach(() => {
        applistProp = { ...appListProps };
        applistProp.data = mockedAppArr();

        appList = new AppList(applistProp);
        appList.render();
    });

    it("Test component render, should create HTMLElement and have the correct child relation", () => {
        expect(appList.displayObject).not.toBeEmptyDOMElement();
        expect(appList.getChildrens().length).toBe(5);
    });

    it("Test component render, child click should be defined and working", () => {
        const appRow = appList.getChildrens().find(o => o.props.id === "app-row-0");
        const appBtn = appRow?.getChildrens().find(o => o.props.id === "appName");
        appBtn?.displayObject.click();

        expect(global.alert).toHaveBeenCalledTimes(1);
    });
});