import { type Config, type CreateConfigParameters } from '@wagmi/core';
import { type Chain } from '@wagmi/core/chains';
import type UniversalProvider from '@walletconnect/universal-provider';
import { AppKit, type AppKitOptions } from '@reown/appkit';
import type { AppKitNetwork } from '@reown/appkit-common';
import { AdapterBlueprint } from '@reown/appkit/adapters';
interface PendingTransactionsFilter {
    enable: boolean;
    pollingInterval?: number;
}
export declare class WagmiAdapter extends AdapterBlueprint {
    wagmiChains: readonly [Chain, ...Chain[]] | undefined;
    wagmiConfig: Config;
    adapterType: string;
    private pendingTransactionsFilter;
    private unwatchPendingTransactions;
    private balancePromises;
    constructor(configParams: Partial<CreateConfigParameters> & {
        networks: AppKitNetwork[];
        pendingTransactionsFilter?: PendingTransactionsFilter;
        projectId: string;
    });
    getAccounts(params: AdapterBlueprint.GetAccountsParams): Promise<AdapterBlueprint.GetAccountsResult>;
    private getWagmiConnector;
    private createConfig;
    private setupWatchPendingTransactions;
    private setupWatchers;
    private addThirdPartyConnectors;
    private addWagmiConnectors;
    signMessage(params: AdapterBlueprint.SignMessageParams): Promise<AdapterBlueprint.SignMessageResult>;
    sendTransaction(params: AdapterBlueprint.SendTransactionParams): Promise<AdapterBlueprint.SendTransactionResult>;
    writeContract(params: AdapterBlueprint.WriteContractParams): Promise<AdapterBlueprint.WriteContractResult>;
    getEnsAddress(params: AdapterBlueprint.GetEnsAddressParams): Promise<AdapterBlueprint.GetEnsAddressResult>;
    estimateGas(params: AdapterBlueprint.EstimateGasTransactionArgs): Promise<AdapterBlueprint.EstimateGasTransactionResult>;
    parseUnits(params: AdapterBlueprint.ParseUnitsParams): AdapterBlueprint.ParseUnitsResult;
    formatUnits(params: AdapterBlueprint.FormatUnitsParams): AdapterBlueprint.FormatUnitsResult;
    private addWagmiConnector;
    syncConnectors(options: AppKitOptions, appKit: AppKit): Promise<void>;
    syncConnection(params: AdapterBlueprint.SyncConnectionParams): Promise<AdapterBlueprint.ConnectResult>;
    connectWalletConnect(chainId?: number | string): Promise<{
        clientId: string;
    }>;
    connect(params: AdapterBlueprint.ConnectParams): Promise<AdapterBlueprint.ConnectResult>;
    reconnect(params: AdapterBlueprint.ConnectParams): Promise<void>;
    getBalance(params: AdapterBlueprint.GetBalanceParams): Promise<AdapterBlueprint.GetBalanceResult>;
    getProfile(params: AdapterBlueprint.GetProfileParams): Promise<AdapterBlueprint.GetProfileResult>;
    getWalletConnectProvider(): AdapterBlueprint.GetWalletConnectProviderResult;
    disconnect(): Promise<void>;
    switchNetwork(params: AdapterBlueprint.SwitchNetworkParams): Promise<void>;
    getCapabilities(params: string): Promise<any>;
    grantPermissions(params: AdapterBlueprint.GrantPermissionsParams): Promise<unknown>;
    revokePermissions(params: AdapterBlueprint.RevokePermissionsParams): Promise<`0x${string}`>;
    walletGetAssets(params: AdapterBlueprint.WalletGetAssetsParams): Promise<AdapterBlueprint.WalletGetAssetsResponse>;
    setUniversalProvider(universalProvider: UniversalProvider): void;
}
export {};
