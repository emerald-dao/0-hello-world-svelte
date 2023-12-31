import type { TransactionStatusObject } from '@onflow/fcl';
import { writable } from 'svelte/store';

/*
  This stores are used to keep track of current Flow Transactions and their status. 
  This is useful for displaying the TransactionModal for example
*/

function createTransactionStore(transaction: TransactionStatusObject) {
	const { subscribe, set } = writable({
		progress: false,
		transaction: transaction,
		transactionId: ''
	});

	function initTransaction() {
		set({
			progress: true,
			transaction: transaction,
			transactionId: ''
		});
	}

	function subscribeTransaction(transaction: TransactionStatusObject, transactionId: string) {
		set({
			progress: true,
			transaction: transaction,
			transactionId
		});
	}

	function resetTransaction() {
		set({
			progress: false,
			transaction: transaction,
			transactionId: ''
		});
	}

	return {
		subscribe,
		initTransaction,
		subscribeTransaction,
		resetTransaction
	};
}

export const transaction = createTransactionStore({
	blockId: '',
	events: [],
	status: -1,
	statusString: '',
	errorMessage: '',
	statusCode: '1'
});
