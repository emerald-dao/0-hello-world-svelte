import * as fcl from '@onflow/fcl';
import getGreetingScript from '../cadence/scripts/get_greeting.cdc?raw';
import replaceWithProperImports from '../utils/replaceWithProperImports';

async function getGreeting() {
	const result = await fcl.query({
		cadence: replaceWithProperImports(getGreetingScript),
		args: (arg, t) => []
	});

	return result;
}

export default getGreeting;
