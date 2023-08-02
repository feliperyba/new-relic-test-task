import HostAppData from "../../models/HostAppData";
import RadixSort from "../../models/RadixSort";
import ApdexData from "../../services/ApdexData";
import { mockedApp, mockedHostList, mockHostData } from "./mockups";

describe("Test Core data functionalities of ApdexData", () => {
    let apdexData: ApdexData;
    let mockData: HostAppData[];
    let mockHostList: string[];

    beforeEach(() => {
        apdexData = new ApdexData(new RadixSort(3));
        mockData = [...mockHostData];
        mockHostList = [...mockedHostList];
        apdexData.setSortData(mockData);
    });

    describe("Test data fetch and sort", () => {
        it("check if fetchData returns expected data structure", () => {
            const fetchData = apdexData.fetchData();

            expect(fetchData).toBeDefined();
            expect(fetchData).toBeInstanceOf(Array);
        });

        it("check if setSortData returns expected sorted data structure", () => {
            expect(apdexData.hostData).toBeDefined();
            expect(apdexData.hostData).toBeInstanceOf(Map);

            apdexData.hostData.forEach(appList => {
                appList.forEach((app, i) => {
                    const higherApdex = i > 0 ? i - 1 : i;

                    expect(appList[higherApdex].apdex).toBeGreaterThanOrEqual(app.apdex);
                });
            });
        });
    });

    describe("Test data insertion on the apdex structure", () => {
        it("add new app to list of hosts, should be present on the defined list", () => {
            const app = mockedApp();
            apdexData.addAppToHosts(app, mockHostList);

            mockHostList.forEach(host => {
                const hostAppList = apdexData.hostData.get(host);

                if (hostAppList) {
                    const foundApp = hostAppList.find(o => o.name === app.name);
                    expect(foundApp).toBeDefined();
                }
            });
        });

        it("add new app to list of hosts, should be present on the defined list and in the right position", () => {
            const app = mockedApp();
            apdexData.addAppToHosts(app, mockHostList);

            mockHostList.forEach(host => {
                const hostAppList = apdexData.hostData.get(host);

                if (hostAppList) {
                    const foundApp = hostAppList.find(o => o.name === app.name);

                    if (foundApp) {
                        const foundAppIndex = hostAppList.findIndex(o => o.name === app.name);
                        const higherApdex = foundAppIndex > 0 ? foundAppIndex - 1 : foundAppIndex;
                        const lowerApdex = foundAppIndex === hostAppList.length - 1 ? foundAppIndex : foundAppIndex + 1;

                        expect(hostAppList[higherApdex].apdex).toBeGreaterThanOrEqual(foundApp.apdex);
                        expect(hostAppList[lowerApdex].apdex).toBeLessThanOrEqual(foundApp.apdex);
                    }
                }
            });
        });

        it("add duplicated app to list of hosts, should not be present duplicated values on the list", () => {
            const app = mockedApp();
            apdexData.addAppToHosts(app, mockHostList);
            apdexData.addAppToHosts(app, mockHostList);

            mockHostList.forEach(host => {
                const hostAppList = apdexData.hostData.get(host);
                if (hostAppList) {
                    const appFilter = hostAppList.filter(o => o.name === app.name);

                    expect(appFilter.length).toBe(1);
                }
            });
        });
    });

    describe("Test data removal on the apdex structure", () => {
        it("remove app from list of hosts, should not be present on the list", () => {
            mockHostList.forEach(host => {
                const hostAppList = apdexData.hostData.get(host);

                if (hostAppList) {
                    const hostApp = hostAppList[0];

                    apdexData.removeAppFromHosts(hostApp, mockHostList);
                    const appFilter = hostAppList.filter(o => o.name === hostApp.name);

                    expect(appFilter.length).toBe(0);
                }
            });
        });
    });

    describe("Test data retrieve on the apdex structure", () => {
        it("request top app list from given host name, should return 25 positions", () => {
            apdexData.setSortData(apdexData.fetchData());

            mockHostList.forEach(host => {
                const topApps = apdexData.getTopAppsByHost(host);

                expect(topApps.length).toBe(25);
            });
        });

        it("remove app from list, should still return 25 positions", () => {
            apdexData.setSortData(apdexData.fetchData());

            mockHostList.forEach(host => {
                const hostAppList = apdexData.hostData.get(host);

                if (hostAppList) {
                    const hostApp = hostAppList[0];
                    apdexData.removeAppFromHosts(hostApp, mockHostList);
                }

                const topApps = apdexData.getTopAppsByHost(host);

                expect(topApps.length).toBe(25);
            });
        });
    });
});