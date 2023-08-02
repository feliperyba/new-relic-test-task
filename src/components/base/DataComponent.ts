import DataComponentProps from "../../components/models/DataComponentProps";
import BaseComponent from "./BaseComponent";

export default class DataComponent<T> extends BaseComponent {
    public props: DataComponentProps<T>;
    public data: T;

    public constructor(props: DataComponentProps<T>) {
        super(props);
        this.data = this.props.data;
    }
}