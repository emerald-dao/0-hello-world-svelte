import * as fcl from '@onflow/fcl';
import getGreetingScript from '../cadence/scripts/get_greeting.cdc?raw';

async function getGreeting() {
	const result = await fcl.query({
		cadence: getGreetingScript,
		args: (arg, t) => []
	});

	return result;
}

export default getGreeting;
