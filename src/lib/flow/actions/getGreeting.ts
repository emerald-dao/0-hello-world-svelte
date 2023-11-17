import { query } from '@onflow/fcl';
import getGreetingScript from '../cadence/scripts/getGreeting.cdc?raw';

async function getGreeting() {
	const result = await query({
		cadence: getGreetingScript,
		args: (arg, t) => []
	});

	return result;
}

export default getGreeting;
