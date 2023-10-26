import { mutate, authz } from '@onflow/fcl';
import replaceWithProperImports from '../utils/replaceWithProperImports';
import changeGreetingTx from '../cadence/transactions/changeGreeting.cdc?raw';

async function changeGreeting(newGreeting: string) {
	const transactionId = await mutate({
		cadence: replaceWithProperImports(changeGreetingTx),
		args: (arg, t) => [arg(newGreeting, t.String)],
		proposer: authz,
		payer: authz,
		authorizations: [authz],
		limit: 999
	});

	console.log('Transaction Id', transactionId);

	return transactionId;
}

export default changeGreeting;
