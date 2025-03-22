import { LitElement } from 'lit';
import '@reown/appkit-ui/wui-flex';
import '../../partials/w3m-legal-checkbox/index.js';
import '../../partials/w3m-legal-footer/index.js';
import '../../partials/w3m-social-login-list/index.js';
export declare class W3mConnectSocialsView extends LitElement {
    static styles: import("lit").CSSResult;
    private checked;
    render(): import("lit").TemplateResult<1>;
    private onCheckboxChange;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-connect-socials-view': W3mConnectSocialsView;
    }
}
