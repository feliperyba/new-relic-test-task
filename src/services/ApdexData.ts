import App from "../models/App";
import HostAppData from "../models/HostAppData";
import { ISorter } from "../models/interface/ISorter";
import { IHostService } from "./interfaces/IHostService";

export default class ApdexData implements IHostService<App, string> {
    private static TOTAL_AMOUNT_OF_TOP_APPS = 25;
    public hostData: Map<string, App[]>;

    public constructor(private sorter: ISorter<HostAppData>) { }

    public fetchData(): HostAppData[] {
        return require("../data/host-app-data.json");
    }

    // Here we first going to sort the whole array data we got and after that
    // Compose and couple the final sorted map group by Hosts
    // It uses a Radix sort O(nk), Tho this final group section BigO is O(n^2) because on how the host data structure is organized
    // I tried to compensate in the data insertion performance, get set and push all have BigO O(1)
    public setSortData(apps: HostAppData[]): void {
        this.hostData = this.sorter.sort(apps).reduce((hostMap, currApp) => {
            currApp.host.forEach(host => {
                const currHost = hostMap.get(host);

                if (!currHost) {
                    hostMap.set(host, [currApp]);
                    return;
                }

                currHost.push(currApp);
            });

            return hostMap;
        }, new Map<string, App[]>());
    }

    // Using binary search, we will iterate over the hosts and add the App at the correct location
    // The Binary search has BigO of O(log n), but this iteration scenario brings it to O(n)
    // Consider this a local cache, after this, the ORM / DataBase will create the correct host indexation
    public addAppToHosts(app: App, hosts: string[]): void {
        hosts.forEach(host => {
            const currHostAppList = this.hostData.get(host);
            if (currHostAppList) this.addAppToHostList(app, currHostAppList);
        }
        );
        // Run backend update for host relation update ...
    }

    // To remove an App, we can use findIndex which give us bigO of O(n), as the others calls used here as well
    // Consider this a local cache, after this, the ORM / DataBase will create the correct host indexation
    public removeAppFromHosts(app: App, hosts: string[]): void {
        hosts.forEach(host => {
            const currHostAppList = this.hostData.get(host);
            if (currHostAppList) this.removeAppFromHostList(app, currHostAppList);
        }
        );
        // Run backend update for host relation update ...
    }

    public getTopAppsByHost(hostName: string): App[] {
        const hostAppList = this.hostData.get(hostName);
        return hostAppList ? hostAppList.slice(0, ApdexData.TOTAL_AMOUNT_OF_TOP_APPS) : [];
    }

    private addAppToHostList(app: App, hostAppArr: App[]) {
        const appIndex = hostAppArr.findIndex(o => o.name === app.name);
        if (appIndex === -1) hostAppArr.splice(this.findAppLocation(app, hostAppArr) + 1, 0, app);

        return hostAppArr;
    }

    private removeAppFromHostList(app: App, hostAppArr: App[]) {
        const appIndex = hostAppArr.findIndex(o => o.name === app.name);
        if (appIndex > -1) hostAppArr.splice(appIndex, 1);

        return hostAppArr;
    }

    private findAppLocation(app: App, arr: App[], start?: number, end?: number): number {
        start = start || 0;
        end = end || arr.length;
        
        const pivot = Math.floor(start + (end - start) / 2);
        console.log(start, end, pivot, app.apdex, arr[pivot].apdex);
        if (arr[pivot].apdex === app.apdex) return pivot;
        if (end - start <= 1)
            return arr[pivot].apdex < app.apdex ? pivot - 1 : pivot;
        if (arr[pivot].apdex > app.apdex) {
            return this.findAppLocation(app, arr, pivot, end);
        } else {
            return this.findAppLocation(app, arr, start, pivot);
        }
    }
}