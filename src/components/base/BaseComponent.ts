import BaseComponentProps from "../../components/models/BaseComponentProps";

/**
 * Implements composite pattern that enables enough abstraction 
 * to compose complex objects with different configurations
 */
export default class BaseComponent {
    public props: BaseComponentProps;
    public displayObject: HTMLElement;
    protected parent: BaseComponent | null;
    protected children: Array<BaseComponent> = [];

    public constructor(props: BaseComponentProps) {
        this.props = props;
    }

    public render(): void {
        this.createDisplayObject();
        this.resolveProps();
        this.children.forEach(component => component.render());
    }

    public setParent(parent: BaseComponent | null): void {
        this.parent = parent;
    }

    public getParent(): BaseComponent {
        return this.parent as BaseComponent;
    }
    
    public add(component: BaseComponent): void {
        this.children.push(component);
        component.setParent(this);
    }

    public remove(component: BaseComponent): void {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
        component.setParent(null);
    }

    public getChildrens(): BaseComponent[] {
        return this.children;
    }

    protected createDisplayObject(): void {
        this.displayObject = document.createElement(this.props.type);
        this.displayObject.id = this.props.id;
        this.parent?.displayObject?.appendChild(this.displayObject);
    }

    protected resolveProps(): void {
        if (this.displayObject) {
            if (this.props.innerContent) {
                this.displayObject.innerHTML = this.props.innerContent;
            }
            if (this.props.inputType) {
                (this.displayObject as HTMLInputElement).type = this.props.inputType;
            }
            this.props.styles?.forEach(style => {
                this.displayObject?.classList.add(style);
            });
            this.props.attributes?.forEach(att => {
                this.displayObject?.setAttribute(att[0], att[1]);
            });
        }
    }
}