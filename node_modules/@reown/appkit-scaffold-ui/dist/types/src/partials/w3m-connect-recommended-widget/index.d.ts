import { LitElement } from 'lit';
import '@reown/appkit-ui/wui-flex';
import '@reown/appkit-ui/wui-list-wallet';
export declare class W3mConnectRecommendedWidget extends LitElement {
    private unsubscribe;
    tabIdx?: number;
    private connectors;
    private loading;
    constructor();
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1> | null;
    private onConnectWallet;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-connect-recommended-widget': W3mConnectRecommendedWidget;
    }
}
