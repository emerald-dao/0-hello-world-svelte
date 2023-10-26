import { query } from '@onflow/fcl';
import replaceWithProperImports from '../utils/replaceWithProperImports';
import getGreetingScript from '../cadence/scripts/getGreeting.cdc?raw';

async function getGreeting() {
	const result = await query({
		cadence: replaceWithProperImports(getGreetingScript),
		args: (arg, t) => []
	});

	return result;
}

export default getGreeting;
