import type { Connector } from '@wagmi/core';
import { type CaipNetworkId } from '@reown/appkit-common';
export declare function getWalletConnectCaipNetworks(connector?: Connector): Promise<{
    supportsAllNetworks: boolean;
    approvedCaipNetworkIds: (`eip155:${string}` | `eip155:${number}` | `solana:${string}` | `solana:${number}` | `bip122:${string}` | `bip122:${number}` | `polkadot:${string}` | `polkadot:${number}`)[];
}>;
export declare function getEmailCaipNetworks(): {
    supportsAllNetworks: boolean;
    approvedCaipNetworkIds: CaipNetworkId[];
};
export declare function requireCaipAddress(caipAddress: string): `0x${string}`;
export declare function parseWalletCapabilities(str: string): any;
