import { config } from '@onflow/fcl';
import dappInfo from '$lib/config/dappData';
import { env } from '$env/dynamic/public';

config()
	.put('app.detail.title', dappInfo.title)
	.put('app.detail.icon', dappInfo.icon)
	.put('accessNode.api', 'https://rest-testnet.onflow.org')
	.put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn')
	.put('0xDeployer', env.PUBLIC_CONTRACT_ADDRESS);
