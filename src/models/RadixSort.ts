import HostAppData from "./HostAppData";
import { ISorter } from "./interface/ISorter";

/**
 *  Since we know the amount of digits the apdex data can have, we can move out from the merge sort comparisson approach
 *  and achieve BigO of O(nk), with similar space complexity of the merge sort, being O(n + k)
 */
export default class RadixSort implements ISorter<HostAppData> {
    public constructor(private maxDigits: number) { }

    public sort(arr: HostAppData[]): HostAppData[] {
        for (let i = 0; i <= this.maxDigits; i++) {
            const buckets = Array.from<number, HostAppData[]>({ length: 10 }, () => []);

            arr.forEach(app => {
                const digit = this.getDigit(app.apdex, i);
                // Descending
                buckets[9 - digit].push(app);
            });
            arr = ([] as HostAppData[]).concat(...buckets);
        }

        return arr;
    }

    private getDigit(value: number, place: number) {
        const strValue = String(value);
        if (strValue.length - 1 < place) return 0;

        const idx = (strValue.length - 1) - place;
        return strValue[idx] === "-" ? 0 : Number(strValue[idx]);
    }
}