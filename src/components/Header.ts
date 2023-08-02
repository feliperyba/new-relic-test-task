import BaseComponent from "./base/BaseComponent";
import ButtonComponent from "./base/ButtonComponent";
import BaseComponentProps from "./models/BaseComponentProps";
import ButtonComponentProps from "./models/ButtonComponentProps";

export default class Header extends BaseComponent {
    public gridView = true;

    public constructor(props: BaseComponentProps) {
        super(props);

        this.buildTitleComponent();
        this.buildEmailComponent();
        this.buildCheckboxComponent();
    }

    private buildTitleComponent() {
        const appTitleProps = {
            id: "appTitle",
            type: "div",
            innerContent: "Apps by Host",
            styles: ["title"]
        } as BaseComponentProps;

        this.add(new BaseComponent(appTitleProps));
    }

    private buildEmailComponent() {
        const userEmailProps = {
            id: "userEmail",
            type: "div",
            innerContent: "for user averylongemailaddress@companyname.com",
            styles: ["user-email"]
        } as BaseComponentProps;

        this.add(new BaseComponent(userEmailProps));
    }

    private buildCheckboxComponent() {
        const checklistBtnProps = {
            id: "checklistBtn",
            type: "div",
            styles: ["list-checkbox"]
        } as BaseComponentProps;

        const checklistBtnContainer = new BaseComponent(checklistBtnProps);

        const labelProps = {
            id: "checklistLabel",
            type: "label",
            innerContent: "Show as list",
            attributes: [
                ["for", "checklist"]
            ]
        } as BaseComponentProps;

        const label = new BaseComponent(labelProps);

        const checkboxProps = {
            id: "checklist",
            type: "input",
            inputType: "checkbox",
            clickHandler: () => {
                this.gridView = !this.gridView;
                const hostGridElm = document.getElementById("hostGrid");

                if (hostGridElm) {
                    if (this.gridView) {
                        label.displayObject.innerHTML = "Show as list";
                        for (let i = 0; i < hostGridElm.childElementCount; i++) {
                            hostGridElm.children.item(i)?.classList.remove("grid-list-item");
                        }
                    } else {
                        label.displayObject.innerHTML = "Show as an awesome grid";
                        for (let i = 0; i < hostGridElm.childElementCount; i++) {
                            hostGridElm.children.item(i)?.classList.add("grid-list-item");
                        }
                    }
                }
            }
        } as ButtonComponentProps;

        checklistBtnContainer.add(new ButtonComponent(checkboxProps));
        checklistBtnContainer.add(label);

        this.add(checklistBtnContainer);
    }
}