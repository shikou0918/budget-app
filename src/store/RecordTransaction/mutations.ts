import { MutationTree } from 'vuex';
import { RecordTransactionState, RecordTransaction } from '../types';

const mutations: MutationTree<RecordTransactionState> = {
  addTransaction: (state, recordTransaction: RecordTransaction) => {
    state.recordTransactions.push(recordTransaction);
  },
};

export default mutations;