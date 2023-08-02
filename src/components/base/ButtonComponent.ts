import ButtonComponentProps from "../../components/models/ButtonComponentProps";
import BaseComponent from "./BaseComponent";

export default class ButtonComponent extends BaseComponent {
    public props: ButtonComponentProps;
    public clickHandler: () => void;

    public constructor(props: ButtonComponentProps) {
        super(props);
        this.clickHandler = this.props.clickHandler;
    }

    protected resolveProps(): void {
        super.resolveProps();
        this.displayObject.onclick = this.clickHandler;
        this.displayObject.style.cursor = "pointer";
    }
}